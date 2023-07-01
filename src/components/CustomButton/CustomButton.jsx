import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)(() => ({
  borderRadius: '16px',
  borderWidth: '2px',

  '&:hover': {
    borderWidth: '2px',
  },
}));

export default CustomButton;
