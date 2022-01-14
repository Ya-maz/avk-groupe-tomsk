import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { TList } from "./AppMenu";
import EggIcon from "@mui/icons-material/Egg";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuItemAddToBask from "./MenuItemAddToBask";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";
import { AppStateReducer } from "../store/reducers/AppStateReducer";
import { IMolecule } from "../store/models";

interface Props {
  setList: (listName: TList) => void;
}

export default function MoluculeList({ setList }: Props) {
  const ListMolecule1 = ["Carbon", "Neon", "Xeon", "Iron", "Copper", "Lithium"];

  const dispatch = useAppDispatch();
  const molecules = useAppSelector(
    (state) => state.appState.availableMolucules
  );
  const { decrement, addMoleculeToSalad } = AppStateReducer.actions;

  const plusHandle = (molecule: IMolecule) => {
    if (molecule.qty) {
      dispatch(decrement(molecule._id));
      dispatch(addMoleculeToSalad(molecule._id))
    }
  };
  return (
    <>
      <MenuList>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ px: 2, py: 1, textAlign: "center" }}
        >
          Добытые ингридиенты
          <EggIcon fontSize="small" color="disabled" sx={{ mx: 1, mb: -0.5 }} />
        </Typography>

        {molecules &&
          molecules.map((molecule, index) => (
            <MenuItem
              key={index}
              sx={(theme: Theme) => ({
                justifyContent: "space-around",
                border: "2px solid trasparent",
                borderRadius: theme.shape.borderRadius,
                color: theme.palette.common.black,
                ":hover": {
                  borderColor: "inherit",
                  backgroundColor: "inherit",
                  color: "inherit",
                },
                ":active": {
                  borderColor: "inherit",
                  backgroundColor: "inherit",
                  color: "inherit",
                },
              })}
              onClick={() => ({})}
            >
              <Typography variant="body2">{molecule.title}</Typography>

              <Typography variant="body2">
                {molecule.price}{" "}
                <AttachMoneyIcon fontSize="small" sx={{ mb: -0.5 }} />
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >{`${molecule.qty} шт`}</Typography>
              <IconButton
                size="large"
                edge="start"
                color="warning"
                aria-label="plus"
                sx={{ p: 1 }}
                onClick={() => plusHandle(molecule)}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </MenuItem>
          ))}

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

        <MenuItem
          sx={(theme: Theme) => ({
            border: `2px solid ${theme.palette.grey[500]}`,
            borderRadius: theme.shape.borderRadius,
            my: 1,
          })}
          onClick={() => setList("salads")}
        >
          <ArrowBackIcon fontSize="small" />
          <Typography variant="body2" color="text.primary">
            Вернуться
          </Typography>
        </MenuItem>

        <MenuItemAddToBask />
      </MenuList>
    </>
  );
}
