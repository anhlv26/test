import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Divider } from "@mui/material";

const HeaderComponent = () => {
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
          >
            <AccountCircleIcon sx={{ fontSize: "20px" }} />
          </Box>
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
