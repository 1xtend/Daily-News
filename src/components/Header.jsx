import { Box } from '@mui/material';

import SearchForm from './SearchForm';

function Header({ onSearch, error }) {
  return (
    <Box
      sx={{
        padding: '20px 0',
      }}
      component="header"
    >
      <SearchForm onSearch={onSearch} error={error} />
    </Box>
  );
}
export default Header;
