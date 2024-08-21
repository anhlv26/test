import { Button, Divider, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import AddIcon from "@mui/icons-material/Add";

const ContentComponent = () => {
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
    <Box>
      <Grid container>
        <Grid item md={2.4}>
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
        </Grid>
        <Grid item md={9.6}>
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
            {/* <Box display="flex" alignItems="center">
              <Button variant="contained">Thêm mới</Button>
              <IconButton>
                <AddIcon sx={{ fontWeight: "300", fontSize: "18px" }} />
              </IconButton>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentComponent;
