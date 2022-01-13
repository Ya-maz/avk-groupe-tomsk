import Typography from "@mui/material/Typography";
import Nameplate from "./CustumUI/Nameplate";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Theme } from "@mui/material";

interface Props {
  children: string;
}

export default function MoleculePlate({ children }: Props) {
  return (
    <Nameplate>
      <Typography variant="subtitle1">{children}</Typography>
      <IconButton>
        <CloseIcon fontSize="small" sx={(theme: Theme) => ({ color: theme.palette.common.white })}/>
      </IconButton>
    </Nameplate>
  );
}
