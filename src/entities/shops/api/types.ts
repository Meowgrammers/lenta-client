type SingleShop = {
  id: string
  store: string
  city: string
  divizion: string
  format: string
  loc: string
  size: string
  is_active: string
}

type ShopResponse = {
  count: number
  next: string
  previous: string
  results: SingleShop[]
}

type ShopRequest = {
  page?: number
  limit?: number
}
export { type ShopResponse, type ShopRequest, type SingleShop }
