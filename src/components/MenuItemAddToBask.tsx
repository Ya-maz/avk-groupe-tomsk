import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Theme } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StyledBadge from "./CustumUI/StyledBadge";
import { useAppSelector } from "../store/hooks/redux";

export default function MenuItemAddToBask() {
 const molecules = useAppSelector(state=> state.appState.molecules)
  return (
    <MenuItem
      sx={(theme: Theme) => ({
        textAlign: "center",
        border: `2px solid ${theme.palette.warning.main}`,
        borderRadius: theme.shape.borderRadius,
        mb: 1,
        mt: 3,
      })}
      onClick={() => ({})}
    >
      <AddShoppingCartIcon fontSize="small" />
      <Typography variant="body2" color="text.primary">
        Добавить в корзину
      </Typography>
      <StyledBadge color="warning" badgeContent={molecules.length} />
    </MenuItem>
  );
}
