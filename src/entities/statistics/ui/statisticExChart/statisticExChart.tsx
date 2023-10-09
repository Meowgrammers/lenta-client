import { useAppSelector } from '@/shared'
import { Card, LineChart, Subtitle, Title } from '@tremor/react'

const StatisticExChart = () => {
  const data = useAppSelector((state) => state.statistics.selectExItem)
  const week = useAppSelector((state) => state.forecast.week)
  return (
    <Card className="w-6/12 ring-0 ">
      <Title className="text-[#2C2C2C]">Качество прогноза WAPE / товар</Title>
      <Subtitle>Изменение WAPE для выбранного товара за период</Subtitle>
      <LineChart
        className="mt-6"
        data={data ? data.statistic.slice(-week) : []}
        index="week"
        noDataText="Выберите товар"
        categories={['wape']}
        colors={['blue', 'red', 'green', 'yellow']}
        yAxisWidth={35}
        showAnimation={true}
      />
    </Card>
  )
}

export { StatisticExChart }
