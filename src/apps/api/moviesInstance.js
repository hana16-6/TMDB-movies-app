import axios from 'axios';

export const MoviesInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})