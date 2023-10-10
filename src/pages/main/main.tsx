import { ExportButton, TableSearch, TableSort, ToggleUnit } from '@/features'
import {
  Menu,
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
    <div className="flex min-h-full">
      <Menu />
      <TabGroup className="min-w-[1478px]">
        <TabList className="mt-8 w-full pl-[30px]" variant="line">
          <Tab className="h-10 border-b-2 border-solid text-2xl font-medium not-italic leading-[130%] text-[#4D4D4D8F] hover:border-b-transparent hover:text-[#4D4D4D] aria-selected:border-b-[#003d96] aria-selected:text-[#003d96]">
            <span className="text-xl font-medium">Прогноз</span>
          </Tab>
          <Tab className="!m-0 h-10 border-b-2 border-solid text-2xl font-medium not-italic leading-[130%] text-[#4D4D4D8F] hover:border-b-transparent hover:text-[#4D4D4D] aria-selected:border-b-[#003d96] aria-selected:text-[#003d96]">
            <span className="text-xl font-medium">Статистика</span>
          </Tab>
          <div className="!ml-auto flex items-center pr-[30px] text-sm/[18px] text-[#4D4D4D8F]">
            Последнее обновление данных 20.07.2023 00:23
          </div>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TabGroup className="flex flex-col gap-7 px-[30px] pt-[30px]">
              <ToggleUnit />
              <Flex
                alignItems="center"
                justifyContent="start"
                className="gap-5"
              >
                <Flex
                  alignItems="center"
                  justifyContent="start"
                  className="gap-5"
                >
                  <TabList
                    variant="solid"
                    className="h-10 rounded-lg bg-[#EAEBED] p-1"
                  >
                    <Tab className="w-[110px] justify-center border-solid px-3 py-[6px] text-center !text-base/[20px] !font-semibold not-italic leading-5 text-[#4D4D4D8F] aria-selected:bg-white aria-selected:text-[#003d96]">
                      Таблица
                    </Tab>
                    <Tab className="w-[110px] justify-center rounded-md border-solid !text-base/[20px] !font-semibold not-italic leading-5 text-[#4D4D4D8F] aria-selected:bg-white aria-selected:text-[#003d96]">
                      График
                    </Tab>
                  </TabList>
                  <TableSort />
                </Flex>
                <TableSearch />
                <ExportButton />
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
    </div>
  )
}
