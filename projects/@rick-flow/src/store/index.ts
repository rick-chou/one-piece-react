import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import flowchartSlice from './slice/flowchartSlice';
import modalOpenSlice from './slice/modalOpenSlice';

export const persistKey = (await import('../../package.json')).name;

const persistConfig = {
  key: persistKey,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    flowcharts: flowchartSlice,
    modalOpen: modalOpenSlice,
  }),
);

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
