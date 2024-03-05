import { configureStore } from "@reduxjs/toolkit"
import { bcApi } from "./apiSlice"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer:{
    [bcApi.reducerPath]: bcApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bcApi.middleware)
})

setupListeners(store.dispatch)
