import React from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScienceSharpIcon from "@mui/icons-material/ScienceSharp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AddIcon from "@mui/icons-material/Add";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function SaladList() {
  // enum List {
  // }
  const [active, setActive] = React.useState(0);
  const [list, setList] = React.useState("")

  const ListSalad = ["Цезарь", "Греческий", "Морской", "Туземский", "Летний"];
  return (
    <>
      <Box
        width={"1px"}
        height={"70vh"}
        sx={(theme: Theme) => ({
          borderLeft: `3px solid ${theme.palette.grey[100]}`,
        })}
      ></Box>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{
          width: "25vw",
        }}
      >

        { }
        <MenuList>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ px: 2, py: 1, textAlign: "center" }}
          >
            Виды салатов
            <MenuBookIcon fontSize="small" color="disabled" sx={{ mx: 1 }} />
          </Typography>

          {ListSalad.map((name, index) => (
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
                {index} <AttachMoneyIcon fontSize="small" sx={{mb:-0.5}} />
              </Typography>
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
              justifyContent: "center",
              border: `2px solid ${theme.palette.grey[500]}`,
              borderRadius: theme.shape.borderRadius,
              my: 1,
            })}
          >
            <AddIcon fontSize="small" />
            <Typography variant="body2" color="text.primary">
              Добавить ингридиенты
            </Typography>
          </MenuItem>

          <MenuItem
            sx={(theme: Theme) => ({
              justifyContent: "center",
              border: `2px solid ${theme.palette.grey[500]}`,
              borderRadius: theme.shape.borderRadius,
              my: 1,
            })}
          >
            <ScienceSharpIcon fontSize="small" />
            <Typography variant="body2" color="text.primary">
              Изготовить салат из ингридиентов
            </Typography>
          </MenuItem>
        </MenuList>
      </Stack>
    </>
  );
}
