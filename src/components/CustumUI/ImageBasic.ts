import { styled } from "@mui/material/styles";

const ImageBasic = styled("img", {
  name: "image-basic",
})(({ theme }) => ({
  display: "flex",
  width: "360px",
  height: "320px"
}));

export default ImageBasic