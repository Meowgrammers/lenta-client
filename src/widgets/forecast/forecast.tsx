import { CategoryTable } from '@/entities'
import { CategoryMock, useVirtualize } from '@/shared'
import { Card } from '@tremor/react'
import { useCallback, useEffect, useRef, useState } from 'react'

export const Forecast = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(1)

  const { virtualItems, totalHeight, endIndex } = useVirtualize({
    itemHeight: 80,
    itemsCount: CategoryMock.length,
    overscan: 2,
    listHeight: 800,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  useEffect(() => {
    if (endIndex === page * 10 - 2) {
      setPage((currentPage) => currentPage + 1)
    }
  }, [endIndex])

  return (
    <Card
      className="flex w-full p-0 ring-0 shadow-none max-h-[800px] overflow-y-auto"
      ref={scrollElementRef}
    >
      <CategoryTable items={virtualItems} totalHeight={totalHeight} />
      <CategoryTable items={virtualItems} totalHeight={totalHeight} />
    </Card>
  )
}
