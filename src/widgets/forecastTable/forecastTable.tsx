import { CategoryTable, SalesTable } from '@/entities'
import {
  CategoryMock,
  SalesMock,
  sortByField,
  useAppSelector,
  useVirtualize,
} from '@/shared'
import { Card } from '@tremor/react'
import { useCallback, useRef } from 'react'

export const ForecastTable = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)

  const shops = useAppSelector((state) => state.shops.selectedItems)
  const sort = useAppSelector((state) => state.categories.sort)
  const sortingCategoryMock = (
    shops.length > 0
      ? CategoryMock.filter((category) => {
          return shops.includes(category.store)
        })
      : CategoryMock
  ).sort(sortByField(sort))

  const sortingSalesMock = (
    shops.length > 0
      ? SalesMock.filter((sale) => {
          return shops.includes(sale.id)
        })
      : SalesMock
  ).sort(sortByField(sort))

  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 34,
    itemsCount: Math.min(sortingCategoryMock.length, sortingSalesMock.length),
    overscan: 2,
    listHeight: 800,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  return (
    <Card
      className="flex max-h-[800px] overflow-auto rounded-none p-0 shadow-none ring-0"
      ref={scrollElementRef}
    >
      <CategoryTable
        items={virtualItems}
        totalHeight={totalHeight}
        sortingMock={sortingCategoryMock}
      />
      <SalesTable
        items={virtualItems}
        totalHeight={totalHeight}
        sortingMock={sortingSalesMock}
      />
    </Card>
  )
}
