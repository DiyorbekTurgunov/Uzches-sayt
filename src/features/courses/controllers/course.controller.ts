import {Body, Controller, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import { AuthenticationGuard } from "../../../core/guards/authentication.guard";
import {ApiResponse} from "@nestjs/swagger";
import {CourseService} from "../service/course-service";
import {CourseListDto} from "../dto/course/course-list.dto";
import {CourseCreateDto} from "../dto/course/course-create.dto";

@Controller('course')
@UseGuards(AuthenticationGuard)
export class CourseController {
    constructor(private readonly service: CourseService) {}

    @Post()
    @ApiResponse({type: CourseListDto})
    async create(@Body() payload: CourseCreateDto) {
        return await this.service.create(payload);
    }

    @Get()
    @ApiResponse({description: "", type: CourseListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(':id')
    @ApiResponse({type: CourseListDto })
    async getOne(@Param('id') id: number) {
        return await this.service.getOne(id)
    }

    @Patch()
    async delete(@Param('id') id: number) {
        return this.service.delete(id)
    }
}
