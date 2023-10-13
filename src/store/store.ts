import { configureStore } from '@reduxjs/toolkit';
import {ticketSlice} from "../reducers/ticketReducer";
//import {bookSlice} from "../reducers/bookSlice";

export const store = configureStore({
    reducer: {
        ticket: ticketSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch