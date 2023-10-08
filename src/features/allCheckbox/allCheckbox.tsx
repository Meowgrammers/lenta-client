import { FC, useEffect, useRef, useState } from 'react'

interface AllCheckboxProps {
  checked?: boolean | null
  indeterminate?: boolean
  onChange?: () => void
}

export const AllCheckbox: FC<AllCheckboxProps> = ({
  checked,
  indeterminate,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean | null>(checked)

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setIsChecked(checked)
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
      inputRef.current.checked = isChecked !== null ? isChecked : false
    }
  }, [checked, indeterminate, isChecked])

  return (
    <input
      type="checkbox"
      ref={inputRef}
      checked={isChecked !== null ? isChecked : false}
      onChange={onChange}
      className="h-4 w-4"
    />
  )
}
