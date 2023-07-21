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
        columnGap: '8px',
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
          '.MuiFormHelperText-root': {
            position: 'absolute',
            bottom: '-22px',
            left: 0,
          },
        }}
      />

      <CustomButton variant="outlined" type="submit">
        Search
      </CustomButton>
    </Box>
  );
}
export default SearchForm;
