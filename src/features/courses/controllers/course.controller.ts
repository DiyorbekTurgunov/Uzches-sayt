import {Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {ApiConsumes, ApiTags} from '@nestjs/swagger';
import { CourseService } from '../services/course.service';
import { CourseCreateDto } from '../dto/course/course-create.dto';
import { CourseUpdateDto } from '../dto/course/course-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../configs/multer.config";

@ApiTags('courses')
@Controller('courses')
export class CourseController {
    constructor(private readonly service: CourseService) {}

    @Post()
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(FileInterceptor("image", {storage: storageOptions}))
    async create(@Body() payload: CourseCreateDto, @UploadedFile() image: Express.Multer.File) {
        return await this.service.create(payload, image)
    }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: CourseUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
