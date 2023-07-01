import styles from './SearchForm.module.css';
import { useState } from 'react';
import { Box } from '@mui/material';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';

function SearchForm({ onSearch }) {
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
      />

      <CustomButton variant="outlined" type="submit">
        Search
      </CustomButton>
    </Box>
  );
}
export default SearchForm;
