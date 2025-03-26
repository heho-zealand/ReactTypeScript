import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from './apis/moviesApi';
import { searchMovieReducer, changeSearchTerm } from './searchMovieSlice';


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //'movies' - dette er en mere sikker måde, ungår "typo's"
    searchMovie: searchMovieReducer
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware);
  }
});
console.log(store.getState());
console.log(searchMovieReducer);
console.log(changeSearchTerm);
setupListeners(store.dispatch);


export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery } from './apis/moviesApi';
export {changeSearchTerm};
export type RootState = ReturnType<typeof store.getState>


