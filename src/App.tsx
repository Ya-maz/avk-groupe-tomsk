import { Stack } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import AppMenu from "./components/AppMenu";
import MainContainer from "./components/MainContainer";

function App() {
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
