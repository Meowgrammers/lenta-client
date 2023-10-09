import { FC } from 'react'

import { ErrorBlock } from '@/widgets'

export interface ErrorPageProps {
  code: number
}

export const ErrorPage: FC<ErrorPageProps> = ({ code }) => {
  return <ErrorBlock code={code} />
}
