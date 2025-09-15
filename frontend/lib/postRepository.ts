// lib/postRepository.ts
import { Post } from "../domain/Post";

const API_URL = "http://localhost:4000/posts";

export const postRepository = {
  async findAll(): Promise<Post[]> {
    const res = await fetch(API_URL, { cache: "no-store" });
    return await res.json();
  },
  async create(post: Omit<Post, "id" | "createdAt">): Promise<Post> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    return await res.json();
  },
};
