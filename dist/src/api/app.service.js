"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const posts = [
    {
        id: 1,
        name: 'fitst',
        description: 'first',
        text: 'first',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
    },
];
let AppService = class AppService {
    async getPosts() {
        console.log(posts);
        return posts;
    }
    async getPost(id) {
        return posts[id - 1];
    }
    async createPost(data) {
        posts.push(data);
        return data;
    }
    async updatePost(data) {
        let existingPost = posts[data.id];
        existingPost = {
            ...existingPost,
            ...data,
        };
        posts[data.id] = existingPost;
        return posts[data.id];
    }
    async deletePost(id) {
        const post = posts[id];
        if (post) {
            posts.splice(id, id);
            return posts;
        }
        else
            throw new Error('Post not found');
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map