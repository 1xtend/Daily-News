import styles from './SearchForm.module.css';
import { useState } from 'react';
import { Box } from '@mui/material';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    // <form className={styles.form} onSubmit={(e) => onSearch(e, searchValue)}>
    //   <input
    //     type="text"
    //     required
    //     className={styles.input}
    //     onChange={(e) => setSearchValue(e.target.value)}
    //     value={searchValue}
    //   />
    //   <button type="submit" className={styles.button}>
    //     Search
    //   </button>
    // </form>

    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: 'flex',
        columnGap: '8px',
      }}
      onSubmit={onSearch}
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

      <CustomButton variant="outlined">Search</CustomButton>
    </Box>
  );
}
export default SearchForm;
