import { getPopulationData } from '@/functions/getPopulationData'
import { Data, ScatterData } from 'plotly.js'

async function getPlotlyData(prefectureIds: number[], prefectureNames: string[]): Promise<Data[]> {
  try {
    const populationData = await getPopulationData(prefectureIds)

    const plotlyData: Data[] = populationData.map(([years, populations], index) => {
      const trace: Partial<ScatterData> = {
        x: years,
        y: populations,
        mode: 'lines+markers',
        type: 'scatter',
        name: prefectureNames[index],
        opacity: 0.9,
        line: { width: 10, shape: 'spline' },
        marker: { size: 10 },
      }
      return trace
    })

    return plotlyData
  } catch (error) {
    console.error('Plotlyデータの作成中にエラーが発生しました:', error)
    return []
  }
}

export { getPlotlyData }
