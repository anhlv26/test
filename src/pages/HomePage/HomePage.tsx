import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ButtonCustom from "~/components/ButtonCustom/ButtonCustom";


const HomePage = () => {
  return (
    <Box sx={{ padding: "24px 16px" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          Quản lý khách hàng tiềm năng
        </Typography>
      </Box>
      <Box>
        <ButtonCustom
          sx={{
            "& .MuiButton-startIcon": {
              fontSize: "1px",
            },
          }}
          textButton="Thêm mới"
          endIcon={<AddIcon />}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
