import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';

const CustomInput = styled(TextField)({
    height: '50px',
    marginBottom: '15px',
    background: '#FDFAFA',
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

export {
    CustomInput
}