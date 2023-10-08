import { Card, LineChart, Subtitle, Title } from '@tremor/react'

const data = [
  {
    date: '12 неделя',
    c81e728a: 0.8,
    c81e728b: 0.5,
    c81e728c: 0.3,
  },
  {
    date: '13 неделя',
    c81e728a: 0.4,
    c81e728b: 0.8,
    c81e728c: 0.3,
  },
  {
    date: '14 неделя',
    c81e728a: 0.3,
    c81e728b: 0.5,
    c81e728c: 0.8,
  },
  {
    date: '15 неделя',
    c81e728a: 0.45,
    c81e728b: 0.5,
    c81e728c: 0.36,
  },
  {
    date: '16 неделя',
    c81e728a: 0.4,
    c81e728b: 0.9,
    c81e728c: 0.6,
  },
]

const QualityMainChart = () => {
  return (
    <Card className="w-6/12 ring-0 ">
      <Title className="text-[#2C2C2C]">Качество прогноза WAPE</Title>
      <Subtitle className="text-[#4D4D4D8F]">
        Среднее значения по всем выбранным товарам ТК за период
      </Subtitle>
      <LineChart
        className="mt-6 h-[320px]"
        data={data}
        index="date"
        categories={['c81e728a', 'c81e728b', 'c81e728c']}
        colors={['red', 'green', 'blue']}
        yAxisWidth={35}
        showAnimation={true}
      />
    </Card>
  )
}

export { QualityMainChart }
