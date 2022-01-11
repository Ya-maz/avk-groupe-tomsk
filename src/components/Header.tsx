import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export default function Header() {
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: 0 }}
      >

          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ p: 1 }}
            >
              <RestaurantIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOGOhere
            </Typography>

            <Button variant="contained" color="warning" sx={{ px: 3 }}>
              <Typography variant="subtitle1" sx={{ textTransform: "none" }}>
                Сделать заказ
              </Typography>
            </Button>
          </Toolbar>
          <Box alignSelf={"center"} width={"40%"} sx={(theme:any) => ({
            borderBottom: `3px solid ${theme.palette.warning.main}`,
          })}></Box>
      </AppBar>
    </>
  );
}
