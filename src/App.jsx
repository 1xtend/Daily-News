import { useState, useEffect } from 'react';
import axios from 'axios';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, LinearProgress, Pagination, Alert, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

import Header from './components/Header';
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

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

function App() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);

  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const [sortType, setSortType] = useState('story');
  const [sortBy, setSortBy] = useState('search');

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);
    setError('');

    axios
      .get(`/${sortBy}`, {
        params: {
          query,
          page: page - 1,
          tags: sortType,
        },
      })
      .then((res) => {
        if (res.data.nbHits <= 0) {
          setError('No posts');
        } else {
          setPosts(res.data.hits);
          setPagesCount(res.data.nbPages);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);

        window.scrollTo({
          behavior: 'smooth',
          top: 0,
        });
      });
  }, [query, page, sortType, sortBy]);

  function handleSearch(e, query) {
    e.preventDefault();

    setQuery(query.trim());
    setPosts([]);
    setPage(1);
    setPagesCount(0);
  }

  function handleSortType(value) {
    setSortType(value);
  }

  function handleSortBy(value) {
    setSortBy(value);
  }

  function replaceSymbols(text) {
    text = text.replace(/&quot;/gi, '"');
    text = text.replace(/&#x27;/gi, "'");
    text = text.replace(/<i>/gi, '');
    text = text.replace(/<\/i>/gi, '');

    return text;
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
          <Header
            onSearch={handleSearch}
            sortType={sortType}
            onSortTypeChange={handleSortType}
            sortBy={sortBy}
            onSortByChange={handleSortBy}
            loading={loading}
          />

          {!error.isError && posts.length > 0 && (
            <NewsList posts={posts} sortType={sortType} replaceSymbols={replaceSymbols} />
          )}

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

          {error && (
            <Alert
              severity="error"
              variant="filled"
              sx={{
                position: 'fixed',
                bottom: '15px',
                left: '15px',
              }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setError(false)}
                >
                  <Close fontSize="inherit" />
                </IconButton>
              }
            >
              {error}
            </Alert>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default App;
