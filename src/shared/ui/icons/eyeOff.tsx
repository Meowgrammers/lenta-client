import { FC } from 'react'

import { IconType } from './type'

export const EyeIconOff: FC<IconType> = ({ className, fill }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.4168 11.0835L12.2085 9.87516C12.3335 9.22239 12.146 8.61127 11.646 8.04183C11.146 7.47238 10.5002 7.25016 9.7085 7.37516L8.50016 6.16683C8.73627 6.05572 8.97586 5.97239 9.21891 5.91683C9.46197 5.86127 9.72238 5.8335 10.0002 5.8335C11.0418 5.8335 11.9272 6.19808 12.6564 6.92725C13.3856 7.65641 13.7502 8.54183 13.7502 9.5835C13.7502 9.86127 13.7224 10.1217 13.6668 10.3647C13.6113 10.6078 13.5279 10.8474 13.4168 11.0835ZM16.0835 13.7085L14.8752 12.5418C15.4029 12.1391 15.8717 11.6981 16.2814 11.2189C16.6911 10.7397 17.0418 10.1946 17.3335 9.5835C16.6391 8.18072 15.6425 7.06614 14.3439 6.23975C13.0453 5.41336 11.5974 5.00016 10.0002 5.00016C9.59738 5.00016 9.20155 5.02794 8.81266 5.0835C8.42377 5.13905 8.04183 5.22239 7.66683 5.3335L6.37516 4.04183C6.94461 3.80572 7.52794 3.62864 8.12516 3.51058C8.72238 3.39252 9.34738 3.3335 10.0002 3.3335C12.0974 3.3335 13.9654 3.91336 15.6043 5.07308C17.2432 6.2328 18.4307 7.73627 19.1668 9.5835C18.8474 10.4029 18.4272 11.1634 17.9064 11.8647C17.3856 12.5661 16.7779 13.1807 16.0835 13.7085ZM16.5002 18.8335L13.0002 15.3752C12.5141 15.5279 12.0245 15.6425 11.5314 15.7189C11.0384 15.7953 10.5279 15.8335 10.0002 15.8335C7.90294 15.8335 6.03488 15.2536 4.396 14.0939C2.75711 12.9342 1.56961 11.4307 0.833496 9.5835C1.12516 8.84739 1.49322 8.16336 1.93766 7.53141C2.38211 6.89947 2.88905 6.3335 3.4585 5.8335L1.16683 3.50016L2.3335 2.3335L17.6668 17.6668L16.5002 18.8335ZM4.62516 7.00016C4.22238 7.36127 3.85433 7.75711 3.521 8.18766C3.18766 8.61822 2.90294 9.0835 2.66683 9.5835C3.36127 10.9863 4.3578 12.1009 5.65641 12.9272C6.95502 13.7536 8.40294 14.1668 10.0002 14.1668C10.2779 14.1668 10.5488 14.1495 10.8127 14.1147C11.0766 14.08 11.3474 14.0418 11.6252 14.0002L10.8752 13.2085C10.7224 13.2502 10.5766 13.2814 10.4377 13.3022C10.2988 13.3231 10.1529 13.3335 10.0002 13.3335C8.9585 13.3335 8.07308 12.9689 7.34391 12.2397C6.61475 11.5106 6.25016 10.6252 6.25016 9.5835C6.25016 9.43072 6.26058 9.28489 6.28141 9.146C6.30225 9.00711 6.3335 8.86127 6.37516 8.7085L4.62516 7.00016Z"
        fill={fill}
      />
    </svg>
  )
}