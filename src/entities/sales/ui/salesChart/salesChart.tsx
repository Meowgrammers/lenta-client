import { BarChart, Card, Title } from '@tremor/react'

const chartdata3 = [
  {
    date: 'Jan 23',
    '2022': 45,
  },
  {
    date: 'Feb 23',
    '2022': 52,
  },
  {
    date: 'Mar 23',
    '2022': 48,
  },
  {
    date: 'Apr 23',
    '2022': 61,
  },
  {
    date: 'May 23',
    '2022': 55,
  },
  {
    date: 'Jun 23',
    '2022': 67,
  },
  {
    date: 'Jul 23',
    '2022': 60,
  },
  {
    date: 'Aug 23',
    '2022': 72,
  },
  {
    date: 'Sep 23',
    '2022': 65,
  },
  {
    date: 'Oct 23',
    '2022': 68,
  },
  {
    date: 'Nov 23',
    '2022': 74,
  },
  {
    date: 'Dec 23',
    '2022': 71,
  },
]

const SalesChart = () => {
  return (
    <Card>
      <Title>Прогнозируемое значение, шт</Title>
      <BarChart
        data={chartdata3}
        index="date"
        categories={['2023']}
        colors={['neutral', 'indigo']}
        yAxisWidth={30}
      />
    </Card>
  )
}

export { SalesChart }
