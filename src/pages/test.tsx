import Head from 'next/head'
import { testFetchPrefectureData } from '@/functions/fetchPrefectureData'
import { testFetchPlotlyData } from '@/functions/fetchPlotData'

export default function Test() {
  testFetchPrefectureData()
  testFetchPlotlyData()

  return (
    <>
      <Head>
        <title>都道府県比較.NEXTのTEST</title>
        <meta
          name='description'
          content='ゆめみ株式会社のコーディングテストです。都道府県の人口推移をグラフで描画・比較できるようにしたアプリ'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>コンソールにテスト結果を表示しています。</div>
    </>
  )
}
