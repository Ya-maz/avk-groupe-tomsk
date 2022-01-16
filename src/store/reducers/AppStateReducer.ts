import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMolecules, fetchSalads } from "./ActionCreators";
import { IMolecule, ISalad } from "../models";

interface IAppState {
  currentSalad: null | ISalad;
  availableMolucules:  null |IMolecule[] 

}

const initialState: IAppState = {
  currentSalad: null,
  availableMolucules: null,

};

export const AppStateReducer = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setCurrentSalad(state, action: PayloadAction<ISalad>) {
      state.currentSalad = action.payload;
    },
    setavailableMolucules(state, action: PayloadAction<IMolecule[]>) {
      state.availableMolucules = action.payload
    },
    decrement(state, action:PayloadAction<string>)
    {
      state.availableMolucules?.forEach(molecule => {
        if (molecule._id === action.payload) { 
          molecule.qty--;
        }
      })
    },
    addMoleculeToSalad(state, action: PayloadAction<string>) {
      state.currentSalad?.option?.push(action.payload!)
    },
    deleteMoleculeFromSalad(state, action: PayloadAction<string>) {
      state.currentSalad!.option = state.currentSalad?.option?.filter(molecule => {
        return (molecule !== action.payload)
      })
    }
  },
});

export default AppStateReducer.reducer;
