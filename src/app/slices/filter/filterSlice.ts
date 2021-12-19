import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DateValue =  [null, null] | [string, string];

export interface FilterState {
    filterDate: DateValue;
}

const initialState: FilterState = {
    filterDate: [null, null],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterDate: (state, action: PayloadAction<DateValue>) => {
            state.filterDate = action.payload
        },
    },
})

export const { setFilterDate } = filterSlice.actions

export default filterSlice.reducer
