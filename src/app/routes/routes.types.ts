import { ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'

export type Route = RouteObject & {
  path: string
  exact?: boolean
  main: () => ReactNode
}

export type Routes = Route[]
