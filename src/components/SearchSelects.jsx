import { Select, Box, FormControl, InputLabel, MenuItem } from '@mui/material';

function SearchSelects({ sortType, onSortTypeChange, sortBy, onSortByChange }) {
  return (
    <Box
      sx={{
        display: 'flex',
        columnGap: '20px',
        rowGap: '12px',
        flexWrap: 'wrap',
      }}
    >
      <FormControl size="small">
        <InputLabel id="sortTypeLabel">Type</InputLabel>

        <Select
          labelId="sortTypeLabel"
          label="Type"
          value={sortType}
          onChange={(e) => onSortTypeChange(e.target.value)}
        >
          <MenuItem value="story">Stories</MenuItem>
          <MenuItem value="comment">Comments</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel id="sortByLabel">Sort By</InputLabel>

        <Select
          labelId="sortByLabel"
          label="Sort By"
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value)}
        >
          <MenuItem value="search">Popularity</MenuItem>
          <MenuItem value="search_by_date">Date</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default SearchSelects;
