import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        sx={{
          height: "48px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* heder start */}
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "48px",
              width: "48px",
              cursor: "pointer",
            }}
          >
            <ClearIcon sx={{ fontSize: "20px" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="./src/assets/logo.png"
              style={{ height: "32px", width: "78px" }}
            />
          </Box>
        </Box>

        {/* header end */}
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "48px",
              width: "48px",
              cursor: "pointer",
            }}
            onClick={handleOpenMenu}
          >
            <AccountCircleIcon sx={{ fontSize: "20px" }} />
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            sx={{ ml: "-50px" }}
            PaperProps={{
              sx: {
                width: "260px",
              },
            }}
            MenuListProps={{
              sx: {
                paddingBottom: 0,
              },
            }}
          >
            <Box
              sx={{
                padding: "0 16px",
                display: "flex",
                alignItems: "center",
                mb: "16px",
              }}
            >
              <img
                src="./src/assets/avatar-img.jpg"
                style={{ width: "44px" }}
              />
              <Typography sx={{ pl: "20px" }}>admin</Typography>
            </Box>
            <MenuItem
              sx={{ padding: "16px", display: "flex ", bgcolor: "#E5E5E5" }}
            >
              <PersonOutlineIcon sx={{ mr: "16px" }} />
              <Typography sx={{ fontWeight: "bold" }}>
                Thông tin tài khoản
              </Typography>
            </MenuItem>
            <MenuItem
              sx={{ padding: "16px", display: "flex ", bgcolor: "#E5E5E5" }}
            >
              <LogoutIcon sx={{ mr: "16px" }} />
              <Typography sx={{ fontWeight: "bold" }}>Đăng xuất</Typography>
            </MenuItem>
          </Menu>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "48px",
              width: "48px",
              bgcolor: "#FCB71E",
              cursor: "pointer",
            }}
          >
            <NotificationsNoneOutlinedIcon sx={{ fontSize: "20px" }} />
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default HeaderComponent;
