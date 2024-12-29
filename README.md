# Movie Library Application

This project is a single-page application (SPA) for browsing movies. It uses the OMDb API to fetch movie details and provides users with a modern and interactive UI inspired by Netflix.

## Features

1. **Movie Search**:
   - Users can search for movies by title.
   - Filter results by release year and type (movie, series, or episode).

2. **View Modes**:
   - Toggle between **Grid View** and **Table View** for movie results.
   - Elegant animations and responsiveness.

3. **Movie Details**:
   - Detailed page with movie poster, runtime, genre, director, cast, IMDb rating, and plot.
   - Fallback for missing images.

4. **Pagination**:
   - Paginate through movie results.

5. **Skeleton Loading**:
   - Skeleton loaders for both Grid and Table modes while fetching data.

6. **Reusable Components**:
   - Modular design with components for the header, grid, table, and movie details.

## Technology Stack

- **Frontend**: React, Redux Toolkit, TypeScript
- **UI Framework**: Material-UI (MUI)
- **API**: [OMDb API](http://www.omdbapi.com/)
- **State Management**: Redux Toolkit
- **Styling**: Material-UI with custom theme.

## Components

### 1. `Header`
- Handles the `Search`, `Year`, and `Type` filters.
- Toggle button for switching between Grid and Table views.

### 2. `MovieGrid`
- Displays movies in a grid format with cards.
- Each card shows the movie title, year, type, and poster.
- Fallback for missing images.

### 3. `MovieTable`
- Displays movies in a table format using MUI `DataGrid`.
- Includes a skeleton loader for loading state.

### 4. `MovieDetails`
- Shows detailed information for a selected movie.
- Includes a back button to return to the main list.

### 5. `LoadingScreen`
- Full-page loading indicator.

## Folder Structure
```
src/
├── components/
│   ├── Header.tsx            # Header with search and filters
│   ├── Header.scss           # Styles for Header component
│   ├── LoadingScreen.tsx     # Loading screen for async content
│   ├── LoadingScreen.scss    # Styles for LoadingScreen component
│   ├── MovieCard.tsx         # Individual movie card
│   ├── MovieCard.scss        # Styles for MovieCard component
│   ├── MovieGrid.tsx         # Grid view component
│   ├── MovieGrid.scss        # Styles for MovieGrid component
│   ├── MovieTable.tsx        # Table view component
│   └── MovieTable.scss       # Styles for MovieTable component
├── pages/
│   ├── MovieList.tsx         # Main page showing the movie list
│   ├── MovieList.scss        # Styles for MovieList page
│   ├── MovieDetails.tsx      # Detailed movie information page
│   └── MovieDetails.scss     # Styles for MovieDetails page
├── store/
│   ├── index.ts              # Redux store configuration
│   ├── movieSlice.ts         # Redux slice for managing movie data
│   └── viewModeSlice.ts      # Redux slice for managing grid/list view mode
```

## How to Run the Application

Follow these steps to set up and run the Movie Library Application:

### 1. Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v14 or higher recommended)
- **npm** (Node Package Manager)

To check if Node.js and npm are installed, run:
node -v
npm -v

If not installed, download and install from [Node.js Official Website](https://nodejs.org/).

### 2. Clone the Repository

Clone the project repository from GitHub:
git clone https://github.com/legendh/movie-list

Navigate into the project directory:
cd <project-folder>

### 3. Install Dependencies

Install all the required dependencies using `npm`:
npm install

### 5. Start the Development Server

Run the application in development mode:
npm run dev

The application will be accessible at:

http://localhost:5173/

### 6. Build for Production

To build the application for production, run:
npm run build

The production-ready files will be located in the `build/` directory.