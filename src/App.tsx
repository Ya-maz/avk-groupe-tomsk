import { Stack } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import AppMenu from "./components/AppMenu";

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
        <AppMenu />
      </Stack>
    </div>
  );
}

export default App;
