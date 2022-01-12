import { IMolecule, IResponseMS, ISalad } from "../models";
import { createAsyncThunk } from "@reduxjs/toolkit";

const SERVER_API = "http://test-job.webatom.ru";
// http://test-job.webatom.ru/salads

const getFetch = async <Type>(url: string): Promise<Type> => {
  const response = await fetch(`${SERVER_API}${url}`, );
  return await response.json();
};

const getMoleculesList = async () => {
  return (await getFetch<IResponseMS>("/molecules")).result;
};

const getSaladsList = async () => {
  return (await getFetch<IResponseMS>("/salads")).result;
};

export const fetchMolecules = createAsyncThunk(
  "molecules/fetch",
  async (_, thunkAPI) => {
    try {
      return await getMoleculesList();
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список молекул");
    }
  }
);

export const fetchSalads = createAsyncThunk(
  "salad/fetch",
  async (_, thunkAPI) => {
    try {
       return await getSaladsList();
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список салатов");
    }
  }
);
