import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getPlotlyData } from '@/functions/getPlotlyData'
import { Data } from 'plotly.js'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function Home() {
  const [data, setData] = useState<Data[]>([])

  const layout = {
    title: '',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: {
      t: 10, // 上部余白
      b: 60, // 下部余白
      l: 80, // 左側余白
      r: 10, // 右側余白
    },
    xaxis: {
      title: 'Year',
      showgrid: true,
      zeroline: false,
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'lightgrey',
      },
    },
    yaxis: {
      title: 'Population',
      showgrid: true,
      zeroline: false,
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'lightgrey',
      },
    },
    showlegend: true,
    autosize: true,
  }

  useEffect(() => {
    let checkboxes = document.querySelectorAll<HTMLInputElement>(
      '#pref-select > input[type="checkbox"]',
    )
    let labels = document.querySelectorAll<HTMLInputElement>('#pref-select > label')

    const plotGraph = async function () {
      const checkedIds: number[] = []
      const checkedNames: string[] = []

      checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
          checkedIds.push(Number(checkbox.id.replace('prefid_', '')))
          checkedNames.push(String(labels[index].textContent))
        }
      })

      setData(await getPlotlyData(checkedIds, checkedNames))
    }

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', async (event) => {
        plotGraph()
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
      <main>
        <div className='sidebar card'>
          <h1 className='title'>
            <Image src='/icon.png' alt='Logo' className='Logo' width={60} height={60} priority />
            都道府県比較<span>.NEXT</span>
          </h1>
          <div className='pref-select' id='pref-select'>
            <p className='region-label-1'>北海道</p>
            <input type='checkbox' id='prefid_1' />
            <label htmlFor='prefid_1'>北海道</label>
            <p className='region-label-2'>東北地方</p>
            <input type='checkbox' id='prefid_2' />
            <label htmlFor='prefid_2'>青森県</label>
            <input type='checkbox' id='prefid_3' />
            <label htmlFor='prefid_3'>岩手県</label>
            <input type='checkbox' id='prefid_4' />
            <label htmlFor='prefid_4'>宮城県</label>
            <input type='checkbox' id='prefid_5' />
            <label htmlFor='prefid_5'>秋田県</label>
            <input type='checkbox' id='prefid_6' />
            <label htmlFor='prefid_6'>山形県</label>
            <input type='checkbox' id='prefid_7' />
            <label htmlFor='prefid_7'>福島県</label>
            <p className='region-label-3'>中部地方</p>
            <input type='checkbox' id='prefid_15' />
            <label htmlFor='prefid_15'>新潟県</label>
            <input type='checkbox' id='prefid_16' />
            <label htmlFor='prefid_16'>富山県</label>
            <input type='checkbox' id='prefid_17' />
            <label htmlFor='prefid_17'>石川県</label>
            <input type='checkbox' id='prefid_18' />
            <label htmlFor='prefid_18'>福井県</label>
            <input type='checkbox' id='prefid_19' />
            <label htmlFor='prefid_19'>山梨県</label>
            <input type='checkbox' id='prefid_20' />
            <label htmlFor='prefid_20'>長野県</label>
            <input type='checkbox' id='prefid_21' />
            <label htmlFor='prefid_21'>岐阜県</label>
            <input type='checkbox' id='prefid_22' />
            <label htmlFor='prefid_22'>静岡県</label>
            <input type='checkbox' id='prefid_23' />
            <label htmlFor='prefid_23'>愛知県</label>
            <p className='region-label-4'>関東地方</p>
            <input type='checkbox' id='prefid_8' />
            <label htmlFor='prefid_8'>茨城県</label>
            <input type='checkbox' id='prefid_9' />
            <label htmlFor='prefid_9'>栃木県</label>
            <input type='checkbox' id='prefid_10' />
            <label htmlFor='prefid_10'>群馬県</label>
            <input type='checkbox' id='prefid_11' />
            <label htmlFor='prefid_11'>埼玉県</label>
            <input type='checkbox' id='prefid_12' />
            <label htmlFor='prefid_12'>千葉県</label>
            <input type='checkbox' id='prefid_13' />
            <label htmlFor='prefid_13'>東京都</label>
            <input type='checkbox' id='prefid_14' />
            <label htmlFor='prefid_14'>神奈川県</label>
            <p className='region-label-5'>近畿地方</p>
            <input type='checkbox' id='prefid_24' />
            <label htmlFor='prefid_24'>三重県</label>
            <input type='checkbox' id='prefid_25' />
            <label htmlFor='prefid_25'>滋賀県</label>
            <input type='checkbox' id='prefid_26' />
            <label htmlFor='prefid_26'>京都府</label>
            <input type='checkbox' id='prefid_27' />
            <label htmlFor='prefid_27'>大阪府</label>
            <input type='checkbox' id='prefid_28' />
            <label htmlFor='prefid_28'>兵庫県</label>
            <input type='checkbox' id='prefid_29' />
            <label htmlFor='prefid_29'>奈良県</label>
            <input type='checkbox' id='prefid_30' />
            <label htmlFor='prefid_30'>和歌山県</label>
            <p className='region-label-6'>四国地方</p>
            <input type='checkbox' id='prefid_36' />
            <label htmlFor='prefid_36'>徳島県</label>
            <input type='checkbox' id='prefid_37' />
            <label htmlFor='prefid_37'>香川県</label>
            <input type='checkbox' id='prefid_38' />
            <label htmlFor='prefid_38'>愛媛県</label>
            <input type='checkbox' id='prefid_39' />
            <label htmlFor='prefid_39'>高知県</label>
            <p className='region-label-7'>九州地方</p>
            <input type='checkbox' id='prefid_40' />
            <label htmlFor='prefid_40'>福岡県</label>
            <input type='checkbox' id='prefid_41' />
            <label htmlFor='prefid_41'>佐賀県</label>
            <input type='checkbox' id='prefid_42' />
            <label htmlFor='prefid_42'>長崎県</label>
            <input type='checkbox' id='prefid_43' />
            <label htmlFor='prefid_43'>熊本県</label>
            <input type='checkbox' id='prefid_44' />
            <label htmlFor='prefid_44'>大分県</label>
            <input type='checkbox' id='prefid_45' />
            <label htmlFor='prefid_45'>宮崎県</label>
            <input type='checkbox' id='prefid_46' />
            <label htmlFor='prefid_46'>鹿児島県</label>
            <input type='checkbox' id='prefid_47' />
            <label htmlFor='prefid_47'>沖縄県</label>
          </div>
        </div>
        <div className='graph card'>
          <Plot
            data={data}
            layout={layout}
            useResizeHandler
            style={{ width: '100%', height: '100%' }}
          />
          <p className='note'>※未来の値は予想値</p>
        </div>
      </main>
    </>
  )
}
