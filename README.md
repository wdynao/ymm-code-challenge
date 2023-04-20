## アプリの公開先

[`実際のアプリを起動する`](https://ymm-code-challenge.vercel.app/)

## デザインしたプロトタイプ

[`デザインプロトタイプ`](https://htmlpreview.github.io/?https://github.com/wdynao/ymm-coding/blob/main/design/prototype.html)

`design/prototype.html`, `design/prototype.css`
この 2 つを元に NEXT プロジェクトを構築

## 関数のテスト

[`テストもWEBにデプロイしました`](https://ymm-code-challenge.vercel.app/test)

## なぜ Next.js を選んだか

React は使っているが、Vue や next はあまり使ったことがなかった。
せっかくこういった機会を頂けたので、どうせなら新しい技術に挑戦しようと思った。ゆめみ株式会社でプログラムを書くならば、新しい技術フレンドリーになるべきだと思ったため。

総合的に Next を選んでよかったし、個人的にもすごくためになりました。

### デザイン時に考慮した点

- PC の横長の画面では Discode や Slack のようなサイドバー形式が明らかに使いやすいのでワイヤーフレームを自分なりに改良
- 地図アプリのため基準色を緑系統に
  `背景色:linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)`
  `アクセントカラー:#84fab0`
  `ベースカラー:#ffffff`
- UX 向上の目的で都道府県を地方区分によって分類したが、RESAS API には地方区分のデータがないため、ID を API から取得しない方針へ。API が変化した場合は index.tsx を更新してください。

## RESAS API からのデータ取得

参考：https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html

function/getPopulationData.ts に API から人口推移データを取得する関数を実装

```typescript:getPopulationData.ts
[年データ:number[], 総人口データ:number[]] = getPopulationData(都道府県ID配列:number[]);
```

~~API の仕様から一度に取得するデータ数上限を 10 に設定。10 個以上の場合は console.error 及び null として結果を出力~~
キャッシュ機能を導入し、API を無駄にたたかなくしたので実質上限なし。
(console.log はない方がいいとの事だが、console.error だけ管理のため保存)

## 課題提出にお知らせすること

### 課題に要した合計時間

- 課題開始 ：4/17
- Next.js ハンズオン ：4/18
- デザインの作成 ：4/18
- GITHUB 上で作業開始 ：4/19
- 提出 : 4/20
  合計 3.5 日間

### 総合的なプログラミング歴

報酬ももらってプログラミングした歴：6 年

| 学年 | 実施した事                                                                                                                                                      |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 小 5 | EXCEL VBA で簡単な計算機フォームアプリを作る                                                                                                                    |
| 中 1 | LEGO マインドストームでモノづくりプログラミング https://www.hitachi-solutions.co.jp/company/press/news/system/2009/pr091116.html                                |
| 中 2 | 第 3 世代 INTEL CPU で自作 PC を作る。OS について知識を深めた                                                                                                   |
| 中 3 | 親の PC に Ubuntu をインストールするが、HDD の中身を全てフォーマットしてしまいすごく怒られる。apt-get や依存関係について知識を深めた                            |
| 高 2 | バスケ部で過去の動画をみんなが見れるように WEB サイトを立てる。東京 2 位になった。                                                                              |
| 大 2 | なぜか池袋のアーティストチームに参加し、音楽ライブ等の WEB 予約機能を作ることに。GAS とスプレッドシートで構築した。SEO を学び YOUTUBE で 2 万再生まで持っていく |
| 大 3 | ハッカソンに参加 C#でスマート鏡を作り最優秀賞、最優秀プレゼン賞 http://bh2018.bpe.es.osaka-u.ac.jp/                                                             |
| 大 4 | 品川区の商業・ものづくり課へ。HP の管理・更新やおじいちゃんたちへ WORD,EXCEL,POWERPOINT を教える                                                                |
| 大 4 | 個人事業主になり、WEB サイト構築で稼ぐ https://pstask.com 等                                                                                                    |
| 大 4 | 品川区の HP フルリニューアル。要件定義、管理運用を行う https://www.mics.city.shinagawa.tokyo.jp/                                                                |
| 院 1 | ビジネスに興味をもち、研究内容で起業する。jetson+Python+Opencv+Gstreamer でプロダクトを作る https://hemosee.jp/                                                 |
| 院 1 | AWS のスターアップ向け 10000$クレジットももらい遊ぶ                                                                                                             |
| 院 1 | BTC, ETH が面白すぎる。家に GPU サーバーを立てる                                                                                                                |
| 院 1 | 国立循環器病研究センターから WEB アプリを作ってほしいと言われる。その後法人化 https://simarthur.jp/                                                             |
| 院 2 | ChatGPT が面白すぎる。とりあえず LINE で使える ChatBOT を作る https://liff.line.me/1645278921-kWRPP32q/?accountId=653failm                                      |

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### 参考にした文献

- https://www.youtube.com/watch?v=15WLMqnkPsE&t=0s
- https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
- https://zenn.dev/hungry_goat/articles/b7ea123eeaaa44
- https://chat.openai.com/chat

### ChatGPT のプロンプト

```ChatGPT
RESASのAPIから都道府県別の総人口推移データを取得し、グラフに描画するWEBアプリを作りたい。

条件は次の通り
・Next.js, typescript, plotly.jsをつかって構築する。
・APIの取得には下に示すgetPopulationData.tsを使う
・画面上部に、各都道府県のチェックボックスがある。
・画面下部に、グラフをプロットする。
・グラフは縦軸が総人口、横軸が年を示す。
・next.jsの環境構築は完了している。

■getPopulationData.tsのコード
```
