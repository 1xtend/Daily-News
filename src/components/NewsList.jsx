import NewsListStory from './NewsListStory';
import NewsListComment from './NewsListComment';

import { Grid } from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2';

function NewsList({ posts, sortType }) {
  return (
    <Grid container spacing={2}>
      {sortType === 'story' &&
        posts.map((story) => (
          <Grid key={story.objectID} item xs={12} md={6}>
            <NewsListStory story={story} />
          </Grid>
        ))}

      {sortType === 'comment' &&
        posts.map((comment) => (
          <Grid key={comment.objectID} item md={12}>
            <NewsListComment comment={comment} />
          </Grid>
        ))}
    </Grid>
  );
}

export default NewsList;
