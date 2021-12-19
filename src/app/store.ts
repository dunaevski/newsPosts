import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from './slices/settings/settingsSlice'
import filterSlice from "./slices/filter/filterSlice";
import layoutSlice from "./slices/layout/layoutSlice";

export const store = configureStore({
    reducer: {
        settings: settingsSlice,
        layout: layoutSlice,
        filter: filterSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
