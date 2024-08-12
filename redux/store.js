import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import user from './slices/user';
export const store = configureStore({
  reducer: {
    user,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these paths in the state
  //       ignoredPaths: ['user.stsTokenManager', 'user.providerData'],
  //       // ignoredPaths: ['user', 'user.stsTokenManager', 'user.providerData'],
  //       // Ignore these action paths
  //       ignoredActionPaths: ['payload.stsTokenManager', 'payload.providerData'],
  //     },
  //   }),
});
