import { FC } from 'react'

type SwitcherProps = {
  text: string
  checked: boolean
  handleCheck: () => void
}

const Switcher: FC<SwitcherProps> = ({ text, checked, handleCheck }) => {
  return (
    <label className="relative inline-flex min-w-fit cursor-pointer">
      <input
        checked={checked}
        onChange={handleCheck}
        type="checkbox"
        value=""
        className="peer sr-only"
      />
      <div className="h-6 w-11 rounded-full  bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#003d96] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 ">{text}</span>
    </label>
  )
}

export { Switcher }
