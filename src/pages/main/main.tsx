import { SalesChart } from '@/entities'
import { TableSearch, TableSort, ToggleUnit } from '@/features'
import { ForecastChart, ForecastTable } from '@/widgets'
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
            <Flex alignItems="center" justifyContent="start">
              <TabList variant="solid" className="bg-[#EAEBED] p-1 rounded-lg ">
                <Tab className="aria-selected:bg-white rounded-md border-solid text-base not-italic font-medium leading-5 text-gray-500 aria-selected:text-blue-500">
                  Таблица
                </Tab>
                <Tab className="aria-selected:bg-white rounded-md border-solid text-base not-italic font-medium leading-5 text-gray-500 aria-selected:text-blue-500">
                  График
                </Tab>
              </TabList>
              <TableSort />
              <TableSearch />
            </Flex>
            <TabPanels>
              <TabPanel>
                <ForecastTable />
              </TabPanel>
              <TabPanel>
                <Flex className='w-full gap-2'>
                  <ForecastChart />
                  <SalesChart />
                </Flex>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
