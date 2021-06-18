import { configureStore } from '@reduxjs/toolkit'
import playerReducer from '../Data/createSlice';

const store = configureStore({
  reducer: {
    players: playerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
