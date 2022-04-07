import { Posts } from './dto/post.dto';
export declare class AppService {
    getPosts(): Promise<Posts[]>;
    getPost(id: number): Promise<Posts | undefined>;
    createPost(data: Posts): Promise<Posts>;
    updatePost(data: Posts): Promise<Posts>;
    deletePost(id: number): Promise<Posts[]>;
}
