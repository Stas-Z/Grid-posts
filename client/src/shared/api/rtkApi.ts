import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const customBackOff = async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 4000)
    })
}

const customBaseQuery = retry(fetchBaseQuery({ baseUrl: __API__ }), {
    backoff: customBackOff,
})

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({}),
})
