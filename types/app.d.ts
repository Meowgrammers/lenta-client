declare global {
  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux inferring types from app
   * and use it in shared/hooks/redux.ts
   */
  type RootState = import('../src/app/store/store').RootState;
  type AppDispatch = import('../src/app/store/store').AppDispatch;
}

export {};
