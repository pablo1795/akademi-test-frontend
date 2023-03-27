import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { employeesSlice } from './slices/employees/employeesSlice';
import { employeeApi } from './api/employeeApi';

import { assetsSlice } from './slices/assets/assetsSlice';
import { assetApi } from './api/assetApi';

export const store = configureStore({
  reducer: {
    employee: employeesSlice.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,

    asset: assetsSlice.reducer,
    [assetApi.reducerPath]: assetApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware, assetApi.middleware),
});

setupListeners(store.dispatch);
