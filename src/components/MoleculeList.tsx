import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material/styles";
import ScienceSharpIcon from "@mui/icons-material/ScienceSharp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { TList } from "./AppMenu";
import EggIcon from '@mui/icons-material/Egg';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  active: number,
  setActive: (index: number) => void,
  setList: (listName:TList)=> void,
}

export default function MoluculeList({active, setActive, setList }:Props) {
  const List = ["Carbon", "Neon", "Xeon", "Iron", "Copper", "Lithium"];
  
  return (
    <>
      <MenuList>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ px: 2, py: 1, textAlign: "center" }}
        >
          Добытые ингридиенты
          <EggIcon fontSize="small" color="disabled" sx={{ mx: 1, mb:-0.5 }} />
        </Typography>

        {List.map((name, index) => (
          <MenuItem
            sx={(theme: Theme) => ({
              justifyContent: "space-around",
              borderStyle: "solid",
              borderWidth: "2px",
              borderRadius: theme.shape.borderRadius,
              borderColor:
                active === index
                  ? theme.palette.grey[800]
                  : theme.palette.warning.contrastText,
              backgroundColor:
                active === index
                  ? theme.palette.grey[800]
                  : theme.palette.warning.contrastText,
              color:
                active === index
                  ? theme.palette.common.white
                  : theme.palette.common.black,
              ":hover": {
                borderColor:
                  active === index
                    ? theme.palette.grey[800]
                    : theme.palette.warning.contrastText,
                backgroundColor:
                  active === index
                    ? theme.palette.grey[800]
                    : theme.palette.warning.contrastText,
                color:
                  active === index
                    ? theme.palette.common.white
                    : theme.palette.common.black,
              },
            })}
            onClick={() => setActive(index)}
          >
            <Typography variant="body2">{name}</Typography>
            <Typography variant="body2">
              {index} <AttachMoneyIcon fontSize="small" sx={{ mb: -0.5 }} />
            </Typography>
          </MenuItem>
        ))}

<Typography
            variant="body2"
            color="text.primary"
            sx={{ px: 2, py: 1, textAlign: "center" }}
          >
            Виды салатов
            <MenuBookIcon fontSize="small" color="disabled" sx={{ mx: 1, mb:-0.5 }} />
          </Typography>


        <MenuItem
          sx={(theme: Theme) => ({
            justifyContent: "center",
            border: `2px solid ${theme.palette.grey[500]}`,
            borderRadius: theme.shape.borderRadius,
            my: 1,
          })}
          onClick={()=>setList("salads")}
        >
          <ArrowBackIcon fontSize="small" />
          <Typography variant="body2" color="text.primary">
            Вернуться
          </Typography>
        </MenuItem>

      </MenuList>
    </>
  );
}
