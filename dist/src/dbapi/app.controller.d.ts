import { AppService } from './app.service';
import { News } from './database/entities/post.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getNews(): Promise<News[]>;
    getOneNews(query: {
        id: number;
    }): Promise<News | undefined>;
    createNews(data: News): Promise<News>;
    deleteNews(body: {
        id: number;
    }): Promise<News>;
    updateNews(data: News): Promise<News>;
}
