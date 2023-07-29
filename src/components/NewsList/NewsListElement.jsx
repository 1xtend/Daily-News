import NewsListStory from './NewsListStory';
import NewsListComment from './NewsListComment';

function NewsListElement({ post, sortType, replaceSymbols }) {
  if (sortType === 'comment') {
    return <NewsListComment post={post} replaceSymbols={replaceSymbols} />;
  }

  return <NewsListStory post={post} replaceSymbols={replaceSymbols} />;
}
export default NewsListElement;
