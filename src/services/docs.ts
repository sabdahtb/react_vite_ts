import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ky from 'ky'

import { DocsList } from '~/constant/types'

// Define a service using a base URL and expected endpoints
export const docsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    // prepareHeaders: (headers) => {
    //   headers.set('Sabda', '12345')
    //   return headers
    // },
    fetchFn: (...args) => ky(...args)
  }),
  endpoints: (builder) => ({
    getDocsList: builder.query<DocsList, void>({
      query: () => `/users`
    }),
    getUserList: builder.query<DocsList, void>({
      query: () => `/users`
    })
  }),
  reducerPath: 'docsApi'
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDocsListQuery, useGetUserListQuery } = docsApi
