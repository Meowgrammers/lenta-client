import { CategoryTable, SalesTable } from '@/entities'
import { CategoryMock, useVirtualize } from '@/shared'
import { Card } from '@tremor/react'
import { useCallback, useRef } from 'react'

export const ForecastTable = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)
  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 34,
    itemsCount: CategoryMock.length,
    overscan: 2,
    listHeight: 800,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  return (
    <Card
      className="flex max-h-[800px]  overflow-auto p-0 shadow-none ring-0"
      ref={scrollElementRef}
    >
      <CategoryTable items={virtualItems} totalHeight={totalHeight} />
      <SalesTable items={virtualItems} totalHeight={totalHeight} />
    </Card>
  )
}
