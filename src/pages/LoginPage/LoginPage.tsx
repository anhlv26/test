import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { styled, TextField, Typography } from "@mui/material";
import ButtonCustom from "~/components/ButtonCustom/ButtonCustom";
import { useForm } from "react-hook-form";

import ModalForgotPassword from "~/components/ModalForgotPassword/ModalForgotPassword";

interface FormValues {
  username: string;
  password: string;
}

const CssTextField = styled(TextField)({
  "& .MuiInputLabel-root.Mui-error": {
    color: "#6F7E8C",
  },
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
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //handle submit form
  const onSubmit = (data: FormValues) => {};

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
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
                width: "100%",
                padding: "0 20px",
              }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ width: "100%", margin: "0", padding: "0" }}
              >
                <CssTextField
                  {...register("username", {
                    required: "Vui lòng không để trống trường này",
                  })}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  type=""
                  size="small"
                  label="Tên đăng nhập"
                  sx={{ width: "100%" }}
                />
                <CssTextField
                  {...register("password", {
                    required: "Vui lòng không để trống trường này",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  size="small"
                  label="Mật khẩu"
                  sx={{
                    width: "100%",
                    mb: "24px",
                    mt: "16px",
                    position: "relative",
                  }}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <ButtonCustom type="submit" textButton="Đăng nhập" fullWidth />
              </form>
              <Typography
                onClick={handleOpenModal}
                sx={{
                  fontSize: "10px",
                  fontWeight: "600",
                  mt: "8px",
                  color: "#3B76AC",
                  cursor: "pointer",
                }}
              >
                Quên mật khẩu?
              </Typography>
            </Box>
          </Box>
          <ModalForgotPassword open={open} handleClose={handleCloseModal}/>
        </Grid>
        <Grid item md={9}>
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              backgroundImage: "url(./src/assets/bgLogin.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
