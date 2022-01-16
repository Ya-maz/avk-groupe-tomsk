import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMolecule, IPartOrder, ISalad } from "../models";

interface IAppState {
  currentSalad: null | ISalad;
  availableMolucules: null | IMolecule[];
  molecules: IPartOrder[];
}

const initialState: IAppState = {
  currentSalad: null,
  availableMolucules: null,
  molecules: [],

};

export const AppStateReducer = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setCurrentSalad(state, action: PayloadAction<ISalad | null>) {
      state.currentSalad = action.payload;
    },
    setavailableMolucules(state, action: PayloadAction<IMolecule[]>) {
      state.availableMolucules = action.payload
    },
    decrement(state, action: PayloadAction<string>) {
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
    },
    addToOrder(state, action: PayloadAction<string[]>) {
      action.payload.forEach((id) => {
        console.log("one", state.molecules.length)
        if (state.molecules.length === 0) { state.molecules.push({ id, qty: 1 }) }
        else state.molecules.forEach(molecule => {
          if (molecule.id === id) {
            console.log("condition1", molecule.id === id)
            state.molecules.push({ id, qty: molecule.qty++ });
          }
          else {
            console.log("condition2", molecule.id === id)
            state.molecules.push({ id, qty: 1 })
          };
        });
      })
    }
  }
})

export default AppStateReducer.reducer;
