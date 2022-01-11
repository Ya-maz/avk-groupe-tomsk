import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Theme } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StyledBadge from "./CustumUI/StyledBadge";

export default function MenuItemAddToBask() {
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
      <StyledBadge color="warning" badgeContent={5} />
    </MenuItem>
  );
}
