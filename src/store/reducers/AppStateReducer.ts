import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMolecules, fetchSalads } from "./ActionCreators";
import { IMolecule, ISalad } from "../models";

interface IAppState {
  currentSalad: null|ISalad;

}

const initialState: IAppState = {
  currentSalad: null,

};

export const AppStateReducer = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setCurrentSalad(state, action: PayloadAction<ISalad>) {
      state.currentSalad = action.payload
    }
  },
});

export default AppStateReducer.reducer;
