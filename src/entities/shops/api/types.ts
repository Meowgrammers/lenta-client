type ShopResponse = {
  id: number
  store?: string
  city: string
  divizion: string
  format: string
  loc: string
  size: string
  is_active: string
}

type ShopRequest = {
  page?: number
  limit?: number
}
export { type ShopResponse, type ShopRequest }
