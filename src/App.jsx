import { useState, useEffect } from 'react';
import axios from 'axios';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, LinearProgress, Pagination } from '@mui/material';

import Header from './components/Header';
import NewsList from './components/NewsList';

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

  // useEffect(() => {
  //   setPage(1);
  // }, [sortType, sortBy]);

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
            error={error}
            sortType={sortType}
            onSortTypeChange={handleSortType}
            sortBy={sortBy}
            onSortByChange={handleSortBy}
          />

          {!error.isError && posts.length > 0 && <NewsList posts={posts} sortType={sortType} />}

          {/* <NewsList posts={posts} sortType={sortType} /> */}

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
