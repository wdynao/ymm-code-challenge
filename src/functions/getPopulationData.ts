//const apiKey = 'zVDYtx8y918uT63zaya6tql1hIOyUBz4qZyWugOn'
const apiKey = 'yp4PXt0ZUXFz4UTuQ3MRZI0GRQ0MZUpQQXgNPj6z'
const cache: Record<number, [number[], number[]]> = {}

async function getPopulationData(prefectureIds: number[]): Promise<[number[], number[]][] | []> {
  const requests = prefectureIds.map(async (id) => {
    if (cache[id]) {
      return cache[id]
    }

    const apiUrl = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${id}&cityCode=-`

    try {
      const response = await fetch(apiUrl, { headers: { 'X-API-KEY': apiKey } })

      if (!response.ok) {
        console.error(`都道府県ID ${id} のAPIリクエストが失敗しました: ${response.status}`)
        return null
      }

      const data = await response.json()
      const years: number[] = []
      const populations: number[] = []

      data.result.data[0].data.forEach((item: { year: number; value: number }) => {
        years.push(item.year)
        populations.push(item.value)
      })

      cache[id] = [years, populations]

      return cache[id]
    } catch (error) {
      console.error(`都道府県ID ${id} の総人口推移データの取得でエラーが発生しました:`, error)
      return null
    }
  })

  const results = await Promise.all(requests)
  return results.filter((result): result is [number[], number[]] => result !== null)
}

export { getPopulationData }
