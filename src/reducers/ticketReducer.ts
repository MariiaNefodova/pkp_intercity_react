import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../store/store";
import {TicketState} from "../interfaces/ticket";

type initialStateType = {
    ticketList: TicketState[];
};

const ticketList: TicketState[] = [
    {
        number: 'XX590455622',
        dateStart: new Date('2022-08-11 13:11'),
        dateEnd: new Date('2022-08-11 17:34'),
        class: '1',
        from: 'Warszawa Centr.',
        to: 'Kraków Gł.',
        price: '189,00',
        trainNumber: 2620
    },
];

const initialState: initialStateType = {
    ticketList,
};

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
    },
    extraReducers:{
    }
});

export const ticketListSelector = (state: RootState) => state.ticket.ticketList;

export default ticketSlice.reducer;