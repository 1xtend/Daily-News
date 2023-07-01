import { styled, TextField } from '@mui/material';

const Input = styled(TextField)(() => ({
  fontFamily: 'inherit',

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },

  '& .MuiInputBase-root': {
    borderRadius: '16px',
    font: 'inherit',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '2px',
    transition: 'border-color .2s ease-in-out',
  },
}));

export default Input;
