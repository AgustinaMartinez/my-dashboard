import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import pokemonsReducer from './pokemon/pokemonSlice'
import { useDispatch, useSelector } from 'react-redux'
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';
import type { Middleware } from 'redux';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware as Middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
