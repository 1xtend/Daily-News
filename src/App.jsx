import { useState, useEffect } from 'react';
import axios from 'axios';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, LinearProgress, Pagination } from '@mui/material';

import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';

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

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

function App() {
  const [query, setQuery] = useState('');
  const [stories, setStories] = useState([]);

  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    text: '',
    isError: false,
  });

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);
    setError({
      text: '',
      isError: false,
    });

    axios
      .get('/search', {
        params: {
          query,
          page: page - 1,
          tags: 'story',
        },
      })
      .then((res) => {
        if (res.data.nbHits <= 0) {
          setError({
            text: 'No posts',
            isError: true,
          });
        } else {
          setStories(res.data.hits);
          setPagesCount(res.data.nbPages);
        }
      })
      .catch((err) => {
        setError({
          text: err.message,
          isError: true,
        });
      })
      .finally(() => {
        setLoading(false);

        window.scrollTo({
          behavior: 'smooth',
          top: 0,
        });
      });
  }, [query, page]);

  function handleSearch(e, query) {
    e.preventDefault();

    setQuery(query);
    setStories([]);
    setPage(1);
    setPagesCount(0);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100%',
          overflow: 'hidden',
        }}
      >
        {!error.isError && loading && (
          <LinearProgress
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
            }}
          />
        )}

        <Container maxWidth="md">
          <Header onSearch={handleSearch} error={error} setError={setError} />

          {!error.isError && stories.length > 0 && <NewsList stories={stories} />}

          {!error.isError && pagesCount > 1 && (
            <Box
              sx={{
                padding: '16px 0',
                margin: '0 auto',

                '& .MuiPagination-ul': {
                  justifyContent: 'center',
                },
              }}
            >
              <Pagination
                count={pagesCount}
                page={page}
                color="primary"
                onChange={(e, value) => setPage(value)}
                disabled={loading}
              />
            </Box>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default App;
