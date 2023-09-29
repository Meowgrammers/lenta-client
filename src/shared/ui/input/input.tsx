import { FC } from 'react'
import { TextInput } from '@tremor/react'
import { InputProps } from './input.types'

export const Input: FC<InputProps> = ({ placeholder, type, errorMessage }) => {
  return (
    <TextInput
      className="mb-4"
      type={type}
      placeholder={placeholder}
      errorMessage={errorMessage}
    />
  )
}
