import { AppService } from './app.service';
import { Posts } from './dto/post.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getPosts(): Promise<Posts[]>;
    getPost(query: {
        id: number;
    }): Promise<Posts | undefined>;
    createPost(data: Posts): Promise<Posts>;
    deletePost(body: {
        id: number;
    }): Promise<Posts[]>;
    updatePost(data: Posts): Promise<Posts>;
}
