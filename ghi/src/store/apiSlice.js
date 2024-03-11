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
            providesTags: ['Account'],
        }),

        createAccount: builder.mutation({
            query: (data) => ({
                url: '/api/accounts',
                body: data,
                method: 'post',
            }),
        }),
        loginAccount: builder.mutation({
            query: (data) => {
                let formData = null
                if (data instanceof HTMLElement) {
                    formData = new FormData(info)
                } else {
                    formData = new FormData()
                    formData.append('username', data.username)
                    formData.append('password', data.password)
                }
                return {
                    url: '/token',
                    method: 'post',
                    body: formData,
                    credentials: 'include',
                }
            },
            invalidatesTags: ['Account'],
        }),
        logoutAccount: builder.mutation({
            query: () => ({
                url: '/token',
                method: 'delete',
                credentials: 'include',
            }),
            invalidatesTags: ['Account'],
        }),
        createPlant: builder.mutation({
            query: (data) => ({
                url: '/api/plants',
                body: data,
                method: 'post',
                credentials: 'include',
            }),
            invalidatesTags: ['PlantList'],
        }),
        getMyPlantList: builder.query({
            query: () => ({
                url: '/api/mine/plants',
                credentials: 'include',
            }),
            providesTags: ['PlantList'],
        }),
        getPlant: builder.query({
            query: (plant_id) => ({
                url: `/api/plants/${plant_id}`,
                credentials: 'include',
            }),
        }),
    }),
})

export const {
    useGetTokenQuery,
    useCreateAccountMutation,
    useLoginAccountMutation,
    useLogoutAccountMutation,
    useCreatePlantMutation,
    useGetMyPlantListQuery,
    useGetPlantQuery
} = bcApi
