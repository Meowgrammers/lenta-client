import { FC } from 'react'

type SwitcherProps = {
  textOn: string
  textOff: string
  checked: boolean
  handleCheck: () => void
}

const Switcher: FC<SwitcherProps> = ({
  textOn,
  textOff,
  checked,
  handleCheck,
}) => {
  return (
    <label className="relative inline-flex min-w-fit cursor-pointer">
      <span
        className={`mr-3 text-base/[20px] font-semibold ${
          checked ? 'text-[#4D4D4D]' : 'text-[#003d96]'
        }`}
      >
        {textOn}
      </span>
      <input
        checked={checked}
        onChange={handleCheck}
        type="checkbox"
        value=""
        className="peer sr-only"
      />
      <div className="relative h-6 w-11 rounded-full  bg-[#003d96] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#003d96] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
      <span
        className={`ml-3 text-base/[20px]   font-semibold ${
          checked ? 'text-[#003d96]' : 'text-[#4D4D4D]'
        }`}
      >
        {textOff}
      </span>
    </label>
  )
}

export { Switcher }
