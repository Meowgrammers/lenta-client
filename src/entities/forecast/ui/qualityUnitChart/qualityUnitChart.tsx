import { Card, LineChart, Subtitle, Title } from '@tremor/react'

const data = [
  {
    date: '12 неделя',
    c7b711619: 0.8,
  },
  {
    date: '13 неделя',
    c7b711619: 0.4,
  },
  {
    date: '14 неделя',
    c7b711619: 0.3,
  },
  {
    date: '15 неделя',
    c7b711619: 0.45,
  },
  {
    date: '16 неделя',
    c7b711619: 0.4,
  },
]

const QualityUnitChart = () => {
  return (
    <Card className="w-6/12">
      <Title>Качество прогноза WAPE / товар</Title>
      <Subtitle>Изменение WAPE для выбранного товара за период</Subtitle>
      <LineChart
        className="mt-6"
        data={data}
        index="date"
        categories={['c7b711619']}
        colors={['blue']}
        yAxisWidth={35}
        showAnimation={true}
      />
    </Card>
  )
}

export { QualityUnitChart }
