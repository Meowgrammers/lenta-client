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
          'input_text h-10 w-[359px] rounded-lg border border-gray-200 bg-white text-sm leading-[1.125rem] text-gray-500'
        )}
        {...props}
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-[9px] top-[36px] text-gray-400"
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
