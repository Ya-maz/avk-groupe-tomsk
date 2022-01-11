import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Theme } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function MenuItemAddToBask() {
  return (
    <MenuItem
      sx={(theme: Theme) => ({
        textAlign: "center",
        border: `2px solid ${theme.palette.warning.light}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.warning.light,
        mb: 1,
        mt: 3,
      })}
      onClick={() => ({})}
    >
      <AddShoppingCartIcon fontSize="small" />
      <Typography variant="body2" color="text.primary">
        Добавить в корзину
      </Typography>
    </MenuItem>
  );
}
