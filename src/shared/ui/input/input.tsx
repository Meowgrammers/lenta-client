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
          'w-[359px] h-10 rounded-lg border border-gray-200 bg-white input_text text-gray-500 text-sm leading-[1.125rem]'
        )}
        {...props}
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute top-[36px] right-[9px] text-gray-400"
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
