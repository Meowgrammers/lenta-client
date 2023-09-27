import { PAGES } from '@/shared';
import { Routes } from './routes.types';
import { Navigate } from 'react-router-dom';

export const MAIN_ROUTES: Routes = [
  {
    path: PAGES.ALL,
    main: () => <Navigate to="/" replace />,
  },
];
