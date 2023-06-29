import styles from './NewsList.module.css';
import NewsListElem from '../NewsListElem/NewsListElem';

function NewsList({ stories }) {
  return (
    <ul className={styles.list}>
      {stories.map((story) => (
        <NewsListElem story={story} key={story.objectID} />
      ))}
    </ul>
  );
}

export default NewsList;
