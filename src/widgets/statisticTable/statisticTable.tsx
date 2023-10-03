import { CategoryTable } from '@/entities'
import { QualityTable } from '@/entities/forecast/ui/qualityTable/qualityTable'
import { TableSearch, TableSort } from '@/features'
import { CategoryMock, useVirtualize } from '@/shared'
import { Button, Card, Flex } from '@tremor/react'
import { useCallback, useRef } from 'react'

export const StatisticTable = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)
  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 34,
    itemsCount: CategoryMock.length,
    overscan: 2,
    listHeight: 800,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  return (
    <Card className="rounded-none border-t-2 border-solid border-t-[rgba(77,77,77,0.08)] px-[30px] shadow-none ring-0">
      <Flex className="pb-[28px]">
        <TableSort />
        <Flex justifyContent="end" className="gap-4">
          <TableSearch />
          <Button className="bg-color-back-secondary">Выгрузить в Excel</Button>
        </Flex>
      </Flex>
      <Card
        className="flex max-h-[430px] w-full overflow-auto rounded-none p-0 pt-[34px] shadow-none ring-0"
        ref={scrollElementRef}
      >
        <CategoryTable
          items={virtualItems}
          totalHeight={totalHeight}
          doubleTable={true}
        />
        <QualityTable items={virtualItems} totalHeight={totalHeight} />
      </Card>
    </Card>
  )
}
