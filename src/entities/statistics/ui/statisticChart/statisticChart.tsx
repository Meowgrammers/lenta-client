import { useAppSelector } from '@/shared'
import { BarChart, Card, Title } from '@tremor/react'

const StatisticChart = () => {
  const check = useAppSelector((state) => state.app.check)
  const data = useAppSelector((state) => state.statistics.selectItem)

  return (
    <Card className="min-w-[870px]">
      <Title>Прогнозируемое значение, {check ? 'руб.' : 'шт'}</Title>
      <BarChart
        className="mt-6"
        data={data ? data.forecast : []}
        index="date"
        noDataText="Выберите товар"
        categories={[check ? 'sales_in_rub' : 'sales_units']}
        colors={['blue']}
        yAxisWidth={35}
        showAnimation={true}
      />
    </Card>
  )
}

export { StatisticChart }
