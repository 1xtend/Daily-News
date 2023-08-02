import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

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

      <Button
        variant="outlined"
        type="submit"
        sx={{
          flex: '1 0 auto',
        }}
        disabled={loading}
      >
        Search
      </Button>
    </Box>
  );
}
export default SearchForm;
