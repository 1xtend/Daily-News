import NewsListStory from './NewsListStory';
import NewsListComment from './NewsListComment';

function NewsListElement({ post, sortType, replaceSymbols }) {
  if (sortType === 'comment') {
    return <NewsListComment comment={post} replaceSymbols={replaceSymbols} />;
  }

  return <NewsListStory story={post} replaceSymbols={replaceSymbols} />;
}
export default NewsListElement;
