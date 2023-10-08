import { FC, useEffect, useRef } from 'react'

import { status } from '@/shared'

interface CheckboxProps {
  indeterminate: boolean
  name: string
  checked: boolean
  id: string
  className: string
  compute: (checkboxId: string, status: number) => void
}

export const Checkbox: FC<CheckboxProps> = ({
  indeterminate,
  checked,
  id,
  compute,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
      inputRef.current.checked = checked
    }
  }, [indeterminate, checked])

  return (
    <input
      type="checkbox"
      ref={inputRef}
      onChange={() => {
        const newStatus = inputRef.current?.checked
          ? status.checked
          : status.unchecked
        compute(id, newStatus)
      }}
      className={className}
    />
  )
}
