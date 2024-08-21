import { Box } from "@mui/material";
import React from "react";

const NavbarComponent = () => {
  const dataMenu = [
    {
      label: "Quản lý khách hàng",
    },
    {
      label: "Quản lý khách hàng",
    },
    {
      label: "Quản lý khách hàng",
    },
    {
      label: "Quản lý khách hàng",
    },
    {
      label: "Quản lý khách hàng",
    },
    {
      label: "Quản lý khách hàng",
    },
    {
      label: "Quản lý khách hàng",
    },
    {
      label: "Quản lý khách hàng",
    },
  ];
  return (
    <Box sx={{height:"100%"}}>
      {dataMenu.map((item, index) => {
        return (
          <Box key={index} sx={{ "&:hover": { bgcolor: "#E5E5E5" } }}>
            <Box
              sx={{
                cursor: "pointer",
                padding: "8px 16px",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              {item.label}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default NavbarComponent;
