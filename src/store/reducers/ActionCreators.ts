import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMolecule,
  getMoleculesList,
  getSalad,
  getSaladsList,
  postFetch,
} from "../../service";
import { IPartOrder } from "../models";

export const fetchMolecules = createAsyncThunk(
  "moleculeList/fetch",
  async (_, thunkAPI) => {
    try {
      return await getMoleculesList();
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список молекул");
    }
  }
);

export const fetchSalads = createAsyncThunk(
  "saladList/fetch",
  async (_, thunkAPI) => {
    try {
      return await getSaladsList();
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список салатов");
    }
  }
);

export const fetchOneMolecule = createAsyncThunk(
  "molecule/fetch",
  async (_id: string, thunkAPI) => {
    try {
      return await getMolecule(_id);
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить данную молекулу");
    }
  }
);

export const fetchOneSalad = createAsyncThunk(
  "salad/fetch",
  async (_id: string, thunkAPI) => {
    try {
      return await getSalad(_id);
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить данный салат");
    }
  }
);

export const fetchOrder = createAsyncThunk(
  "order/fetch-post",
  async (molecules: IPartOrder[], thunkAPI) => {
    try {
      return await postFetch(molecules);
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось обработать заказ");
    }
  }
);
