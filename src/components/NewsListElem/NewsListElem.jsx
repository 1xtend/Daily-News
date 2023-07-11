import { Box, Typography, Link } from '@mui/material';
import { Favorite, Comment } from '@mui/icons-material';

function NewsListElem({ story }) {
  return (
    <Box
      sx={{
        padding: '24px',
        backgroundColor: 'var(--color-light)',
        borderRadius: '6px',
      }}
    >
      <Link
        href={story.url}
        target="_blank"
        rel="noreferrer noopener"
        underline="none"
        sx={{
          fontWeight: 700,
          display: 'block',
          color: 'var(--color-blue)',
          position: 'relative',
          paddingBottom: '16px',
          fontSize: '22px',

          '&:not(:last-child)': {
            marginBottom: '16px',
          },

          '&:after': {
            content: `''`,
            width: '100%',
            height: '1px',
            position: 'absolute',
            left: 0,
            bottom: 0,
            backgroundColor: 'var(--color-grey)',
            borderRadius: '1px',
          },

          '&:hover': {
            color: 'var(--color-blue-dark)',
            textDecoration: 'underline',
          },
        }}
      >
        {story.title || story.story_title}
      </Link>

      {(story.points || story.num_comments) && (
        <Box
          sx={{
            display: 'flex',
            columnGap: '40px',
            rowGap: '12px',
            flexWrap: 'wrap',

            '&:not(:last-child)': {
              marginBottom: '16px',
            },
          }}
        >
          {story.points && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Favorite
                sx={{
                  fill: 'var(--color-red)',
                }}
              />
              <span>{story.points}</span>
            </Box>
          )}

          {story.num_comments && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Comment
                sx={{
                  fill: 'var(--color-primary)',
                }}
              />
              <span>{story.num_comments}</span>
            </Box>
          )}
        </Box>
      )}

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
        {story.author}
      </Box>
    </Box>
  );
}

export default NewsListElem;
