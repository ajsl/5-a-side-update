import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IPlayer, IPlayerArray } from "../Models/player";
import { RootState } from "./store";

const initialState = {
 names: [
  {
    name: "James",
    id: 1,
    skill: 1
  },
  {
    name: "Em",
    id: 2,
    skill: 3
  }]

}

let incrementalId = 3;

export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<IPlayer>) => {
      action.payload.id = incrementalId;
      incrementalId ++;
      return {...state, names: state.names.concat(action.payload)}
      // state.names = state.names.concat(action.payload);
      
    }
    // setName: {
    //   reducer: (state, action: PayloadAction<IPlayer>) => {
    //     state.push(action.payload);
    //   },
    //   prepare: (name: string, id: number, skill: number) => {
    //     return { payload: { name, id, skill } };
    //   },
    // },
    // removePlayer: {
    //   reducer: (state, action: PayloadAction<IPlayer>) => {
    //     state.filter((x) => x !== action.payload);
    //   },
    //   prepare: (name: string, id: number, skill: number) => {
    //     return { payload: { name, id, skill } };
    //   },
    // },
  },
});

export const { setName } = playerSlice.actions;

export const players = (state: RootState) => state;

export default playerSlice.reducer;
