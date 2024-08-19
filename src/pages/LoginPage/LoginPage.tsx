import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { styled, TextField, Typography } from "@mui/material";
import ButtonCustom from "~/components/ButtonCustom/ButtonCustom";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box>
      <Grid container>
        <Grid item md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Box sx={{ pb: "42px" }}>
              <img
                src="./src/assets/logo.png"
                style={{ height: "45px", width: "90px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <CssTextField
                size="small"
                label="Tên đăng nhập"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch", padding: "0", minWidth: "300px" }}
              />
              <Box sx={{ position: "relative" }}>
                <CssTextField
                  size="small"
                  label="Mật khẩu"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "25ch", padding: "0", minWidth: "300px" }}
                  type={showPassword ? "text" : "password"}
                />

                <InputAdornment
                  position="end"
                  sx={{ position: "absolute", top: "50%", right: "20px" }}
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              </Box>
              <ButtonCustom textButton="Đăng nhập" />
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "600",
                  mt: "8px",
                  color: "#3B76AC",
                  cursor:"pointer",
                }}
              >
                Quên mật khẩu?
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={9}>
          <Box>
            <img src="./src/assets/bgLogin.png" style={{ height: "730px" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
