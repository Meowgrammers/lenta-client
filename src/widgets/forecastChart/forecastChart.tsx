import { CategoryTable, SalesChart } from '@/entities'
import { CategoryMock, useVirtualize } from '@/shared'
import { Card, Flex } from '@tremor/react'
import { useCallback, useRef } from 'react'

export const ForecastChart = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)

  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 34,
    itemsCount: CategoryMock.length,
    overscan: 2,
    listHeight: 800,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  return (
    <Flex className="w-full items-start gap-5">
      <Card
        className="flex max-h-[800px] overflow-auto rounded-none p-0 shadow-none ring-0"
        ref={scrollElementRef}
      >
        <CategoryTable items={virtualItems} totalHeight={totalHeight} />
      </Card>
      <SalesChart />
    </Flex>
  )
}
