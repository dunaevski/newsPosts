import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Theme =  'light' | 'dark'

export interface SettingsState {
    fontSize: number;
    countNews: number;
    theme: Theme;
}

const initialState: SettingsState = {
    fontSize: 14,
    countNews: 10,
    theme: 'light',
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setFontSize: (state, action: PayloadAction<number>) => {
            state.fontSize = action.payload
        },
        setCountNews: (state, action: PayloadAction<number>) => {
            state.countNews = action.payload
        },
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        },
    },
})

export const { setFontSize, setCountNews, setTheme } = settingsSlice.actions

export default settingsSlice.reducer
