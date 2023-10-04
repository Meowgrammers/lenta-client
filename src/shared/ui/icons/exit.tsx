import { FC } from 'react'

import { IconType } from './type'

export const ExitIcon: FC<IconType> = ({ className, fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="exit_to_app">
        <path
          id="Vector"
          d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V15H5V19H19V5H5V9H3V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM10.5 17L9.1 15.55L11.65 13H3V11H11.65L9.1 8.45L10.5 7L15.5 12L10.5 17Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}