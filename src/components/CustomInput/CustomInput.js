import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInput = styled(TextField)({
  marginBottom: "1.5rem",
  backgroundColor: "#FDFAFA",
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
  "& .MuiFormHelperText-root": {
    fontSize: "1.1rem",
  },
});

const inputProps = {
  style: {
    fontSize: "1.6rem",
    fontFamily: "Roboto",
  },
};

function CustomInput({
  value,
  type,
  placeholder,
  mb,
  callback,
  error,
  helperText,
}) {
  return (
    <StyledInput
      value={value}
      variant="outlined"
      type={type}
      placeholder={placeholder}
      sx={{ mb }}
      inputProps={inputProps}
      onChange={callback}
      error={error}
      helperText={helperText}
    />
  );
}

export { CustomInput };
