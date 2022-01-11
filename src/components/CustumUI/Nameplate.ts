import { styled } from "@mui/material/styles";

const Nameplate = styled("div", {
  name: "nameplate",
})(({ theme }) => ({
  display: "inline-flex",
  background: theme.palette.grey[800],
  color: theme.palette.common.white,
  width: "150px",
  height: "50px",
  borderRadius: theme.shape.borderRadius,
  margin: 1,
  justifyContent: "space-around",
  alignItems: "center",

}));

export default Nameplate;