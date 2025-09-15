import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find({ order: { createdAt: 'DESC' } });
  }

  async create(nickname: string, content: string): Promise<Post> {
    const post = this.postRepository.create({ nickname, content });
    return this.postRepository.save(post);
  }
}
