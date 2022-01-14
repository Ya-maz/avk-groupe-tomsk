import { MenuItem, Theme, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { ISalad } from "../store/models";
import { useAppDispatch } from "../store/hooks/redux";
import { AppStateReducer } from "../store/reducers/AppStateReducer";
import { fetchOneSalad } from "./../store/reducers/ActionCreators";

interface Props {
  currentSaladId: string;
  salad: ISalad;
  setCurrentSaladId: (id: string) => void;
}

export default function SaladItem({
  currentSaladId,
  salad,
  setCurrentSaladId,
}: Props) {
  const [active, setActive] = useState<boolean>(false);
  const { setCurrentSalad } = AppStateReducer.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentSaladId === salad._id) {
      setActive(true);
    } else setActive(false);
  }, [currentSaladId]);

  useEffect(() => {
    if (currentSaladId) {
      const newSalad = { ...salad, option:[]}
      dispatch(setCurrentSalad(newSalad));
      dispatch(fetchOneSalad(salad._id));
    }
  }, [active]);

  return (
    <MenuItem
      key={salad._id}
      sx={(theme: Theme) => ({
        justifyContent: "space-around",
        borderStyle: "solid",
        borderWidth: "2px",
        borderRadius: theme.shape.borderRadius,
        borderColor: active
          ? theme.palette.grey[800]
          : theme.palette.warning.contrastText,
        backgroundColor: active
          ? theme.palette.grey[800]
          : theme.palette.warning.contrastText,
        color: active ? theme.palette.common.white : theme.palette.common.black,
        ":hover": {
          borderColor: active
            ? theme.palette.grey[800]
            : theme.palette.warning.contrastText,
          backgroundColor: active
            ? theme.palette.grey[800]
            : theme.palette.warning.contrastText,
          color: active
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
      })}
      onClick={() => setCurrentSaladId(salad._id)}
    >
      <Typography variant="body2">{salad.title}</Typography>
      <Typography variant="body2">
        {salad.price} <AttachMoneyIcon fontSize="small" sx={{ mb: -0.5 }} />
      </Typography>
      <IconButton
        size="large"
        edge="start"
        color="warning"
        aria-label="menu"
        sx={{ p: 1 }}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </MenuItem>
  );
}
