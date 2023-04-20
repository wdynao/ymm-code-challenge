import { fetchPrefectureData, PrefectureData } from './fetchPrefectureData'
import { Data, ScatterData } from 'plotly.js'

type PopulationDataType = 'total' | 'young' | 'working' | 'elderly'

async function fetchPlotlyData(
  prefectureIds: number[],
  prefectureNames: string[],
  dataType: PopulationDataType,
): Promise<Data[]> {
  try {
    const populationData = await fetchPrefectureData(prefectureIds)

    const plotlyData: Data[] = populationData.map(
      (prefectureData: PrefectureData, index: number) => {
        const dataToDisplay =
          dataType === 'total'
            ? prefectureData.totalPopulation
            : dataType === 'young'
            ? prefectureData.youngPopulation
            : dataType === 'working'
            ? prefectureData.workingPopulation
            : prefectureData.elderlyPopulation

        const trace: Partial<ScatterData> = {
          x: prefectureData.years,
          y: dataToDisplay,
          mode: 'lines+markers',
          type: 'scatter',
          name: prefectureNames[index],
          opacity: 0.9,
          line: { width: 10, shape: 'spline' },
          marker: { size: 10 },
        }
        return trace
      },
    )

    return plotlyData
  } catch (error) {
    console.error('Plotlyデータの作成中にエラーが発生しました:', error)
    return []
  }
}

async function testFetchPlotlyData(): Promise<void> {
  try {
    // テストケース1: 正常な都道府県IDと名前
    const prefectureIds1 = [1, 13, 47]
    const prefectureNames1 = ['Hokkaido', 'Tokyo', 'Okinawa']
    const dataType1: PopulationDataType = 'total'
    const results1 = await fetchPlotlyData(prefectureIds1, prefectureNames1, dataType1)

    if (results1.length !== prefectureIds1.length) {
      console.error('テスト失敗: 正常な都道府県IDと名前で結果が期待通りではありません。')
    } else {
      console.log('テスト成功: 正常な都道府県IDと名前')
    }

    // テストケース2: 空の配列を渡す
    const prefectureIds2: number[] = []
    const prefectureNames2: string[] = []
    const dataType2: PopulationDataType = 'total'
    const results2 = await fetchPlotlyData(prefectureIds2, prefectureNames2, dataType2)

    if (results2.length !== 0) {
      console.error('テスト失敗: 空の配列を渡す場合、結果が期待通りではありません。')
    } else {
      console.log('テスト成功: 空の配列を渡す')
    }

    // テストケース3: 無効なデータタイプを渡す（例外が発生することを確認する）
    const prefectureIds3 = [1, 13, 47]
    const prefectureNames3 = ['Hokkaido', 'Tokyo', 'Okinawa']
    // @ts-expect-error
    const dataType3: PopulationDataType = 'invalid'
    try {
      await fetchPlotlyData(prefectureIds3, prefectureNames3, dataType3)
      console.error(
        'テスト失敗: 無効なデータタイプを渡す場合、例外が発生することを確認できませんでした。',
      )
    } catch (error) {
      console.log('テスト成功: 無効なデータタイプを渡す')
    }
  } catch (error) {
    console.error('テスト失敗:', error)
  }
}

export { fetchPlotlyData, testFetchPlotlyData }
