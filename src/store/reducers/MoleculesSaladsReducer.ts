import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchMolecules,
  fetchOneMolecule,
  fetchOneSalad,
  fetchOrder,
  fetchSalads,
} from "./ActionCreators";
import { IMolecule, IResponseOrder, ISalad } from "../models";

interface MoleculesSaladsState {
  molecules: IMolecule[];
  salads: ISalad[];
  molecule: null | IMolecule;
  salad: null | ISalad;
  errorSalads?: string;
  errorMolecules?: string;
  errorOrder?: string;
  orderResult?: string;
  isLoading: boolean;
}

const initialState: MoleculesSaladsState = {
  molecules: [],
  salads: [],
  molecule: null,
  salad: null,
  errorSalads: "",
  errorMolecules: "",
  errorOrder: "",
  orderResult: "",
  isLoading: false,
};

export const MoleculeSaladSlice = createSlice({
  name: "moleculesSalads",
  initialState,
  reducers: {},
  extraReducers: {
    // molecules
    [fetchMolecules.fulfilled.type]: (
      state,
      action: PayloadAction<IMolecule[]>
    ) => {
      state.errorMolecules = "";
      state.molecules = action.payload;
    },
    [fetchMolecules.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchMolecules.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errorMolecules = action.payload;
    },

    // salads
    [fetchSalads.fulfilled.type]: (state, action: PayloadAction<ISalad[]>) => {
      state.isLoading = false;
      state.errorSalads = "";
      state.salads = action.payload;
    },
    [fetchSalads.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSalads.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errorSalads = action.payload;
    },

    // molecule
    [fetchOneMolecule.fulfilled.type]: (
      state,
      action: PayloadAction<IMolecule>
    ) => {
      state.errorMolecules = "";
      state.molecule = action.payload;
    },
    [fetchOneMolecule.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOneMolecule.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.errorMolecules = action.payload;
    },

    // salad
    [fetchOneSalad.fulfilled.type]: (state, action: PayloadAction<ISalad>) => {
      state.isLoading = false;
      state.errorSalads = "";
      state.salad = action.payload;
    },
    [fetchOneSalad.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOneSalad.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errorSalads = action.payload;
    },

    // order
    [fetchOrder.fulfilled.type]: (state, action: PayloadAction<IResponseOrder>) => {
      console.log(action.payload)
      state.isLoading = false;
      state.errorOrder = "";
      state.orderResult = action.payload.result
    },
    [fetchOrder.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOrder.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errorOrder = action.payload;
    },
  },
});

export default MoleculeSaladSlice.reducer;
