import { useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';

function NewsListComment({ comment }) {
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

  return (
    <Box
      sx={{
        padding: '16px',
        backgroundColor: 'var(--color-light)',
        borderRadius: '6px',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <Avatar {...stringAvatar(comment.author)}></Avatar>

        <Typography
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          variant="body1"
          onClick={(e) => setShow((prevShow) => !prevShow)}
        >
          {show
            ? comment.comment_text
            : comment.comment_text &&
              comment.comment_text.trim().substring(0, maxLetters) +
                (comment.comment_text.length > maxLetters ? '...' : '')}
        </Typography>
      </Box>
    </Box>
  );
}
export default NewsListComment;
