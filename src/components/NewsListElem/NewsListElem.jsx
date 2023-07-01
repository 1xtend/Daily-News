import styles from './NewsListElem.module.css';

import { Box } from '@mui/material';

function NewsListElem({ story }) {
  return (
    // <div className={styles.div}>
    //   <h2>
    //     <a href={story.url} target="_blank" rel="noopener noreferrer">
    //       {story.title}
    //     </a>
    //   </h2>

    //   <span>{story.author}</span>
    // </div>

    <Box
      sx={{
        backgroundColor: 'red',
      }}
    ></Box>
  );
}

export default NewsListElem;
