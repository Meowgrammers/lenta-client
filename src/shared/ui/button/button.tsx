import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Button as TremorButton } from '@tremor/react'

export const Button = forwardRef<
  ElementRef<typeof TremorButton>,
  ComponentPropsWithoutRef<typeof TremorButton>
>((props, ref) => <TremorButton ref={ref} {...props} />)

Button.displayName = 'Button'
