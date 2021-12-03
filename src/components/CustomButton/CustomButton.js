import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonGreen = styled(Button)({
  fontSize: "1.6rem",
  marginBottom: "8px",
  height: "5rem",
  backgroundColor: "#04C45C",
  "&:hover": {
    backgroundColor: "#09a150",
    borderColor: "#0062cc",
  },
  "@media only screen and (max-width: 780px)": {
    width: "100%",
  },
});

const ButtonRed = styled(Button)({
  fontSize: "1.6rem",
  marginBottom: "8px",
  height: "5rem",
  backgroundColor: "#FB0615A6",
  "&:hover": {
    backgroundColor: "#d80311a6",
    borderColor: "#0062cc",
  },
});

const ButtonBlue = styled(Button)({
  fontSize: "1.6rem",
  marginBottom: "8px",
  height: "5rem",
  "@media only screen and (max-width: 780px)": {
    width: "100%",
  },
});

export { ButtonGreen, ButtonRed, ButtonBlue };
