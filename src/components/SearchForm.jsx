import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import CustomButton from './CustomButton';

function SearchForm({ onSearch, loading }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
      }}
      onSubmit={(e) => onSearch(e, searchValue)}
    >
      <TextField
        variant="outlined"
        label="Search"
        fullWidth
        type="search"
        size="small"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        sx={{
          flex: '1 1 80%',
        }}
        disabled={loading}
      />

      <CustomButton
        variant="outlined"
        type="submit"
        sx={{
          flex: '1 0 auto',
        }}
        disabled={loading}
      >
        Search
      </CustomButton>
    </Box>
  );
}
export default SearchForm;
