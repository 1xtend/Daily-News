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

      {/* <Grid item md={12}>
        <NewsListComment comment="The other commenters are being too nice in their replies.You&#x27;re full of shit. JustFabis a shoe of the month club masquerading as a normal online shoe store. The VIP MembershipProgram is the essence of JustFab&#x27;s business model and yet it&#x27;s missing entirelyfrom the home page of their site. It looks like any other shoe store. And yet you think" />
      </Grid> */}
    </Grid>
  );
}

export default NewsList;
