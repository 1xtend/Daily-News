import styles from './NewsList.module.css';
import NewsListElem from '../NewsListElem/NewsListElem';

import { Grid } from '@mui/material';

function NewsList({ stories }) {
  return (
    // <ul className={styles.list}>
    //   {stories.map((story) => (
    //     <NewsListElem story={story} key={story.objectID} />
    //   ))}
    // </ul>

    <Grid container spacing={2}>
      {stories.map((story) => (
        <Grid key={story.objectID} xs={6} item>
          <NewsListElem story={story} />
        </Grid>
      ))}
    </Grid>
  );
}

export default NewsList;
