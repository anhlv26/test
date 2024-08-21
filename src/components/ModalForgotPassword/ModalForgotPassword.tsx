import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  Box,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#F4F4F4",
  borderRadius: "4px",
  border: "none",
  outline: "none",
  width: "280px",
};

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

interface ModalForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
}

const ModalForgotPassword: React.FC<ModalForgotPasswordProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={styleModal}>
          <Box
            sx={{
              padding: "18px 24px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "0 24px",
            }}
          >
            <img
              src="./src/assets/lock.png"
              style={{ width: "100px", height: "100px" }}
            />
            <Typography sx={{ mt: 2, fontSize: "16px", fontWeight: "600" }}>
              Vui lòng nhập email
            </Typography>
            <CssTextField
              //   {...register("password", {
              //     required: "Vui lòng không để trống trường này",
              //   })}
              //   error={!!errors.password}
              //   helperText={errors.password?.message}
              size="small"
              label="Email *"
              sx={{
                width: "100%",
                mb: "20px",
                mt: "16px",
                position: "relative",
              }}
              type="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <EmailOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <ButtonCustom
              sx={{ mb: "24px" }}
              textButton="Đăng nhập"
              fullWidth
            />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalForgotPassword;
