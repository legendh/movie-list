
import axios from 'axios';

const API_KEY = 'b7a0525c';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query: string, type: string = '', year?: string, page: number = 1) => {
    const params: Record<string, string> = {
        apikey: API_KEY,
        s: query,
        type,
        page: page.toString(),
    };
    if (year) params.y = year;

    const response = await axios.get(BASE_URL, { params });
    return response.data;
};

export const fetchMovieDetails = async (imdbID: string) => {
    const response = await axios.get(BASE_URL, {
        params: { apikey: API_KEY, i: imdbID },
    });
    return response.data;
};
