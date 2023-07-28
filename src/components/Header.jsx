import { Box } from '@mui/material';

import SearchForm from './SearchForm';
import SearchSelects from './SearchSelects';

function Header({ onSearch, sortType, onSortTypeChange, sortBy, onSortByChange }) {
  return (
    <Box
      sx={{
        padding: '20px 0',

        '& > *:not(:last-child)': {
          marginBottom: '32px',
        },
      }}
      component="header"
    >
      <SearchForm onSearch={onSearch} />
      <SearchSelects
        sortType={sortType}
        onSortTypeChange={onSortTypeChange}
        sortBy={sortBy}
        onSortByChange={onSortByChange}
      />
    </Box>
  );
}
export default Header;
