import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge, {
  name: "badge",
})<BadgeProps>(({ theme }) => ({
    right: -5,
    top: 0,
    border: `2px solid ${theme.palette.common.white}`,
    padding: '0 4px',
}));

export default StyledBadge;