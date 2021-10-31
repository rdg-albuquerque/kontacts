import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ButtonGreen = styled(Button)({
    marginBottom: '8px',
    height: '50px',
    backgroundColor: "#04C45C",
    '&:hover': {
        backgroundColor: '#09a150',
        borderColor: '#0062cc',
    }
});

const ButtonRed = styled(Button)({
    marginBottom: '8px',
    height: '50px',
    backgroundColor: '#FB0615A6',
    '&:hover': {
        backgroundColor: '#d80311a6',
        borderColor: '#0062cc',
    }
});

export {
    ButtonGreen,
    ButtonRed
}