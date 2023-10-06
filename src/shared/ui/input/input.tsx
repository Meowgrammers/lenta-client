import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useState,
} from 'react'
import { TextInput as TremorInput } from '@tremor/react'
import { cn, EyeIcon } from '@/shared'

export const Input = forwardRef<
  ElementRef<typeof TremorInput>,
  ComponentPropsWithoutRef<typeof TremorInput>
>(({ className, type, ...props }, ref) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className="relative">
      <TremorInput
        ref={ref}
        type={isPasswordVisible ? 'text' : type}
        className={cn(
          className,
          'input_text h-10 w-[359px] rounded-lg border border-gray-200 bg-white text-sm leading-[1.125rem] text-[#4D4D4D8F] focus:border focus:!border-[#002773] focus:outline-none'
        )}
        {...props}
      />
      {type === 'password' && (
        <button
          type="button"
          className="text-[#4D4D4D8F]focus:border absolute right-[9px] top-[36px] focus:!border-[#002773]"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? (
            <EyeIcon className="h-[24px] w-[24px]" fill="#003D96" />
          ) : (
            <EyeIcon className="h-[24px] w-[24px]" fill="#4D4D4D" />
          )}
        </button>
      )}
    </div>
  )
})

Input.displayName = 'Input'
