type ForecastUnit = {
  date: string
  sales_units: number
  sales_in_rub: number
}

type StatisticsResponse = {
  store: string
  sku: string
  group: string
  category: string
  subcategory: string
  uom: string
  forecast: ForecastUnit[]
}

type StatisticsRequest = {
  sku?: string
  group?: string
  category?: string
  subcategory?: string
  page?: number
  limit?: number
}

type StatisticUnit = {
  week: number
  target: number
  difference: number
  wape: number
  sales_units: number
}

type StatisticsExtendedResponse = {
  store: string
  sku: string
  group: string
  category: string
  subcategory: string
  uom: string
  statistic: StatisticUnit[]
}

type StatisticsExtendedRequest = {
  sku?: string
  group?: string
  category?: string
  subcategory?: string
  page?: number
  limit?: number
}

export {
  type StatisticsResponse,
  type StatisticsRequest,
  type StatisticsExtendedResponse,
  type StatisticsExtendedRequest,
}
