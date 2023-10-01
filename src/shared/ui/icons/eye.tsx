import { FC } from 'react'

import { IconType } from './type'

export const EyeIcon: FC<IconType> = ({ className, fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="eye_icon">
        <path
          id="Vector"
          d="M15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12ZM24 11.551C24 11.551 19.748 20 12.015 20C4.835 20 0 11.551 0 11.551C0 11.551 4.446 4 12.015 4C19.709 4 24 11.551 24 11.551ZM17 12C17 9.243 14.757 7 12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12Z"
          fill={fill}
          fillOpacity="0.86"
        />
      </g>
    </svg>
  )
}
