import Typography from "@mui/material/Typography";
import Nameplate from "./CustumUI/Nameplate";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Theme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";
import { AppStateReducer } from "./../store/reducers/AppStateReducer";

type flag = "mainIngrediets" | "addedIngredients";
interface Props {
  moleculeId: string;
  flag: flag;
}

export default function MoleculePlate({ moleculeId, flag }: Props) {
  const { molecules } = useAppSelector((state) => state.moleculesSaladsReducer);
  const dispatch = useAppDispatch();
  const { deleteMoleculeFromSalad } = AppStateReducer.actions;
  const closeHandle = () => {
    switch (flag) {
      case "addedIngredients": dispatch(deleteMoleculeFromSalad(moleculeId));
        break;
      case "mainIngrediets": console.log(moleculeId);
        break;
    };

  };
  const IdToString = () => {
    for (let molecule of molecules) {
      if (molecule._id === moleculeId) {
        return molecule.title;
      }
    }
  };
  return (
    <Nameplate>
      <Typography variant="subtitle1">{IdToString()}</Typography>
      <IconButton onClick={closeHandle}>
        <CloseIcon
          fontSize="small"
          sx={(theme: Theme) => ({ color: theme.palette.common.white })}
        />
      </IconButton>
    </Nameplate>
  );
}
