import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bcApi = createApi({
    reducerPath: 'bcApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_HOST,
        credentials: 'include',
    }),

    endpoints: (builder) => ({
        getToken: builder.query({
            query: () => ({
                url: '/token',
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
                }
            },
            invalidatesTags: ['Account', 'PlantList'],
        }),

        logoutAccount: builder.mutation({
            query: () => ({
                url: '/token',
                method: 'delete',
            }),
            invalidatesTags: ['Account'],
        }),

        createPlant: builder.mutation({
            query: (data) => ({
                url: '/api/plants',
                body: data,
                method: 'post',
            }),
            invalidatesTags: ['PlantList'],
        }),

        getMyPlantList: builder.query({
            query: () => ({
                url: '/api/mine/plants',
            }),
            providesTags: ['PlantList'],
        }),

        getPlant: builder.query({
            query: (plant_id) => ({
                url: `/api/plants/${plant_id}`,
            }),
            providesTags: ['Plant'],
        }),

        updatePlant: builder.mutation({
            query: (data) => ({
                url: `/api/plants/${data.plant_id}`,
                body: data.form,
                method: 'put',
            }),
            invalidatesTags: ['Plant', 'PlantList'],
        }),

        deletePlant: builder.mutation({
            query: (plant_id) => ({
                url: `/api/plants/${plant_id}`,
                method: 'delete',
            }),
            invalidatesTags: ['PlantList'],
        }),

        getPlantLogList: builder.query({
            query: (plant_id) => ({
                url: `/api/plants/${plant_id}/plant-logs`,
            }),
            providesTags: ['PlantLogList'],
        }),

        createPlantLog: builder.mutation({
            query: (data) => ({
                url: `/api/plants/${data.plant_id}/plant-logs`,
                method: 'post',
                body: data.form,
            }),
            invalidatesTags: ['PlantLogList'],
        }),

        getPlantLogDetail: builder.query({
            query: (plant_log_id) => ({
                url: `/api/plants/plant-logs/${plant_log_id}`,
            }),
            providesTags: ['PlantLog'],
        }),

        updatePlantLog: builder.mutation({
            query: (data) => ({
                url: `/api/plants/${data.plant_id}/plant-logs/${data.plant_log_id}`,
                body: data.form,
                method: 'put',
            }),
            invalidatesTags: ['PlantLog', "PlantLogList"],
        }),

        deletePlantLog: builder.mutation({
            query: (data) => ({
                url: `/api/plants/${data.plant_id}/plant-logs/${data.plant_log_id}`,
                method: 'delete',
            }),
            invalidatesTags: ['PlantLogList'],
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
    useGetPlantQuery,
    useUpdatePlantMutation,
    useDeletePlantMutation,
    useGetPlantLogListQuery,
    useCreatePlantLogMutation,
    useGetPlantLogDetailQuery,
    useUpdatePlantLogMutation,
    useDeletePlantLogMutation,
} = bcApi
