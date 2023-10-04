import { FC, useEffect, useRef } from 'react'

interface AllCheckboxProps {
  checked: boolean
  indeterminate: boolean
  onChange: () => void
}

export const AllCheckbox: FC<AllCheckboxProps> = ({
  checked,
  indeterminate,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
      inputRef.current.checked = checked
    }
  }, [checked, indeterminate])

  return (
    <input
      type="checkbox"
      ref={inputRef}
      checked={checked}
      onChange={onChange}
      className="h-4 w-4"
    />
  )
}
