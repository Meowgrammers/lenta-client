import { StatisticTable } from '@/entities/statistics'
import {
  StatisticsMock,
  sortByField,
  useAppSelector,
  useVirtualize,
} from '@/shared'
import { Card } from '@tremor/react'
import { useCallback, useMemo, useRef } from 'react'

export const ForecastTable = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)

  const shops = useAppSelector((state) => state.shops.selectedItems)
  const sort = useAppSelector((state) => state.categories.sort)

  const sortingStatisticMock = useMemo(() => {
    return shops.length > 0
      ? StatisticsMock.filter((category) => {
          return shops.includes(category.store)
        }).sort(sortByField(sort))
      : StatisticsMock.sort(sortByField(sort))
  }, [sort, shops])

  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 34,
    itemsCount: StatisticsMock.length,
    overscan: 2,
    listHeight: 800,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  return (
    <Card
      className="flex max-h-[800px] overflow-auto rounded-none p-0 shadow-none ring-0"
      ref={scrollElementRef}
    >
      <StatisticTable
        items={virtualItems}
        totalHeight={totalHeight}
        sortingMock={sortingStatisticMock}
      />
    </Card>
  )
}
