import { Box } from '@mui/material';

import SearchForm from '../SearchForm/SearchForm';

function Header({ onSearch, error, setError }) {
  return (
    <Box
      sx={{
        padding: '20px 0',
      }}
      component="header"
    >
      <SearchForm onSearch={onSearch} error={error} setError={setError} />
    </Box>
  );
}
export default Header;
