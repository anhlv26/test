import { styled, ButtonProps } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

interface ButtonComponentProps extends ButtonProps {
  textButton?: string;
  onClick?: () => void;
}

const StyledButton = styled(Button)<ButtonComponentProps>(() => ({
  backgroundColor: "#FCB71E",
  padding: "0 8px",
  borderRadius: "4px",
  color: "#000",
  fontSize: "14px",
  textTransform: "none",
  border: "1px solid #fa8002",
  fontWeight: "300",
  height: "36px",
  "&:hover": {
    backgroundColor: "#fdd13a",
  },
  "& > *:first-child": {
    fontSize: "15px",
  },
}));

const ButtonCustom: React.FC<ButtonComponentProps> = ({
  textButton,
  onClick,
  ...rest
}) => {
  return <StyledButton {...rest}>{textButton}</StyledButton>;
};

export default ButtonCustom;
