import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import saladImg from "../assets/6.png";
import ImageBasic from "./CustumUI/ImageBasic";
import { Stack, Theme } from "@mui/material";
import MoleculePlate from "./MoleculePlate";
import { useAppSelector } from "../store/hooks/redux";

export default function MainContainer() {
  const List = ["Carbon", "Neon", "Xeon", "Iron", "Copper", "Lithium"];

  const { molecules } = useAppSelector((state) => state.moleculesSaladsReducer);
  const currentSalad = useAppSelector((state) => state.appState.currentSalad);

  const moleculeToString = () => {
    if (
      (!currentSalad?.composition && !molecules) ||
      !currentSalad ||
      !molecules
    )
      return undefined;
    if (currentSalad.composition) {
      return currentSalad.composition.map((spice) => {
        if (!spice) return undefined;
        for (let molecule of molecules) {
          if (molecule._id === spice) {
            return molecule.title;
          }
        }
      });
    }
  };

  const isOkey = moleculeToString();
  const moleculeToStringOption = () => {
    if (!currentSalad) return undefined;
    if (currentSalad?.option === undefined || currentSalad.option.length == 0) {
      return undefined;
    }
    if (currentSalad.option) {
      const spices = currentSalad.option.map((spice) => {
        for (let molecule of molecules) {
          if (molecule._id === spice) {
            return molecule.title;
          }
        }
      });
      return spices.map((name, index) => (
        <MoleculePlate key={index}>{name!}</MoleculePlate>
      ));
    }
  };

  console.log(moleculeToStringOption());

  return (
    <Grid container sx={{ width: "100%" }} justifyContent={"space-around"}>
      <Grid item>
        <Box>
          <ImageBasic src={saladImg} />
        </Box>
        <Typography variant="h3">{currentSalad?.title}</Typography>
        <Typography variant="h4">{`${currentSalad?.price}.-`}</Typography>
      </Grid>
      <Grid item sx={{ width: "40%" }}>
        <Typography variant="h3">ингридиенты:</Typography>

        <Stack direction={"row"} flexWrap={"wrap"}>
          {isOkey &&
            moleculeToString()!.map((name, index) => (
              <MoleculePlate key={index}>{name!}</MoleculePlate>
            ))}
        </Stack>
        <Box
          alignSelf={"center"}
          width={"40%"}
          sx={(theme: Theme) => ({
            mt: 3,
            borderBottom: `3px solid ${theme.palette.grey[100]}`,
          })}
        ></Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5">Добавки:</Typography>
          <Stack direction={"row"} flexWrap={"wrap"}>
            {/* {!isEmpty() && moleculeToStringOption!.map((name: string, index: number) => (
              <MoleculePlate key={index}>{name!}</MoleculePlate>
            ))} */}
            {moleculeToStringOption()}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
