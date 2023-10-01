import { SalesMock, useAppSelector } from '@/shared'
import { BarChart, Card, Title } from '@tremor/react'

const SalesChart = () => {
  const check = useAppSelector((state) => state.app.check)
  const id = useAppSelector((state) => state.categories.selectId)
  const data = SalesMock.find((item) => item.unique_id === id)?.fact
  const chartCategory = check ? 'sales_rub' : 'sales_units'

  return (
    <Card className="w-6/12">
      <Title>Прогнозируемое значение, {check ? 'руб.' : 'шт'}</Title>
      {data && (
        <BarChart
          className="mt-6"
          data={data}
          index="date"
          categories={[chartCategory]}
          colors={['blue']}
          yAxisWidth={15}
          showAnimation={true}
        />
      )}
    </Card>
  )
}

export { SalesChart }
