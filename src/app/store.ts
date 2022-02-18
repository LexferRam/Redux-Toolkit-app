import {configureStore} from "@reduxjs/toolkit"
import logger from 'redux-logger'
import reservationsReducer from "../features/reservationSlice"
import customerReducer from "../features/customerSlice"

export const store = configureStore({
    reducer:{
        reservations: reservationsReducer,
        customer: customerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;