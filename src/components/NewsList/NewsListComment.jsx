import { useState } from 'react';
import { Box, Typography, Avatar, IconButton, Button } from '@mui/material';

import { OpenInNew, ExpandMore } from '@mui/icons-material';
import moment from 'moment/moment';

function NewsListComment({ post }) {
  const [show, setShow] = useState(false);

  const maxLetters = 220;

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  function checkedText() {
    const replacedCommentText = post.comment_text.replace(/\\n/g, '<br />');

    return {
      __html: show
        ? replacedCommentText
        : replacedCommentText &&
          replacedCommentText.trim().substring(0, maxLetters) +
            (replacedCommentText.length > maxLetters ? '...' : ''),
    };
  }

  return (
    <Box
      sx={{
        padding: '16px',
        backgroundColor: 'var(--color-light)',
        borderRadius: '6px',
        height: '100%',

        '& > *:not(:last-child)': {
          marginBottom: '12px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '12px',
          }}
        >
          <Avatar {...stringAvatar(post.author)}></Avatar>

          <Typography
            sx={{
              color: '#333',

              fontWeight: 700,
            }}
            variant="h6"
          >
            {post.author}
          </Typography>
        </Box>

        {(post.url || post.story_url) && (
          <IconButton
            aria-label="open link"
            color="primary"
            href={post.url || post.story_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <OpenInNew />
          </IconButton>
        )}
      </Box>

      <Box
        sx={{
          maxWidth: '100%',
          fontSize: '18px',
          lineHeight: '1.5',

          '@media (max-width: 420px)': {
            fontSize: '16px',
          },
        }}
        dangerouslySetInnerHTML={checkedText()}
      />

      {post.comment_text.length > maxLetters && (
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: 'capitalize',

            '& .MuiButton-endIcon': {
              transform: `rotate(${show ? '180deg' : 0})`,
            },
          }}
          endIcon={<ExpandMore />}
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          {show ? 'Read less' : 'Read more'}
        </Button>
      )}

      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
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
    </Box>
  );
}
export default NewsListComment;
