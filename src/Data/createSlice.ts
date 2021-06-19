import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer, IPlayerArray } from "../Models/player";
import { RootState } from "./store";

// const initialState = {
//  names: [
//   {
//     name: "James",
//     id: 1,
//     skill: 1
//   },
//   {
//     name: "Em",
//     id: 2,
//     skill: 3
//   }]

// }
const initialState = {  
  names: []
} as IPlayerArray

let incrementalId = 3;

export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<IPlayer>) => {
      action.payload.id = incrementalId;
      incrementalId ++;
      return {...state, names: state.names.concat(action.payload)}
      
    },
    removePlayer: (state, action: PayloadAction<IPlayer>) => {

        return {...state, names: state.names.filter(x => x.id !== action.payload.id) }
        }, 
  },
});

export const { setName, removePlayer } = playerSlice.actions;

export const players = (state: RootState) => state;

export default playerSlice.reducer;
