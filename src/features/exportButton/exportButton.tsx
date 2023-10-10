import {
  StatisticExtendedMock,
  StatisticsMock,
  sortByField,
  useAppSelector,
} from '@/shared'
import { Button } from '@tremor/react'
import { useMemo } from 'react'
import { CSVLink } from 'react-csv'

type ExportStatisticDataType = {
  sku: string
  group: string
  category: string
  subcategory: string
  uom: string
  date: string
  sales_units: number
  sales_in_rub: number
}

type ExportExtendedDataType = {
  sku: string
  group: string
  category: string
  subcategory: string
  uom: string
  week: number
  target: number
  difference: number
  wape: number
  sales_units: number
}

export const ExportButton = () => {
  const shops = useAppSelector((state) => state.shops.selectedItems)
  const sort = useAppSelector((state) => state.categories.sort)

  const sortingStatisticMock = useMemo(() => {
    return shops.length > 0
      ? StatisticsMock.filter((category) => {
          return shops.includes(category.store)
        }).sort(sortByField(sort))
      : StatisticsMock.sort(sortByField(sort))
  }, [sort, shops])

  const newData: ExportStatisticDataType[] = []
  sortingStatisticMock.forEach((item) => {
    const { forecast, ...all } = item
    const a = forecast.map((el) => Object.assign(el, all))
    newData.push(...a)
  })

  return (
    <Button className="h-10 border-none bg-color-back-secondary font-semibold hover:bg-[#002773] active:bg-[#294a89]">
      <CSVLink data={newData} filename="forecast">
        Выгрузить в Excel
      </CSVLink>
    </Button>
  )
}

export const ExportExtendButton = ({}) => {
  const shops = useAppSelector((state) => state.shops.selectedItems)
  const sort = useAppSelector((state) => state.categories.sort)
  const sortingStatisticMock = useMemo(() => {
    return shops.length > 0
      ? StatisticExtendedMock.filter((category) => {
          return shops.includes(category.store)
        }).sort(sortByField(sort))
      : StatisticExtendedMock.sort(sortByField(sort))
  }, [sort, shops])

  const newData: ExportExtendedDataType[] = []
  sortingStatisticMock.forEach((item) => {
    const { statistic, ...all } = item
    const a = statistic.map((el) => Object.assign(el, all))
    newData.push(...a)
  })

  return (
    <Button className="h-10 border-none bg-color-back-secondary font-semibold hover:bg-[#002773] active:bg-[#294a89]">
      <CSVLink data={sortingStatisticMock} filename="statistic">
        Выгрузить в Excel
      </CSVLink>
    </Button>
  )
}
