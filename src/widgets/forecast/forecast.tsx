import { CategoryTable, SalesTable } from '@/entities'
import { ToggleUnit } from '@/features'
import { CategoryMock, useVirtualize } from '@/shared'
import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@tremor/react'
import { useCallback, useRef } from 'react'

export const Forecast = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)
  const doubleScrollElementRef = useRef<HTMLDivElement>(null)

  const { virtualItems, totalHeight } = useVirtualize({
    itemHeight: 80,
    itemsCount: CategoryMock.length,
    overscan: 2,
    listHeight: 800,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  })

  const { virtualItems: doubleTableItems, totalHeight: doubleTableHeight } =
    useVirtualize({
      itemHeight: 80,
      itemsCount: CategoryMock.length,
      overscan: 2,
      listHeight: 800,
      getScrollElement: useCallback(() => doubleScrollElementRef.current, []),
    })

  return (
    <TabGroup className="w-[1700px]">
      <TabList className="mt-8 w-full" variant="line">
        <Tab className="aria-selected:border-b-blue-500 hover:border-b-blue-500 border-b-2 border-solid hover:text-blue-500 aria-selected:text-blue-500 text-2xl not-italic font-medium leading-[130%]">
          Прогноз
        </Tab>
        <Tab className="aria-selected:border-b-blue-500 hover:border-b-blue-500 border-b-2 border-solid hover:text-blue-500 aria-selected:text-blue-500 text-2xl not-italic font-medium leading-[130%]">
          Статистика
        </Tab>
      </TabList>
      <ToggleUnit />
      <TabPanels>
        <TabPanel>
          <TabGroup>
            <TabList variant="solid" className="bg-[#EAEBED] p-1 rounded-lg">
              <Tab className="aria-selected:bg-white rounded-md border-solid text-base not-italic font-medium leading-5 text-gray-500 aria-selected:text-blue-500">
                Таблица
              </Tab>
              <Tab className="aria-selected:bg-white rounded-md border-solid text-base not-italic font-medium leading-5 text-gray-500 aria-selected:text-blue-500">
                График
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Card
                  className="mt-20 flex w-[1700px] p-0 ring-0 shadow-none max-h-[800px] overflow-auto"
                  ref={doubleScrollElementRef}
                >
                  <CategoryTable
                    items={doubleTableItems}
                    totalHeight={doubleTableHeight}
                  />
                  <SalesTable
                    items={doubleTableItems}
                    totalHeight={doubleTableHeight}
                  />
                </Card>
              </TabPanel>
              <TabPanel>
                <Card
                  className="mt-20 flex w-[850px] p-0 ring-0 shadow-none max-h-[800px] overflow-auto"
                  ref={scrollElementRef}
                >
                  <CategoryTable
                    items={virtualItems}
                    totalHeight={totalHeight}
                  />
                </Card>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
