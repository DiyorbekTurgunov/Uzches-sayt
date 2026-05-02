import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {ApiTags, ApiBearerAuth, ApiConsumes} from '@nestjs/swagger';
import { NewsService } from '../services/news.service';
import { NewsCreateDto } from '../dto/news/news-create.dto';
import { NewsUpdateDto } from '../dto/news/news-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../configs/multer.config";

@ApiTags('news')
@Controller('news')
export class NewsController {
    constructor(private readonly service: NewsService) {}

    @Post()
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(FileInterceptor("image", {storage: storageOptions}))
    async create(@Body() payload: NewsCreateDto, @UploadedFile() image: Express.Multer.File) {
        return await this.service.create(payload, image)
    }


    @Get()
    async getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        return this.service.getOne(id);
    }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    async update(@Param('id') id: number, @Body() payload: NewsUpdateDto) {
        return this.service.update(id, payload);
    }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    async delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}
