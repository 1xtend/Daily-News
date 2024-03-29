import NewsListElement from './NewsListElement';
import { Grid } from '@mui/material';

function NewsList({ posts, sortType }) {
  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid key={post.objectID} item xs={12} md={sortType === 'story' && 6}>
          <NewsListElement post={post} sortType={sortType} />
        </Grid>
      ))}
    </Grid>
  );
}

export default NewsList;
