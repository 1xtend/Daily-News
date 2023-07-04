import { Box } from '@mui/material';

import SearchForm from '../SearchForm/SearchForm';

function Header({ onSearch }) {
  return (
    <Box
      sx={{
        padding: '20px 0',
      }}
    >
      <SearchForm onSearch={onSearch} />
    </Box>
  );
}
export default Header;
