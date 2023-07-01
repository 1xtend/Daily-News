import styles from './SearchForm.module.css';
import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import Input from '../Input/Input';

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
        columnGap: '12px',
      }}
      onSubmit={onSearch}
    >
      <Input variant="outlined" label="Search" fullWidth type="search" />
      <Button variant="contained">Search</Button>
    </Box>
  );
}
export default SearchForm;
