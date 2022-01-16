import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import saladImg from "../assets/6.png";
import ImageBasic from "./CustumUI/ImageBasic";
import { Stack, Theme } from "@mui/material";
import MoleculePlate from "./MoleculePlate";
import { useAppSelector } from "../store/hooks/redux";
import ModalWindow from "./ModalWindow";

type flag = "mainIngrediets" | "addedIngredients "

export default function MainContainer() {
  const List = ["Carbon", "Neon", "Xeon", "Iron", "Copper", "Lithium"];

  const { molecules } = useAppSelector((state) => state.moleculesSaladsReducer);
  const currentSalad = useAppSelector((state) => state.appState.currentSalad);
  const { errorSalads, errorMolecules } = useAppSelector((state) => state.moleculesSaladsReducer);

  const error = errorMolecules ? errorMolecules : errorSalads ? errorSalads : false;
  const conditionForRenderMoleculePlateMainIngrediets = () => {
    if (
      (!currentSalad?.composition && !molecules) ||
      !currentSalad ||
      !molecules
    )
      return undefined;
    if (currentSalad.composition) {
      return currentSalad.composition.map((molecule, key) => 
        <MoleculePlate key={key} flag={"mainIngrediets"} moleculeId={molecule}></MoleculePlate>
      );
    }
  };

  const conditionForRenderMoleculePlateAddedIngrediets = () => {
    if (!currentSalad) return undefined;
    if (currentSalad?.option === undefined || currentSalad.option.length == 0) {
      return undefined;
    }
    if (currentSalad.option) {
      return currentSalad.option.map((molecule, key) => 
        <MoleculePlate key={key} flag={"addedIngredients"} moleculeId={molecule}></MoleculePlate>
      )
    };
  }

  return (
    <>
      {error && <ModalWindow>{ error }</ModalWindow>}
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
          {conditionForRenderMoleculePlateMainIngrediets()}
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
            {conditionForRenderMoleculePlateAddedIngrediets()}
          </Stack>
        </Box>
      </Grid>
    </Grid>
    </>
  );
}
