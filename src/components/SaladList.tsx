import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material/styles";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScienceSharpIcon from "@mui/icons-material/ScienceSharp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AddIcon from "@mui/icons-material/Add";
import { TList, TypeMoleculeList } from "./AppMenu";
import MenuItemAddToBask from "./MenuItemAddToBask";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";

import { useState } from "react";
import SaladItem from "./SaladItem";
import { AppStateReducer } from "../store/reducers/AppStateReducer";

interface Props {
  setList: (listName: TList) => void;
  setType: (type: TypeMoleculeList) => void;
}

export default function SaladList({ setList, setType }: Props) {
  const dispatch = useAppDispatch();
  const [currentSaladId, setCurrentSaladId] = useState<string>("");
  const ListSalad1 = ["Цезарь", "Греческий", "Морской", "Туземский", "Летний"];
  const { salads, molecules } = useAppSelector(
    (state) => state.moleculesSaladsReducer
  );
  const availableMolucules = useAppSelector(
    (state) => state.appState.availableMolucules
  );
  const setavailableMolucules = AppStateReducer.actions.setavailableMolucules;

  return (
    <>
      <MenuList>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ px: 2, py: 1, textAlign: "center" }}
        >
          Виды салатов
          <MenuBookIcon
            fontSize="small"
            color="disabled"
            sx={{ mx: 1, mb: -0.5 }}
          />
        </Typography>

        {salads &&
          salads.map((salad) => (
            <SaladItem
              key={salad._id}
              salad={salad}
              currentSaladId={currentSaladId}
              setCurrentSaladId={setCurrentSaladId}
            />
          ))}

        <Typography
          variant="body2"
          color="text.primary"
          sx={{ px: 2, py: 1, textAlign: "center" }}
        >
          Bonus
          <WhatshotIcon fontSize="small" color="warning" sx={{ mx: 1 }} />
        </Typography>

        <MenuItem
          sx={(theme: Theme) => ({
            border: `2px solid ${theme.palette.grey[500]}`,
            borderRadius: theme.shape.borderRadius,
            my: 1,
          })}
          onClick={
            () => {
              setList("molecules");
              if (availableMolucules) return null;
              dispatch(setavailableMolucules(molecules));
              setType("add")
            }
          }
        >
          <AddIcon fontSize="small" />
          <Typography variant="body2" color="text.primary">
            Добавить ингридиенты
          </Typography>
        </MenuItem>

        <MenuItem
          sx={(theme: Theme) => ({
            border: `2px solid ${theme.palette.grey[500]}`,
            borderRadius: theme.shape.borderRadius,
            my: 1,
          })}
          onClick={
            () => {
              setList("molecules");
              if (availableMolucules) return null;
              dispatch(setavailableMolucules(molecules));
              setType("new")
            }
          }
        >
          <ScienceSharpIcon fontSize="small" />
          <Typography variant="body2" color="text.primary">
            Изготовить свой салат
          </Typography>
        </MenuItem>

        <MenuItemAddToBask />
      </MenuList>
    </>
  );
}
