import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies as fetchMoviesAPI } from '../api/omdbApi';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ search, type, year, page }: { search: string; type: string; year: string; page: number }) => {
    const response = await fetchMoviesAPI(search, type, year, page);
    return response.Search || [];
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;
