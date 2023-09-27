import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_PATH } from '../constants';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_API_PATH}`,
  prepareHeaders(headers) {
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['USER_INFO'],
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
