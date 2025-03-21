import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie, MovieResponse, MovieResults } from "../../types/movie";

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query<Movie[], void>({
        query: () => {
          return {
            //url: 'discover/movie',
            url: 'movie/popular',
            params: {
              sort_by: 'popularity.desc',
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
        transformResponse: (response : MovieResults) => {
          return response.results.map((movie) => {
            return{
              id: movie.id, 
              adult: movie.adult, 
              poster_path: movie.poster_path, 
              overview: movie.overview, 
              release_date: movie.release_date, 
              title: movie.title, 
              genres: movie.genre_ids, 
              vote_average: movie.vote_average} as Movie;});
        },
      }),

      fetchHighestRatedMovies: builder.query<Movie[], void>({
        query: () => {
          return {
            //url: 'discover/movie',
            url: 'movie/top_rated',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
        transformResponse: (response : MovieResults) => {
          return response.results.map((movie) => {
            return{
              id: movie.id, 
              adult: movie.adult, 
              poster_path: movie.poster_path, 
              overview: movie.overview, 
              release_date: movie.release_date, 
              title: movie.title, 
              genres: movie.genre_ids, 
              vote_average: movie.vote_average} as Movie;});
        },
      }),    
      fetchSearchMovie: builder.query<Movie[], string>({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
        transformResponse: (response : MovieResults) => {
          return response.results.map((movie) => {
            return{
              id: movie.id, 
              adult: movie.adult, 
              poster_path: movie.poster_path, 
              overview: movie.overview, 
              release_date: movie.release_date, 
              title: movie.title, 
              genres: movie.genre_ids, 
              vote_average: movie.vote_average} as Movie;});
        },
      }),    
    };
  },
});

export const {useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery} = moviesApi;
export { moviesApi };
