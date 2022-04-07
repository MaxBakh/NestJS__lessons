import { News } from './database/entities/post.entity';
import { Repository } from 'typeorm';
export declare class AppService {
    private readonly postsRepository;
    constructor(postsRepository: Repository<News>);
    getNews(): Promise<News[]>;
    getOneNews(id: number): Promise<News | undefined>;
    createNews(data: News): Promise<News>;
    updateNews(data: News): Promise<News>;
    deleteNews(id: number): Promise<News>;
}
