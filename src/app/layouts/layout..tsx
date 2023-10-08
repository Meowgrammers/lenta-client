import { useAppSelector } from '@/shared'
import { Route, Routes } from 'react-router-dom'
import { AUTH_ROUTES, MAIN_ROUTES } from '../routes/routes'

export const Layout = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth)
  return (
    <Routes>
      {isAuth
        ? MAIN_ROUTES.map(({ path, main }) => (
            <Route path={path} element={main()} key={path} />
          ))
        : AUTH_ROUTES.map(({ path, main }) => (
            <Route path={path} element={main()} key={path} />
          ))}
    </Routes>
  )
}
