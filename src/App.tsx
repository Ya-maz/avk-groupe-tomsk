import { Stack } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import AppMenu from "./components/AppMenu";
import MainContainer from "./components/MainContainer";
import { useAppDispatch } from "./store/hooks/redux";
import { fetchMolecules, fetchSalads } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(fetchMolecules());
    dispatch(fetchSalads());
  });
  return (
    <div>
      <Header />
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        spacing={2}
      >
        <MainContainer />
        <AppMenu />
      </Stack>
    </div>
  );
}

export default App;
