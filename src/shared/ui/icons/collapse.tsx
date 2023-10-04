import { FC } from 'react'

import { IconType } from './type'

export const CollapseIcon: FC<IconType> = ({ className, fill }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="chevron">
        <path
          id="Vector"
          d="M10 12.8337L5 7.83366L6.16667 6.66699L10 10.5003L13.8333 6.66699L15 7.83366L10 12.8337Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}
