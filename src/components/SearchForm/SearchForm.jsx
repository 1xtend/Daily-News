import styles from './SearchForm.module.css';
import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className={styles.form} onSubmit={(e) => onSearch(e, searchValue)}>
      <input
        type="text"
        required
        className={styles.input}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
export default SearchForm;
