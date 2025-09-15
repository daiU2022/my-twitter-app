// src/posts/posts.controller.ts

import { Controller, Get, Post as HttpPost, Body, BadRequestException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @HttpPost()
  create(
    @Body('nickname') nickname: string,
    @Body('content') content: string,
  ): Promise<PostEntity> {
    if (!nickname || nickname.trim().length === 0) {
      throw new BadRequestException('Nickname is required');
    }
    if (!content || content.trim().length === 0 || content.length > 140) {
      throw new BadRequestException('Content must be 1-140 characters');
    }
    return this.postsService.create(nickname, content);
  }
}
