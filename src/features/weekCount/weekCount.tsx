import { setDate, setWeek } from '@/entities'
import { useAppDispatch, useAppSelector } from '@/shared'
import { Flex, NumberInput, Tab, TabGroup, TabList } from '@tremor/react'
import dayjs from 'dayjs'

const WeekCount = () => {
  const week = useAppSelector((state) => state.forecast.week)
  const dispatch = useAppDispatch()
  function changeWeek(value: number) {
    const startDate = dayjs().subtract(value, 'w').format('YYYY-MM-DD')
    dispatch(setWeek(value))
    dispatch(setDate(startDate))
  }
  return (
    <Flex justifyContent="end" className="gap-4" alignItems="center">
      <TabGroup className="w-fit">
        <TabList variant="solid" className="h-10 rounded-lg bg-[#EAEBED] p-1">
          <Tab
            onClick={() => changeWeek(2)}
            className="rounded-md border-solid !text-base/[20px] !font-semibold not-italic leading-5 text-[#4D4D4D8F] aria-selected:bg-white aria-selected:text-[#003d96]"
          >
            14 дней
          </Tab>
          <Tab
            onClick={() => changeWeek(4)}
            className="rounded-md border-solid !text-base/[20px] !font-semibold not-italic leading-5 text-[#4D4D4D8F] aria-selected:bg-white aria-selected:text-[#003d96]"
          >
            Месяц
          </Tab>
          <Tab
            onClick={() => changeWeek(13)}
            className="rounded-md border-solid !text-base/[20px] !font-semibold not-italic leading-5 text-[#4D4D4D8F] aria-selected:bg-white aria-selected:text-[#003d96]"
          >
            Квартал
          </Tab>
          <Tab
            onClick={() => changeWeek(26)}
            className="rounded-md border-solid !text-base/[20px] !font-semibold not-italic leading-5 text-[#4D4D4D8F] aria-selected:bg-white aria-selected:text-[#003d96]"
          >
            6 месяцев
          </Tab>
          <Tab
            onClick={() => changeWeek(52)}
            className="rounded-md border-solid !text-base/[20px] !font-semibold not-italic leading-5 text-[#4D4D4D8F] aria-selected:bg-white aria-selected:text-[#003d96]"
          >
            Год
          </Tab>
        </TabList>
      </TabGroup>
      <NumberInput
        className="h-10 max-w-[158px]"
        placeholder="2 нед"
        min="2"
        max="52"
        value={week}
        onValueChange={changeWeek}
      />
    </Flex>
  )
}

export { WeekCount }
