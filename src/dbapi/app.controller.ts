import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { News } from './database/entities/post.entity';

@Controller('news')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('get-all')
  async getNews(): Promise<News[]> {
    return this.appService.getNews();
  }

  @Get('get-one')
  async getOneNews(@Query() query: { id: number }): Promise<News | undefined> {
    return this.appService.getOneNews(query.id);
  }

  @Post('create')
  async createNews(@Body() data: News): Promise<News> {
    return this.appService.createNews(data);
  }

  @Delete('delete')
  async deleteNews(@Body() body: { id: number }): Promise<News> {
    return this.appService.deleteNews(body.id);
  }

  @Put('update')
  async updateNews(@Body() data: News): Promise<News> {
    return this.appService.updateNews(data);
  }
}
