import { StatisticExTable } from '@/entities'
import { TableSearch, TableSort } from '@/features'
import {
  StatisticExtendedMock,
  sortByField,
  useAppSelector,
  useVirtualize,
} from '@/shared'
import { Button, Card, Flex } from '@tremor/react'
import { useCallback, useMemo, useRef } from 'react'

export const StatisticTable = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)
  const shops = useAppSelector((state) => state.shops.selectedItems)
  const sort = useAppSelector((state) => state.categories.sort)
  const sortingStatisticMock = useMemo(() => {
    return shops.length > 0
      ? StatisticExtendedMock.filter((category) => {
          return shops.includes(category.store)
        }).sort(sortByField(sort))
      : StatisticExtendedMock.sort(sortByField(sort))
  }, [sort, shops])

  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 34,
    itemsCount: StatisticExtendedMock.length,
    overscan: 3,
    listHeight: 430,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  return (
    <Card className="rounded-none border-t-2 border-solid border-t-[rgba(77,77,77,0.08)] px-[30px] shadow-none ring-0">
      <Flex className="pb-[28px]">
        <TableSort />
        <Flex justifyContent="end" className="gap-4">
          <TableSearch />
          <Button className="h-10 border-none bg-color-back-secondary font-semibold hover:bg-[#002773] active:bg-[#294a89]">
            Выгрузить в Excel
          </Button>
        </Flex>
      </Flex>
      <Card
        className="flex h-[430px] max-w-full overflow-auto rounded-none p-0 pt-[34px] shadow-none ring-0"
        ref={scrollElementRef}
      >
        <StatisticExTable
          items={virtualItems}
          totalHeight={totalHeight}
          sortingMock={sortingStatisticMock}
        />
      </Card>
    </Card>
  )
}
