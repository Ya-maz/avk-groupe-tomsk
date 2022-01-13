import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moleculesSaladsReducer from "./reducers/MoleculesSaladsReducer";
import appState from "./reducers/AppStateReducer";

const rootReducer = combineReducers({
  moleculesSaladsReducer,
  appState,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
