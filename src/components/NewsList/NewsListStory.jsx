import { Box, Link } from '@mui/material';
import { Favorite, Comment } from '@mui/icons-material';

import moment from 'moment/moment';

function NewsListStory({ post }) {
  return (
    <Box
      sx={{
        padding: '24px',
        backgroundColor: 'var(--color-light)',
        borderRadius: '6px',
        height: '100%',

        '& > *:not(:last-child)': {
          marginBottom: '16px',
        },
      }}
    >
      <Link
        href={post.url || post.story_url ? post.url || post.story_url : null}
        target="_blank"
        rel="noreferrer noopener"
        underline="none"
        className={`${!post.url && !post.story_url && 'disabled'}`}
        sx={{
          fontWeight: 700,
          display: 'block',
          color: 'var(--color-blue)',
          position: 'relative',
          paddingBottom: '16px',
          fontSize: '22px',
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',

          ':after': {
            content: `''`,
            width: '100%',
            height: '1px',
            position: 'absolute',
            left: 0,
            bottom: 0,
            backgroundColor: 'var(--color-grey)',
            borderRadius: '1px',
          },

          ':not(.disabled):hover': {
            color: 'var(--color-blue-dark)',
            textDecoration: 'underline',
          },

          '&.disabled': {
            color: 'var(--color-grey-dark)',
          },
        }}
      >
        {post.title || post.story_title}
      </Link>

      <Box
        sx={{
          display: 'flex',
          columnGap: '40px',
          rowGap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Favorite
            sx={{
              fill: 'var(--color-grey-dark)',
            }}
          />
          <span>{post.points ? post.points : 0}</span>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Comment
            sx={{
              fill: 'var(--color-grey-dark)',
            }}
          />
          <span>{post.num_comments ? post.num_comments : 0}</span>
        </Box>
      </Box>

      <Box
        sx={{
          fontSize: '18px',
          color: '#333',

          span: {
            fontWeight: 700,
          },
        }}
      >
        <span>Author: </span>
        {post.author}
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        {post._tags.map((tag) => (
          <Box
            key={tag}
            sx={{
              padding: '2px 8px',
              backgroundColor: 'var(--color-grey)',
              borderRadius: '12px',
              fontSize: '16px',
            }}
            component="span"
          >
            {tag}
          </Box>
        ))}
      </Box>

      <Box
        component="span"
        sx={{
          color: 'var(--color-grey-dark)',
          letterSpacing: '0.8px',
        }}
      >
        {moment(post.created_at).format('YYYY.MM.DD')}
      </Box>
    </Box>
  );
}

export default NewsListStory;
