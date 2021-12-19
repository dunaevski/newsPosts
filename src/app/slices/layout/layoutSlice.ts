import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LayoutState {
    isOpen: boolean;
}

const initialState: LayoutState = {
    isOpen: false,
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
        toggleMenuOpen:  (state) => {
            state.isOpen = !state.isOpen;
        },
    },
})

export const { setOpen, toggleMenuOpen } = layoutSlice.actions

export default layoutSlice.reducer
