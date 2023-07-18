import NewsListElem from '../NewsListElem/NewsListElem';

import { Grid } from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2';

function NewsList({ stories }) {
  return (
    <Grid container spacing={2}>
      {stories.map((story) => (
        <Grid key={story.objectID} item xs={12} md={6}>
          <NewsListElem story={story} />
        </Grid>
      ))}
    </Grid>
  );
}

export default NewsList;
