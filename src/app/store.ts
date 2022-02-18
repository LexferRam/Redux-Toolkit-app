import {configureStore} from "@reduxjs/toolkit"
import reservationsReducer from "../features/reservationSlice"
import customerReducer from "../features/customerSlice"

export const store = configureStore({
    reducer:{
        reservations: reservationsReducer,
        customer: customerReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;