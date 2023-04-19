import { getPopulationData } from '@/functions/getPopulationData'

async function getPlotlyData(prefectureIds: number[], prefectureNames: string[]) {
  try {
    const populationData = await getPopulationData(prefectureIds)

    const plotlyData = populationData.map(([years, populations], index) => {
      const trace = {
        x: years,
        y: populations,
        mode: 'lines',
        type: 'scatter',
        name: prefectureNames[index],
        line: { shape: 'spline' },
      }
      return trace
    })

    return plotlyData
  } catch (error) {
    console.error('Plotlyデータの作成中にエラーが発生しました:', error)
    return null
  }
}

export { getPlotlyData }
