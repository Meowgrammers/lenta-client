import { StatisticExtendedMock, useAppSelector } from '@/shared'
import { Card, LineChart, Subtitle, Title } from '@tremor/react'

const StatisticExAllChart = () => {
  const week = useAppSelector((state) => state.forecast.week)
  const store = useAppSelector((state) => state.statistics.selectStore)
  const filterData = StatisticExtendedMock.filter(
    (item) => item.store === store
  )
  const sku = filterData.map((item) => item.sku)

  const handle = (WeekCount: number) => {
    return filterData.reduce((obj, currObj) => {
      obj[currObj.sku] = currObj.statistic
        .filter((el) => el.week === WeekCount)
        .reduce((acc, curr) => {
          return acc + curr.wape
        }, 0)
      return obj
    }, {})
  }

  const currentData =
    filterData.length > 0
      ? filterData[0].statistic.slice(-week).map((item) => {
          return { week: item.week, ...handle(item.week) }
        })
      : null

  return (
    <Card className="w-6/12 ring-0 ">
      <Title className="text-[#2C2C2C]">Качество прогноза WAPE</Title>
      <Subtitle className="text-[#4D4D4D8F]">
        Среднее значения по всем товарам выбранного ТК за период
      </Subtitle>
      <LineChart
        className="mt-6"
        data={currentData ? currentData : []}
        index="week"
        noDataText="Выберите ТК"
        categories={sku}
        colors={[
          'blue',
          'green',
          'orange',
          'sky',
          'pink',
          'purple',
          'lime',
          'red',
          'rose',
          'slate',
          'stone',
          'indigo',
          'teal',
          'zinc',
          'violet',
          'cyan',
          'amber',
          'neutral',
          'fuchsia',
        ]}
        yAxisWidth={35}
        showAnimation={true}
      />
    </Card>
  )
}

export { StatisticExAllChart }
