import { StatisticTable } from '@/entities'
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

  //TODO: связь с бэком
  // const sku = useAppSelector((state) => state.categories.skus)
  // const group = useAppSelector((state) => state.categories.group)
  // const categories = useAppSelector((state) => state.categories.categories)
  // const subcategories = useAppSelector(
  //   (state) => state.categories.subcategories
  // )

  // const { data } = useFetchStatisticsQuery({
  //   sku: sku.length > 0 ? sku.join(',') : undefined,
  //   group: group.length > 0 ? group.join(',') : undefined,
  //   category: categories.length > 0 ? categories.join(',') : undefined,
  //   subcategory: subcategories.length > 0 ? subcategories.join(',') : undefined,
  //   page: 1,
  //   limit: 20,
  // })

  const sortingStatisticMock = useMemo(() => {
    return shops.length > 0
      ? StatisticsMock.filter((category) => {
          return shops.includes(category.store)
        }).sort(sortByField(sort))
      : StatisticsMock.sort(sortByField(sort))
  }, [sort, shops])

  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 34,
    itemsCount: sortingStatisticMock.length,
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
