import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Theme } from "@mui/material/styles";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScienceSharpIcon from "@mui/icons-material/ScienceSharp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { TList } from "./AppMenu";
import MenuItemAddToBask from "./MenuItemAddToBask";
import { useAppSelector } from "../store/hooks/redux";

interface Props {
  active: number,
  setActive: (index: number) => void,
  setList: (listName: TList)=> void,
}

export default function SaladList({ active, setActive, setList }: Props) {
  const ListSalad1 = ["Цезарь", "Греческий", "Морской", "Туземский", "Летний"];
  const ListSalad = useAppSelector(state => state.moleculesSaladsReducer.salads);
  return (
    <>
        <MenuList>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ px: 2, py: 1, textAlign: "center" }}
          >
            Виды салатов
            <MenuBookIcon fontSize="small" color="disabled" sx={{ mx: 1, mb:-0.5 }} />
          </Typography>

          {ListSalad && ListSalad.map((salad, index) => (
            <MenuItem key={ index }
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
              <Typography variant="body2">{salad.title}</Typography>
              <Typography variant="body2">
                {salad.price} <AttachMoneyIcon fontSize="small" sx={{mb:-0.5}} />
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
          onClick={()=>setList("molecules")}
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
          onClick={()=>setList("molecules")}
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
