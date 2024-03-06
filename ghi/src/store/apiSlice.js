import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bcApi = createApi({
    reducerPath: 'bcApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_HOST,
    }),
    endpoints: (builder) => ({
        getToken: builder.query({
            query: () => ({
                url: '/token',
                credentials: 'include',
            }),
        }),
        createAccount: builder.mutation({
            query: (data) => ({
                url: '/api/accounts',
                body: data,
                method: 'post',
            }),
        }),
    }),
})

export const { useGetTokenQuery, useCreateAccountMutation } = bcApi
