# My Twitter App

このリポジトリには、課題で指定された技術スタックを用いて作成された、Twitterのようなシンプルな投稿・閲覧Webアプリケーションのソースコードが含まれています。

## プロジェクト構成

- `backend`: Node.js (NestJS, TypeORM, SQLite) で構築されたAPIサーバー
- `frontend`: Next.js (React, TypeScript, Tailwind CSS, styled-components) で構築されたクライアントアプリケーション

## 動作要件

- Node.js v20 以上
- npm または yarn

## 起動手順

アプリケーションを起動するには、以下の手順を実行してください。

1.  **リポジトリのクローン**
    ```bash
    git clone https://github.com/daiU2022/my-twitter-app.git
    cd my-twitter-app
    ```
    
2.  **依存関係のインストール**
    バックエンドとフロントエンドの両方で必要なパッケージをインストールします。

    ```bash
    # バックエンドの依存関係をインストール
    cd backend
    npm install
    
    # フロントエンドの依存関係をインストール
    cd ../frontend
    npm install
    
    # プロジェクトルートに戻る
    cd ..
    ```

3.  **バックエンドサーバーの起動**
    開発モードでバックエンドサーバーを起動します。データベースは自動的に `mydb.sqlite` として作成されます。

    ```bash
    cd backend
    npm run start:dev
    ```
    バックエンドサーバーは `http://localhost:4000` でリッスンします。

4.  **フロントエンドアプリケーションの起動**
    開発モードでフロントエンドアプリケーションを起動します。

    ```bash
    cd frontend
    npm run dev
    ```
    フロントエンドアプリケーションは `http://localhost:3000` でアクセスできます。

## アプリケーションへのアクセス

-   **フロントエンド (Webブラウザ)**: `http://localhost:3000` にアクセスしてください。
-   **バックエンド API エンドポイント**: `http://localhost:4000/posts` (投稿一覧取得)

