import { Injectable } from '@nestjs/common';
import { News } from './database/entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(News)
    private readonly postsRepository: Repository<News>,
  ) { }

  async getNews(): Promise<News[]> {
    const news = this.postsRepository.find();
    return news;
  }

  async getOneNews(id: number): Promise<News | undefined> {
    return this.postsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createNews(data: News): Promise<News> {
    return this.postsRepository.save(data);
  }

  async updateNews(data: News): Promise<News> {
    const existingNews = await this.postsRepository.findOne({
      where: {
        id: data.id,
      },
    });
    return this.postsRepository.save({
      ...existingNews,
      ...data,
    });
  }

  async deleteNews(id: number): Promise<News> {
    const post = await this.postsRepository.findOne({
      where: {
        id,
      },
    });
    if (post) return this.postsRepository.remove(post);
    else throw new Error('Post not found');
  }
}
