import { Stack } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import SaladList from "./components/SaladList";

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
        <SaladList />
      </Stack>
    </div>
  );
}

export default App;
