import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMolecules, fetchOneMolecule, fetchOneSalad, fetchSalads } from "./ActionCreators";
import { IMolecule, ISalad } from "../models";

interface MoleculesSaladsState {
  molecules: IMolecule[];
  salads: ISalad[];
  molecule: null | IMolecule;
  salad: null | ISalad;
  error: string;
  isLoading: boolean
}

const initialState: MoleculesSaladsState = {
  molecules: [],
  salads: [],
  molecule: null,
  salad: null,
  error: "",
  isLoading: false
};

export const MoleculeSaladSlice = createSlice({
  name: "moleculesSalads",
  initialState,
  reducers: {},
  extraReducers: {
    // molecules
    [fetchMolecules.fulfilled.type]: (state, action: PayloadAction<IMolecule[]>) => {
      state.error = "";
      state.molecules = action.payload;
    },
    [fetchMolecules.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchMolecules.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // salads
    [fetchSalads.fulfilled.type]: (state, action: PayloadAction<ISalad[]>) => {
      state.isLoading = false;
      state.error = "";
      state.salads = action.payload;
    },
    [fetchSalads.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSalads.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // molecule
    [fetchOneMolecule.fulfilled.type]: (state, action: PayloadAction<IMolecule>) => {
      state.error = "";
      state.molecule = action.payload;
    },
    [fetchOneMolecule.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOneMolecule.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // salad
    [fetchOneSalad.fulfilled.type]: (state, action: PayloadAction<ISalad>) => {
      state.isLoading = false;
      state.error = "";
      state.salad = action.payload;
    },
    [fetchOneSalad.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOneSalad.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});

export default MoleculeSaladSlice.reducer;