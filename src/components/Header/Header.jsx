import styles from './Header.module.css';

import SearchForm from '../SearchForm/SearchForm';

function Header({ onSearch }) {
  return (
    <header className={styles.header}>
      <SearchForm onSearch={onSearch} />
    </header>
  );
}
export default Header;
