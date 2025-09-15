// frontend/components/PostForm.tsx
"use client";
import { useState } from "react";
import { postRepository } from "@/lib/postRepository";

export default function PostForm({ onPost }: { onPost: () => void }) {
  const [nickname, setNickname] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーション
    if (!nickname.trim()) {
      setError("ニックネームを入力してください");
      return;
    }
    if (!text.trim()) {
      setError("テキストを入力してください");
      return;
    }
    if (text.length > 140) {
      setError("140文字以内で入力してください");
      return;
    }

    try {
      await postRepository.create({ nickname, content: text });
      setNickname("");
      setText("");
      setError("");
      onPost(); // 投稿完了後に親コンポーネントに通知
    } catch (err) {
      console.error(err);
      setError("投稿に失敗しました");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="ニックネーム"
        className="w-full border p-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        style={{ borderColor: 'lightgray' }}
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="投稿内容を入力してください"
        className="w-full border p-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        rows={4}
        maxLength={140}
        style={{ borderColor: 'lightgray' }}
      />
      <p className="text-sm text-gray-500">{text.length}/140</p>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors" // 角を丸く
      >
        この内容で投稿する
      </button>
    </form>
  );
}
