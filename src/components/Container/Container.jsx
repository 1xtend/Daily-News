import styles from './Container.module.css';
import { Container } from '@mui/material';

function Container({ children }) {
  return <Container maxWidth="">{children}</Container>;
}
export default Container;
