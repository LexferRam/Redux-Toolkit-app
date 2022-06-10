import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

interface ReservationState {
    value: string[]
}

const initialState:ReservationState  = {
    value:[]
};

export const reservationSlice = createSlice({
    name:"reservations",
    initialState, 
    reducers:{
        addReservation: (state,action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReservation : (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const {addReservation,removeReservation} = reservationSlice.actions
export default reservationSlice.reducer;