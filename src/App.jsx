import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '@mui/material';

import Header from './components/Header/Header';
// import Container from './components/Container/Container';
import NewsList from './components/NewsList/NewsList';

function App() {
  const [query, setQuery] = useState('');
  const [stories, setStories] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`).then((res) => {
      setStories((prevStories) => [...prevStories, ...res.data.hits]);
    });

    console.log(query);
  }, [query]);

  function handleSearch(e, query) {
    e.preventDefault();

    setQuery(query);
  }

  return (
    <div className="wrapper">
      {/* <Container> */}
      {/* <Header onSearch={searchNews} />
        <NewsList stories={stories} /> */}
      {/* </Container> */}

      <Container maxWidth="md">
        <Header onSearch={handleSearch} />
      </Container>
    </div>
  );
}
export default App;
