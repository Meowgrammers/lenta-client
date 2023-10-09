import { PAGES } from '@/shared'
import { Routes } from './routes.types'
import { Navigate } from 'react-router-dom'
import { MainPage, AuthPage, ErrorPage } from '@/pages'

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
    path: PAGES.NOTFOUND,
    main: () => <ErrorPage code={404} />,
  },
  {
    path: PAGES.SERVER_ERROR,
    main: () => <ErrorPage code={500} />,
  },
  {
    path: PAGES.AUTH,
    main: () => <AuthPage />,
  },
]

export const AUTH_ROUTES: Routes = [
  {
    path: PAGES.ALL,
    main: () => <Navigate to="/auth" replace />,
  },
  {
    path: PAGES.AUTH,
    main: () => <AuthPage />,
  },
]

export const ERROR_ROUTES: Routes = [
  {
    path: PAGES.ALL,
    main: () => <Navigate to="/404" replace />,
  },
  {
    path: PAGES.NOTFOUND,
    main: () => <ErrorPage code={404} />,
  },
  {
    path: PAGES.SERVER_ERROR,
    main: () => <ErrorPage code={500} />,
  },
]
