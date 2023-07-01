import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, LinearProgress } from '@mui/material';

import Header from './components/Header/Header';
// import Container from './components/Container/Container';
import NewsList from './components/NewsList/NewsList';

function App() {
  const [query, setQuery] = useState('');
  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);

    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((res) => {
        setStories((prevStories) => [...prevStories, ...res.data.hits]);
      })
      .finally(() => {
        setLoading(false);
      });

    console.log(query);
  }, [query]);

  function handleSearch(e, query) {
    e.preventDefault();

    setQuery(query);
  }

  return (
    <div className="wrapper">
      {loading && (
        <LinearProgress
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
        />
      )}

      {/* <Container> */}
      {/* <Header onSearch={searchNews} />
        <NewsList stories={stories} /> */}
      {/* </Container> */}

      <Container maxWidth="md">
        <Header onSearch={handleSearch} />

        <NewsList stories={stories} />
      </Container>
    </div>
  );
}
export default App;
