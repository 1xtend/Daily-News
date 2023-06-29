import styles from './NewsListElem.module.css';

function NewsListElem({ story }) {
  return (
    <li className={styles.li}>
      <h2>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.title}
        </a>
      </h2>

      <span>{story.author}</span>
    </li>
  );
}

export default NewsListElem;
