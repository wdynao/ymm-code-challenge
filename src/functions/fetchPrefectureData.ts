//const apiKey = 'zVDYtx8y918uT63zaya6tql1hIOyUBz4qZyWugOn'
const apiKey = 'yp4PXt0ZUXFz4UTuQ3MRZI0GRQ0MZUpQQXgNPj6z'

export type PrefectureData = {
  years: number[]
  totalPopulation: number[]
  youngPopulation: number[]
  workingPopulation: number[]
  elderlyPopulation: number[]
}

const cache: Record<number, PrefectureData> = {}

async function fetchPrefectureData(prefectureIds: number[]): Promise<PrefectureData[] | []> {
  const validIds = prefectureIds.filter((id) => Number.isInteger(id) && id >= 1 && id <= 47)

  const requests = validIds.map(async (id) => {
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
      const totalPopulation: number[] = []
      const youngPopulation: number[] = []
      const workingPopulation: number[] = []
      const elderlyPopulation: number[] = []

      data.result.data[0].data.forEach((item: { year: number; value: number }, index: number) => {
        years.push(item.year)
        totalPopulation.push(item.value)
        youngPopulation.push(data.result.data[1].data[index].value)
        workingPopulation.push(data.result.data[2].data[index].value)
        elderlyPopulation.push(data.result.data[3].data[index].value)
      })

      const result: PrefectureData = {
        years,
        totalPopulation,
        youngPopulation,
        workingPopulation,
        elderlyPopulation,
      }

      cache[id] = result

      return result
    } catch (error) {
      console.error(`都道府県ID ${id} の人口推移データの取得でエラーが発生しました:`, error)
      return null
    }
  })

  const results = await Promise.all(requests)
  return results.filter((result): result is PrefectureData => result !== null)
}

async function testFetchPrefectureData(): Promise<void> {
  try {
    // テストケース1: 正常な都道府県ID
    const prefectureIds1 = [1, 13, 47]
    const results1 = await fetchPrefectureData(prefectureIds1)

    if (results1.length !== prefectureIds1.length) {
      console.error('テスト失敗: 正常な都道府県IDで結果が期待通りではありません。')
    } else {
      console.log('テスト成功: 正常な都道府県ID')
    }

    // テストケース2: 無効な都道府県ID
    const prefectureIds2 = [-1, 0, 100]
    const results2 = await fetchPrefectureData(prefectureIds2)

    if (results2.length !== 0) {
      console.error('テスト失敗: 無効な都道府県IDで結果が期待通りではありません。')
    } else {
      console.log('テスト成功: 無効な都道府県ID')
    }

    // テストケース3: 正常と無効な都道府県IDが混在
    const prefectureIds3 = [1, 48, 13, 100]
    const results3 = await fetchPrefectureData(prefectureIds3)

    if (results3.length !== 2) {
      console.error(
        'テスト失敗: 正常と無効な都道府県IDが混在する場合、結果が期待通りではありません。',
      )
    } else {
      console.log('テスト成功: 正常と無効な都道府県IDが混在')
    }

    // テストケース4: 配列が空
    const prefectureIds4: number[] = []
    const results4 = await fetchPrefectureData(prefectureIds4)

    if (results4.length !== 0) {
      console.error('テスト失敗: 配列が空の場合、結果が期待通りではありません。')
    } else {
      console.log('テスト成功: 配列が空')
    }
  } catch (error) {
    console.error('テスト失敗:', error)
  }
}

export { fetchPrefectureData, testFetchPrefectureData }
