type ForecastUnit = {
  date: string
  sales_units: number
}

type ForecastPost = {
  sku: string
  sales_units: ForecastUnit[]
}

type ForecastResponse = {
  store: string
  sku: string
  forecast_data: string
  forecast: ForecastUnit[]
}

type ForecastRequest = {
  page?: number
  limit?: number
}

type ForecastPostResponse = {
  forecast: ForecastPost
}

type ForecastPostRequest = {
  store: string
  forecast_date: string
  forecast: ForecastPost
}

export {
  type ForecastResponse,
  type ForecastRequest,
  type ForecastPostResponse,
  type ForecastPostRequest,
}
