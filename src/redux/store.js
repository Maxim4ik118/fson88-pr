import { configureStore } from '@reduxjs/toolkit';
import { devicesReducer } from './devicesSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { modalReducer } from './modalSlice';

const devicesStoreConfig = {
  key: 'devicesStore',
  storage,
  whitelist: ['devices'],
  //   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    devicesStore: persistReducer(devicesStoreConfig, devicesReducer),
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
