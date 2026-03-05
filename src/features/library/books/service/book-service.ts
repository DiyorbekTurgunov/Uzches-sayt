import {Injectable, NotFoundException} from "@nestjs/common";
import {Book} from "../entities/books.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {BookCreateDto} from "../dtos/book/book-create.dto";
import {plainToInstance} from "class-transformer";
import {BookListDto} from "../dtos/book/book-list.dto";
import {BookUpdateDto} from "../dtos/book/book-update.dto";

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private readonly repo: Repository<Book>,
    ) {}

    async create(payload: BookCreateDto) {
        const newBook = this.repo.create(payload);
        await this.repo.save(newBook);
        return plainToInstance(BookListDto, newBook, {
            excludeExtraneousValues: true,
        });
    }

    async getAll() {
        const rawBooks = await this.repo.find();
        const books = plainToInstance(
            BookListDto,
            rawBooks,
            { excludeExtraneousValues: true, },
        )
        return books;
    }

    async getOne(id: number) {
        const rawBook = await this.repo.findOneBy({id})
        if (!rawBook) {
            throw new NotFoundException("Book not found with id " + id);
        }
        return plainToInstance(BookListDto, rawBook, {
            excludeExtraneousValues: true,
        });
    }

    async update(id: number, payload: BookUpdateDto) {
        const books = await this.repo.findOneBy({id})
        if (!books) {
            throw new NotFoundException();
        }

        Object.assign(
            books,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(books);
        return books;
    }

    async delete(id: number) {
        const books = await this.repo.findOneBy({id})
        if(!books) {
            throw new Error(" not found");
        }
        return await this.repo.remove(books);
    }
}