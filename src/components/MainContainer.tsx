import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import salad from "../assets/6.png";
import ImageBasic from "./CustumUI/ImageBasic";
import { Stack, Theme } from "@mui/material";
import MoleculePlate from "./MoleculePlate";

export default function MainContainer() {
  const List = ["Carbon", "Neon", "Xeon", "Iron", "Copper", "Lithium"];
  return (
    <Grid container sx={{ width: "100%" }} justifyContent={"space-around"}>
      <Grid item>
        <Box>
          <ImageBasic src={salad} />
        </Box>
        <Typography variant="h3">cesar</Typography>
        <Typography variant="h4">350.-</Typography>
      </Grid>
      <Grid item sx={{ width: "40%" }}>
        <Typography variant="h3">ингридиенты:</Typography>
        <Stack direction={"row"} flexWrap={"wrap"}>
          {List.map((name, index) => (
            <MoleculePlate key={index}>{name}</MoleculePlate>
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
            {List.slice(2).map((name,index) => (
              <MoleculePlate key={index}>{name}</MoleculePlate>
            ))}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
