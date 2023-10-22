import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MoviesInstance } from "../../apps/api/moviesInstance";

export const getMovies = createAsyncThunk('getData', async (payload) => {
    return await MoviesInstance.request({
        url: `${payload.type}/${payload.id}?api_key=d888336699b3befde387f3e48acb3c56`,

    }).then(res => {
        return res.data
    })
})
const moviesSlice = createSlice({
    initialState: {
        loading: false,
        error: '',
        movies: [],
        moviesInfo: {}
    },
    name: 'movies',
    /* The `extraReducers` field in the `moviesSlice` object is used to define how the state should be
    updated based on the different actions dispatched by the `getMovies` async thunk. */
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.loading = true

        },
        [getMovies.fulfilled]: (state, action) => {
            state.loading = false
            state.movies = action.payload.results
            state.moviesInfo = { total_pages: action.payload.total_pages }

        },
        [getMovies.error]: (state) => {
            state.loading = false
            state.error = 'somthing went wrong 😒'

        },
    }
})
export default moviesSlice.reducer