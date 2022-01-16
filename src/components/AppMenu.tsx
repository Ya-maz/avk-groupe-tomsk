import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import SaladList from "./SaladList";
import MoleculeList from "./MoleculeList";

export type TList = "salads" | "molecules";
export type TypeMoleculeList = "add" | "new";

export default function AppMenu() {
  const [list, setList] = React.useState<TList>("salads");
  const [type, setType] = React.useState<TypeMoleculeList>("add");

  return (
    <>
      <Box
        width={"1px"}
        height={"70vh"}
        sx={(theme: Theme) => ({
          borderLeft: `3px solid ${theme.palette.grey[100]}`,
        })}
      ></Box>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{
          width: "25vw",
        }}
      >
        {list === "salads" ? (
          <SaladList setList={setList} setType={ setType }/>
        ) : (
            <MoleculeList type={type} setList={setList}/>
        )}
      </Stack>
    </>
  );
}
