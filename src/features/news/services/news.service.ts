import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { NewsEntity } from '../entities/news.entity';
import { NewsCreateDto } from '../dto/news/news-create.dto';
import { NewsUpdateDto } from '../dto/news/news-update.dto';
import { NewsListDto } from '../dto/news/news-list.dto';

type MulterFile = Express.Multer.File;


@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity)
        private readonly repo: Repository<NewsEntity>,
    ) {}

    async create(payload: NewsCreateDto, image: MulterFile): Promise<NewsEntity> {
        const newNews = NewsEntity.create({...payload, image: image.path});
        await NewsEntity.save(newNews)
        return newNews;
    }

    async getAll() {
        const news = await this.repo.find({ order: { createdAt: 'DESC' } });
        return plainToInstance(NewsListDto, news, { excludeExtraneousValues: true });
    }

    async getOne(id: number) {
        const news = await this.repo.findOneBy({ id });
        if (!news) throw new NotFoundException('News not found');
        return plainToInstance(NewsListDto, news, { excludeExtraneousValues: true });
    }

    async update(id: number, payload: NewsUpdateDto) {
        const news = await this.repo.findOneBy({ id });
        if (!news) throw new NotFoundException('News not found');
        Object.assign(news, payload);
        await this.repo.save(news);
        return news;
    }

    async delete(id: number) {
        const news = await this.repo.findOneBy({ id });
        if (!news) throw new NotFoundException('News not found');
        return this.repo.remove(news);
    }
}
