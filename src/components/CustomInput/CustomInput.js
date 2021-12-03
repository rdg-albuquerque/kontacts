import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";

const StyledInput = styled(TextField)({
  marginBottom: "1.5rem",
  "& .MuiFormHelperText-root": {
    fontSize: "1.1rem",
  },
});

const inputProps = {
  style: {
    fontSize: "1.6rem",
    fontFamily: "Roboto",
    backgroundColor: "#FDFAFA",
  },
};

function CustomInput({
  value,
  type,
  placeholder,
  mb,
  onChange,
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
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
}

function onlyNumbers(str) {
  return str.replace(/[^0-9]/g, "");
}

function MaskedInput({
  onChange,
  value,
  mask,
  mb,
  error,
  helperText,
  placeholder,
}) {
  function handleChange(e) {
    onChange({
      ...e,
      target: { ...e.target, value: onlyNumbers(e.target.value) },
    });
  }
  return (
    <InputMask
      mask={mask}
      alwaysShowMask={false}
      onChange={handleChange}
      value={onlyNumbers(value)}
    >
      {() => (
        <StyledInput
          inputProps={inputProps}
          sx={{ mb }}
          error={error}
          helperText={helperText}
          placeholder={placeholder}
        />
      )}
    </InputMask>
  );
}

export { CustomInput, MaskedInput };
