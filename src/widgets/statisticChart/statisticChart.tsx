import { QualityMainChart, StatisticExChart } from '@/entities'
import { ToggleUnit, WeekCount } from '@/features'
import { Card, Flex } from '@tremor/react'

export const StatisticChart = () => {
  return (
    <Card className="w-full rounded-none border-none p-[30px] shadow-none ring-0">
      <Card className="flex items-start gap-3 rounded-none border-none p-0 pb-[28px] shadow-none ring-0">
        <ToggleUnit />
        <WeekCount />
      </Card>
      <Flex className="w-full items-start gap-5">
        <QualityMainChart />
        <StatisticExChart />
      </Flex>
    </Card>
  )
}
