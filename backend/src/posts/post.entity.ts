import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })  // ニックネームは50文字まで
  nickname: string;

  @Column({ length: 140 }) // 投稿内容は140文字まで
  content: string;

  @CreateDateColumn()
  createdAt: Date;
}
