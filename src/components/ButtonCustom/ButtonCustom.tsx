import { Box, Button, ButtonProps, styled } from "@mui/material";
import React from "react";

interface ButtonComponentProps extends ButtonProps {
  textButton?: string;
  onClick?: () => void;
}

const StyledButton = styled(Button)<ButtonComponentProps>(() => ({
  backgroundColor: "#FCB71E",
  padding: "10px 20px",
  borderRadius: "6px",
  height: "40px",
  marginTop: "12px",
  color:"#000",
  fontSize:"14px",
  textTransform:"none",
  border:"1px solid #fa8002",
  fontWeight:"300",
  "&:hover": {
    backgroundColor: "#fdd13a",
  },
}));

const ButtonCustom: React.FC<ButtonComponentProps> = ({
  textButton,
  onClick,
  ...rest
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <StyledButton {...rest}>{textButton}</StyledButton>
    </Box>
  );
};

export default ButtonCustom;
