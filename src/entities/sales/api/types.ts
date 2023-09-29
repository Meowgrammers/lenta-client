type SimpleSale = {
  date?: string
  sales_type: string
  sales_units: number
  sales_units_promo: number
  sales_rub: number
  sales_rub_promo: number
}

type Sale = {
  id: number
  store: string
  sku: string
  fact: SimpleSale[]
}

type SalesResponse = {
  count: number
  next: string
  previous: string
  results: Sale[]
}

type SalesRequest = {
  sku?: string
  store?: string
  page?: number
  limit?: number
}

export { type SalesResponse, type SalesRequest }
