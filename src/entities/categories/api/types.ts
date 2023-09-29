type CategoriesResponse = {
  id: number
  sku: string
  group: string
  category: string
  subcategory: string
  uom: string
}

type CategoriesRequest = {
  sku?: string
  group?: string
  category?: string
  subcategory?: string
  page?: number
  limit?: number
}

export { type CategoriesResponse, type CategoriesRequest }
