import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Course} from "../entities/course.entity";
import {Repository} from "typeorm";
import {CourseCreateDto} from "../dto/course/course-create.dto";
import {plainToClass, plainToInstance} from "class-transformer";
import {CourseListDto} from "../dto/course/course-list.dto";
import {CourseUpdateDto} from "../dto/course/course-update.dto";

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private readonly repo: Repository<Course>,
        ) {}

        async create(payload: CourseCreateDto) {
            const newCourse = this.repo.create(payload);
            await this.repo.save(newCourse);
            return plainToClass(CourseListDto, newCourse, {
                excludeExtraneousValues: true,
            });
        }

        async getAll() {
            const rawCourses = await this.repo.find();
            const courses = plainToInstance(
                CourseListDto,
                rawCourses,
                { excludeExtraneousValues: true, }
            )
            return courses;
        }

        async getOne(id: number) {
            const rawCourse = await this.repo.findOneBy({id})
            if (!rawCourse) {
                throw new NotFoundException("Not Found");
            }
            return plainToInstance(CourseListDto, rawCourse, {
                excludeExtraneousValues: true,
            })
        }
        async update(id: number, payload: CourseUpdateDto) {
            const courses = await this.repo.findOneBy({id})
            if (!courses) {
                throw new NotFoundException();
            }

            Object.assign(
                courses,
                Object.fromEntries(
                    Object.entries(payload).filter(
                        ([key, value]) => value !== null && value !== undefined,
                    )
                )
            );
            await this.repo.save(courses);
            return courses
        }

        async delete(id: number) {
            const courses = await this.repo.findOneBy({id})
            if (!courses) {
                throw new NotFoundException("Not Found");
            }
            return await this.repo.remove(courses);
        }
}