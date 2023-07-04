import { useState, useEffect } from 'react';
import axios from 'axios';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, LinearProgress, Pagination } from '@mui/material';

import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1/search';

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 16,
  },

  palette: {
    text: {
      primary: '#333',
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: '16px',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
});

function App() {
  const [query, setQuery] = useState('');
  const [stories, setStories] = useState([]);

  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);

    axios
      .get(`?`, {
        params: {
          query,
          page,
        },
      })
      .then((res) => {
        setStories(res.data.hits);
        setPagesCount(res.data.nbPages);
      })
      .finally(() => {
        setLoading(false);
      });

    console.log(query);
  }, [query, page]);

  function handleSearch(e, query) {
    e.preventDefault();

    setQuery(query);
    setStories([]);
    setPage(0);
    setPagesCount(0);
  }

  function loadMore(currentPage) {
    setPage((prevPage) => prevPage + currentPage);
  }

  return (
    <ThemeProvider theme={theme}>
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

        <Container maxWidth="md">
          <Header onSearch={handleSearch} />

          <NewsList stories={stories} />

          <Box
            sx={{
              padding: '16px 0',
              margin: '0 auto',

              '& .MuiPagination-ul': {
                justifyContent: 'center',
              },
            }}
          >
            {pagesCount > 0 && <Pagination count={pagesCount} color="primary" />}
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
export default App;
