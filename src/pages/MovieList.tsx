import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchMovies } from '../store/movieSlice';
import { Box, Pagination } from '@mui/material';
import Header from '../components/Header';
import MovieGrid from '../components/MovieGrid';
import MovieTable from '../components/MovieTable';
import { toggleViewMode } from '../store/viewModeSlice';
import './MovieList.scss';

const MovieList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isGridMode = useSelector((state: RootState) => state.viewMode.isGridMode);

  const { movies, loading } = useSelector((state: RootState) => state.movies);

  const [search, setSearch] = useState('Pokemon');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);  

  useEffect(() => {
    dispatch(fetchMovies({ search, type, year, page }));
  }, [dispatch, search, type, year, page]);

  return (
    <Box className="movie-list">
      <Header
        search={search}
        setSearch={setSearch}
        year={year}
        setYear={setYear}
        type={type}
        setType={setType}                
      />

      {isGridMode ? (
        <MovieGrid movies={movies} />
      ) : (
        <MovieTable movies={movies} loading={loading} />
      )}

      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => setPage(value)}
        className="pagination"
      />
    </Box>
  );
};

export default MovieList;