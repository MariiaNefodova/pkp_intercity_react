import { configureStore } from '@reduxjs/toolkit';
import {ticketSlice} from "../reducers/ticketReducer";

export const store = configureStore({
    reducer: {
        ticket: ticketSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;