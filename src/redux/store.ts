import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {api} from './API';
import fansReducer from './slices/fansSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    fans: fansReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
