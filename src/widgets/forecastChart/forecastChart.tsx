import { StatisticChart, StatisticTable } from '@/entities'
import {
  StatisticsMock,
  sortByField,
  useAppSelector,
  useVirtualize,
} from '@/shared'
import { Card, Flex } from '@tremor/react'
import { useCallback, useRef } from 'react'

export const ForecastChart = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)
  const shops = useAppSelector((state) => state.shops.selectedItems)
  const sort = useAppSelector((state) => state.categories.sort)
  const sortingCategoryMock = (
    shops.length > 0
      ? StatisticsMock.filter((category) => {
          return shops.includes(category.store)
        })
      : StatisticsMock
  ).sort(sortByField(sort))

  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 34,
    itemsCount: sortingCategoryMock.length,
    overscan: 2,
    listHeight: 800,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  return (
    <Flex className="w-full items-start gap-5">
      <Card
        className="flex max-h-[800px] w-max min-w-fit overflow-y-auto rounded-none p-0 shadow-none ring-0"
        ref={scrollElementRef}
      >
        <StatisticTable
          items={virtualItems}
          totalHeight={totalHeight}
          sortingMock={sortingCategoryMock}
          chartTable={true}
        />
      </Card>
      <StatisticChart />
    </Flex>
  )
}
