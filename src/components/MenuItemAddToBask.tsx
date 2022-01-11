import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Theme } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";

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
      <Badge color={"primary"} badgeContent={0}>
        <AddShoppingCartIcon fontSize="small" />
      </Badge>
      <Typography variant="body2" color="text.primary">
        Добавить в корзину
      </Typography>
    </MenuItem>
  );
}
 