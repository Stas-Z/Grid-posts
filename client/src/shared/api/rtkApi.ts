import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: __API__,
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({}),
})
