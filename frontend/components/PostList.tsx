
// components/PostList.tsx
import { Post } from "@/types/post"; // Post型をインポート
import styled from "styled-components"; // styled-componentsをインポート

const PostItem = styled.li`
  border: 1px solid lightgray; /* 枠線を薄いグレーに */
  padding: 12px; /* パディングを調整 */
  border-radius: 8px; /* 角を丸く */
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* 影を薄く */
  color: black;
  word-wrap: break-word; /* 投稿内容が枠からはみ出さないように自動で改行 */
  white-space: pre-wrap; /* 改行コードを反映 */
  display: flex; /* flexboxを使って子要素を配置 */
  flex-direction: column; /* 縦方向に並べる */
  gap: 8px; /* 要素間のスペース */
`;

const Nickname = styled.p`
  font-weight: bold;
  color: black;
  word-wrap: break-word; /* ニックネームも枠からはみ出さないように自動で改行 */
`;

const Content = styled.p`
  color: black;
  line-height: 1.5; /* 行の高さを調整 */
  word-wrap: break-word; /* 投稿内容が枠からはみ出さないように自動で改行 */
  white-space: pre-wrap; /* 改行コードを反映 */
`;

const Timestamp = styled.p`
  font-size: 0.8em;
  color: gray; /* タイムスタンプの色を調整 */
  text-align: right; /* 右寄せに */
  margin-top: auto; /* 投稿内容の後に自動で配置 */
`;

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-4"> {/* 投稿間のスペースを少し広げる */}
      {posts.map((post) => (
        <PostItem key={post.id}>
          <Nickname>&lt;{post.nickname}&gt;</Nickname>
          <Content>{post.content}</Content>
          <Timestamp>
            {new Date(post.createdAt).toLocaleString()}
          </Timestamp>
        </PostItem>
      ))}
    </ul>
  );
}
