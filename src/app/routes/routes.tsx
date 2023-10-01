import { PAGES } from '@/shared'
import { Routes } from './routes.types'
import { Navigate } from 'react-router-dom'
import { MainPage, AuthPage } from '@/pages'

export const MAIN_ROUTES: Routes = [
  {
    path: PAGES.ALL,
    main: () => <Navigate to="/" replace />,
  },
  {
    path: PAGES.MAIN,
    main: () => <MainPage />,
  },
  {
    path: PAGES.AUTH,
    main: () => <AuthPage />,
  },
]
