import { useState } from 'react';
import { Box } from '@mui/material';
import Input from './Input';
import CustomButton from './CustomButton';

function SearchForm({ onSearch, error }) {
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
      <Input
        variant="outlined"
        label="Search"
        fullWidth
        type="search"
        size="small"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        helperText={error}
        error={!!error}
        sx={{
          flex: '1 1 80%',

          '.MuiFormHelperText-root': {
            position: 'absolute',
            bottom: '-22px',
            left: 0,
          },
        }}
      />

      <CustomButton
        variant="outlined"
        type="submit"
        sx={{
          flex: '1 0 auto',
        }}
      >
        Search
      </CustomButton>
    </Box>
  );
}
export default SearchForm;
