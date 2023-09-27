import { PAGES } from '@/shared'
import { Routes } from './routes.types'
import { Navigate } from 'react-router-dom'
import { MainPage } from '@/pages'

export const MAIN_ROUTES: Routes = [
  {
    path: PAGES.ALL,
    main: () => <Navigate to="/" replace />,
  },
  {
    path: PAGES.MAIN,
    main: () => <MainPage />,
  },
]
