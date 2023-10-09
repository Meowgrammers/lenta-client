import { useAppSelector } from '@/shared'
import { BarChart, Card, Title } from '@tremor/react'

const StatisticChart = () => {
  const check = useAppSelector((state) => state.app.check)
  const data = useAppSelector((state) => state.statistics.selectItem)

  // const chartCategory = check ? 'sales_rub' : 'sales_units'

  return (
    <Card className="min-w-[870px]">
      <Title>Прогнозируемое значение, {check ? 'руб.' : 'шт'}</Title>
      <BarChart
        className="mt-6"
        data={data ? data.forecast : []}
        index="date"
        noDataText="Выберите товар"
        categories={['sales_units']}
        colors={['blue']}
        yAxisWidth={35}
        showAnimation={true}
      />
    </Card>
  )
}

export { StatisticChart }
