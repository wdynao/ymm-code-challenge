import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import { getPlotlyData } from '@/functions/getPlotlyData'
import { Data } from 'plotly.js'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function Home() {
  const [data, setData] = useState<Data[]>([])

  const layout = {
    title: 'My Plot',
    xaxis: {
      title: 'X Axis Label',
      showgrid: true,
      zeroline: false,
    },
    yaxis: {
      title: 'Y Axis Label',
      showgrid: true,
      zeroline: false,
    },
    legend: {
      x: 0,
      y: 1,
    },
  }

  useEffect(() => {
    let checkboxes = document.querySelectorAll<HTMLInputElement>(
      '#pref-select > label > input[type="checkbox"]',
    )

    const getCheckedList = function (
      checkboxes: NodeListOf<HTMLInputElement>,
    ): [number[], string[]] {
      const checkedIds: number[] = []
      const checkedNames: string[] = []
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          const name = checkbox.querySelector('span')

          checkedIds.push(Number(checkbox.id.replace('prefid_', '')))
          checkedNames.push(String(name?.textContent))
        }
      })
      return [checkedIds, checkedNames]
    }

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', async (event) => {
        console.log('event')
        const [checkedIds, checkedNames] = getCheckedList(checkboxes)
        setData(await getPlotlyData(checkedIds, checkedNames))
      })
    })
  }, [])

  return (
    <>
      <Head>
        <title>都道府県比較.NEXT</title>
        <meta
          name='description'
          content='ゆめみ株式会社のコーディングテストです。都道府県の人口推移をグラフで描画・比較できるようにしたアプリ'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className='sidebar card'>
          <h1 className='title'>
            <Image src='/icon.png' alt='Logo' className='Logo' width={60} height={60} priority />
            都道府県比較<span>.NEXT</span>
          </h1>
          <div id='sreach-bar'>
            <input type='text' placeholder='都道府県を検索' />
          </div>
          <div className='pref-select' id='pref-select'>
            <p className='region-label-1'>北海道</p>
            <label htmlFor='prefid_1'>
              <input type='checkbox' id='prefid_1' />
              <span>北海道</span>
            </label>
            <p className='region-label-2'>東北地方</p>
            <label htmlFor='prefid_2'>
              <input type='checkbox' id='prefid_2' />
              <span>青森県</span>
            </label>
            <label htmlFor='prefid_3'>
              <input type='checkbox' id='prefid_3' />
              <span>岩手県</span>
            </label>
            <label htmlFor='prefid_4'>
              <input type='checkbox' id='prefid_4' />
              <span>宮城県</span>
            </label>
            <label htmlFor='prefid_5'>
              <input type='checkbox' id='prefid_5' />
              <span>秋田県</span>
            </label>
            <label htmlFor='prefid_6'>
              <input type='checkbox' id='prefid_6' />
              <span>山形県</span>
            </label>
            <label htmlFor='prefid_7'>
              <input type='checkbox' id='prefid_7' />
              <span>福島県</span>
            </label>
            <p className='region-label-3'>中部地方</p>
            <label htmlFor='prefid_15'>
              <input type='checkbox' id='prefid_15' />
              <span>新潟県</span>
            </label>
            <label htmlFor='prefid_16'>
              <input type='checkbox' id='prefid_16' />
              <span>富山県</span>
            </label>
            <label htmlFor='prefid_17'>
              <input type='checkbox' id='prefid_17' />
              <span>石川県</span>
            </label>
            <label htmlFor='prefid_18'>
              <input type='checkbox' id='prefid_18' />
              <span>福井県</span>
            </label>
            <label htmlFor='prefid_19'>
              <input type='checkbox' id='prefid_19' />
              <span>山梨県</span>
            </label>
            <label htmlFor='prefid_20'>
              <input type='checkbox' id='prefid_20' />
              <span>長野県</span>
            </label>
            <label htmlFor='prefid_21'>
              <input type='checkbox' id='prefid_21' />
              <span>岐阜県</span>
            </label>
            <label htmlFor='prefid_22'>
              <input type='checkbox' id='prefid_22' />
              <span>静岡県</span>
            </label>
            <label htmlFor='prefid_23'>
              <input type='checkbox' id='prefid_23' />
              <span>愛知県</span>
            </label>
            <p className='region-label-3'>関東地方</p>
            <label htmlFor='prefid_8'>
              <input type='checkbox' id='prefid_8' />
              <span>茨城県</span>
            </label>
            <label htmlFor='prefid_9'>
              <input type='checkbox' id='prefid_9' />
              <span>栃木県</span>
            </label>
            <label htmlFor='prefid_10'>
              <input type='checkbox' id='prefid_10' />
              <span>群馬県</span>
            </label>
            <label htmlFor='prefid_11'>
              <input type='checkbox' id='prefid_11' />
              <span>埼玉県</span>
            </label>
            <label htmlFor='prefid_12'>
              <input type='checkbox' id='prefid_12' />
              <span>千葉県</span>
            </label>
            <label htmlFor='prefid_13'>
              <input type='checkbox' id='prefid_13' />
              <span>東京都</span>
            </label>
            <label htmlFor='prefid_14'>
              <input type='checkbox' id='prefid_14' />
              <span>神奈川県</span>
            </label>
            <p className='region-label-4'>近畿地方</p>
            <label htmlFor='prefid_24'>
              <input type='checkbox' id='prefid_24' />
              <span>三重県</span>
            </label>
            <label htmlFor='prefid_25'>
              <input type='checkbox' id='prefid_25' />
              <span>滋賀県</span>
            </label>
            <label htmlFor='prefid_26'>
              <input type='checkbox' id='prefid_26' />
              <span>京都府</span>
            </label>
            <label htmlFor='prefid_27'>
              <input type='checkbox' id='prefid_27' />
              <span>大阪府</span>
            </label>
            <label htmlFor='prefid_28'>
              <input type='checkbox' id='prefid_28' />
              <span>兵庫県</span>
            </label>
            <label htmlFor='prefid_29'>
              <input type='checkbox' id='prefid_29' />
              <span>奈良県</span>
            </label>
            <label htmlFor='prefid_30'>
              <input type='checkbox' id='prefid_30' />
              <span>和歌山県</span>
            </label>
            <p className='region-label-6'>四国地方</p>
            <label htmlFor='prefid_36'>
              <input type='checkbox' id='prefid_36' />
              <span>徳島県</span>
            </label>
            <label htmlFor='prefid_37'>
              <input type='checkbox' id='prefid_37' />
              <span>香川県</span>
            </label>
            <label htmlFor='prefid_38'>
              <input type='checkbox' id='prefid_38' />
              <span>愛媛県</span>
            </label>
            <label htmlFor='prefid_39'>
              <input type='checkbox' id='prefid_39' />
              <span>高知県</span>
            </label>
            <p className='region-label-7'>九州地方</p>
            <label htmlFor='prefid_40'>
              <input type='checkbox' id='prefid_40' />
              <span>福岡県</span>
            </label>
            <label htmlFor='prefid_41'>
              <input type='checkbox' id='prefid_41' />
              <span>佐賀県</span>
            </label>
            <label htmlFor='prefid_42'>
              <input type='checkbox' id='prefid_42' />
              <span>長崎県</span>
            </label>
            <label htmlFor='prefid_43'>
              <input type='checkbox' id='prefid_43' />
              <span>熊本県</span>
            </label>
            <label htmlFor='prefid_44'>
              <input type='checkbox' id='prefid_44' />
              <span>大分県</span>
            </label>
            <label htmlFor='prefid_45'>
              <input type='checkbox' id='prefid_45' />
              <span>宮崎県</span>
            </label>
            <label htmlFor='prefid_46'>
              <input type='checkbox' id='prefid_46' />
              <span>鹿児島県</span>
            </label>
            <label htmlFor='prefid_47'>
              <input type='checkbox' id='prefid_47' />
              <span>沖縄県</span>
            </label>
          </div>
        </div>
        <div className='Graph'></div>
        <Plot data={data} layout={layout} />
      </main>
    </>
  )
}
