import React from 'react';
import { Box, TextField, Select, MenuItem, Typography, IconButton } from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { toggleViewMode } from '../store/viewModeSlice';
import './Header.scss';

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
  year: string;
  setYear: (value: string) => void;
  type: string;
  setType: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  search,
  setSearch,
  year,
  setYear,
  type,
  setType,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const isGridMode = useSelector((state: RootState) => state.viewMode.isGridMode);

  const handleYearChange = (newValue: dayjs.Dayjs | null) => {
    if (newValue) {
      setYear(newValue.format('YYYY'));
    }
  };

  const toggleMode = () => {
    dispatch(toggleViewMode());
  };

  return (
    <Box className="header-container">
      <Typography variant="h4" className="header-title">
        Movie Library
      </Typography>

      <Box className="header-controls">
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="header-search"
        />
        <DatePicker
          views={['year']}
          label="Year"
          value={year ? dayjs(year, 'YYYY') : null}
          onChange={handleYearChange}
          minDate={dayjs('1900', 'YYYY')}
          maxDate={dayjs().add(10, 'year')}
          slotProps={{
            textField: {
              className: 'header-year',
            },
          }}
        />
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          displayEmpty
          className="header-select"
        >
          <MenuItem value="">
            <span>All</span>
          </MenuItem>
          <MenuItem value="movie">
            <span>Movies</span>
          </MenuItem>
          <MenuItem value="series">
            <span>TV Series</span>
          </MenuItem>
        </Select>
        <IconButton onClick={toggleMode} className="header-toggle">
          {isGridMode ? <ViewListIcon /> : <ViewModuleIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
