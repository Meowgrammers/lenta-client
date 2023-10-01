import { CategoryTable } from '@/entities'

import { CategoryMock, useVirtualize } from '@/shared'
import { Card } from '@tremor/react'
import { useCallback, useRef } from 'react'

export const ForecastChart = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)

  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 80,
    itemsCount: CategoryMock.length,
    overscan: 2,
    listHeight: 800,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  return (
    <Card
      className="mt-20 flex w-[756px] p-0 ring-0 shadow-none max-h-[800px] overflow-auto"
      ref={scrollElementRef}
    >
      <CategoryTable items={virtualItems} totalHeight={totalHeight} />
    </Card>
  )
}
