

// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import Modal from "@/components/Modal";
import { postRepository } from "@/lib/postRepository";
import { Post } from "@/types/post";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fetchPosts = async () => {
    const data = await postRepository.findAll();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostCompletion = () => {
    setShowModal(false);
    fetchPosts();
  };

  return (
    <main className="max-w-xl mx-auto p-4 space-y-6 bg-white text-black"> 
      <section className="bg-white p-4 rounded">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors" // 角を丸く
        >
          投稿する
        </button>
      </section>

      {/* モーダルコンポーネント */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <PostForm onPost={handlePostCompletion} />
      </Modal>

      <section className="bg-white text-black"> {/* 投稿一覧のセクションも背景白、文字黒に */}
        <PostList posts={posts} />
      </section>
    </main>
  );
}
