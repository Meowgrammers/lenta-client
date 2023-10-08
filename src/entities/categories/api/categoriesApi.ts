import { HTTP_METHOD, baseApi, PATHS } from '@/shared'
import { CategoriesRequest, CategoriesResponse } from './types'

export const categoriesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ['CATEGORIES_DATA'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchCategories: builder.query<CategoriesResponse, CategoriesRequest>({
        query: ({ sku, group, category, subcategory, page, limit }) => ({
          url: `${PATHS.CATEGORIES}`,
          params: { sku, group, category, subcategory, page, limit },
          method: HTTP_METHOD.GET,
          providesTags: [{ type: 'CATEGORIES_DATA', id: 'INFO' }],
        }),
      }),
    }),
  })

export const { useFetchCategoriesQuery } = categoriesApi
