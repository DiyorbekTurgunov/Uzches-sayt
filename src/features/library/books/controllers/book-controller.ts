import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ApiResponse} from "@nestjs/swagger";
import {BookListDto} from "../dtos/book/book-list.dto";
import {BookService} from "../service/book-service";
import {BookCreateDto} from "../dtos/book/book-create.dto";
import {BookUpdateDto} from "../dtos/book/book-update.dto";

@Controller('book')
export class BookController {
    constructor(private readonly service: BookService) {}

    @Post()
    @ApiResponse({type: BookListDto})
    async create(@Body() payload: BookCreateDto) {
        return await this.service.create(payload);
    }

    @Get()
    @ApiResponse({description: "", type: BookListDto, isArray: true})
    async getAll() {
        return await this.service.getAll();
    }

    @Get(':id')
    @ApiResponse({type: BookListDto })
    async getOne(@Param('id') id: number) {
        return await this.service.getOne(id);
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() payload: BookUpdateDto) {
        return this.service.update(id, payload);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}