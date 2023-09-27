import { combineReducers } from '@reduxjs/toolkit';
import { CombinedState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { baseApi } from '../../shared';

export interface IReducer {
  baseApi: CombinedState<Record<never, never>, 'USER_INFO', 'baseApi'>;
}

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
