import NewsListElem from '../NewsListElem/NewsListElem';

import { Grid } from '@mui/material';

function NewsList({ stories }) {
  return (
    <Grid container spacing={2}>
      {stories.map(
        (story) => (
          // story.url && (
          <Grid key={story.objectID} item xs={6}>
            <NewsListElem story={story} />
          </Grid>
        )
        // )
      )}
    </Grid>
  );
}

export default NewsList;
