import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import { name } from '../../../package.json';
import modalOpenSlice from './slice/modalOpenSlice';
import themeSlice from './slice/themeSlice';

export const persistKey = name;

const isStartupReduxLoggerMiddleware =
  import.meta.env.RICK_REDUX_LOGGER === 'true';

const persistConfig = {
  key: persistKey,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    modalOpen: modalOpenSlice,
    theme: themeSlice,
  }),
);

export const store = configureStore({
  devTools: import.meta.env.DEV,
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return middleware;
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
