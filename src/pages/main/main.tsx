import { TableSearch, TableSort, ToggleUnit } from '@/features'
import { Button } from '@/shared'
import {
  ForecastChart,
  ForecastTable,
  StatisticChart,
  StatisticTable,
} from '@/widgets'
import {
  Flex,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@tremor/react'

export const MainPage = () => {
  return (
    <TabGroup className="min-w-[1478px] ">
      <TabList className="mt-8 w-full pl-[30px]" variant="line">
        <Tab className="border-b-2 border-solid text-2xl font-medium not-italic leading-[130%] hover:border-b-[#003d96] hover:text-[#003d96] aria-selected:border-b-[#003d96] aria-selected:text-[#003d96]">
          Прогноз
        </Tab>
        <Tab className="border-b-2 border-solid text-2xl font-medium not-italic leading-[130%] hover:border-b-[#003d96] hover:text-[#003d96] aria-selected:border-b-[#003d96] aria-selected:text-[#003d96]">
          Статистика
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TabGroup className="flex flex-col gap-7 p-[30px]">
            <ToggleUnit />
            <Flex alignItems="center" justifyContent="start" className="gap-5">
              <Flex
                alignItems="center"
                justifyContent="start"
                className="gap-5"
              >
                <TabList
                  variant="solid"
                  className="rounded-lg bg-[#EAEBED] p-1 "
                >
                  <Tab className="rounded-md border-solid text-base font-medium not-italic leading-5 text-gray-500 aria-selected:bg-white aria-selected:text-[#003d96]">
                    Таблица
                  </Tab>
                  <Tab className="rounded-md border-solid text-base font-medium not-italic leading-5 text-gray-500 aria-selected:bg-white aria-selected:text-[#003d96]">
                    График
                  </Tab>
                </TabList>
                <TableSort />
              </Flex>
              <TableSearch />
              <Button className="bg-color-back-secondary">
                Выгрузить в Excel
              </Button>
            </Flex>
            <TabPanels>
              <TabPanel>
                <ForecastTable />
              </TabPanel>
              <TabPanel>
                <ForecastChart />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </TabPanel>
        <TabPanel>
          <StatisticChart />
          <StatisticTable />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
