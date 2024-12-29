import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './MovieTable.scss';

interface MovieTableProps {
  movies: {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
  }[];
  loading: boolean;
}

const MovieTable: React.FC<MovieTableProps> = ({ movies, loading }) => {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: 'Title', headerName: 'Title', flex: 1 },
    { field: 'Year', headerName: 'Year', flex: 1 },
    { field: 'Type', headerName: 'Type', flex: 1 },
  ];

  return (
    <Box className="movie-table-container">
      {loading ? (
        <DataGrid
          rows={Array.from({ length: 10 }).map((_, index) => ({
            id: index,
            Title: <Skeleton variant="text" width="80%" className="skeleton-cell" />,
            Year: <Skeleton variant="text" width="50%" className="skeleton-cell" />,
            Type: <Skeleton variant="text" width="60%" className="skeleton-cell" />,
          }))}
          columns={columns.map((col) => ({
            ...col,
            renderCell: (params) => params.value,
          }))}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          className="movie-data-grid"
        />
      ) : (
        <DataGrid
          rows={movies.map((movie) => ({
            id: movie.imdbID,
            Title: movie.Title,
            Year: movie.Year,
            Type: movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1),
          }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          className="movie-data-grid"
          onRowClick={(params) => navigate(`/movie/${params.id}`)}
        />
      )}
    </Box>
  );
};

export default MovieTable;