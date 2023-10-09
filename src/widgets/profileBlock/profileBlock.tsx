import { FC } from 'react'
import { ExitButton } from '@/features'

export const ProfileBlock: FC = () => {
  return (
    <div className=" mb-8 flex justify-between gap-2 rounded-2xl bg-white/[0.16] p-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#c4c4c4]">
        <span className="cursor-default text-sm/[18px] font-semibold text-[#4D4D4D]">
          СП
        </span>
      </div>
      <div className="flex flex-col gap-[2px] pr-3">
        <p className="text-profile-title font-semibold">
          София Павлова-Печерская
        </p>
        <p className="text-selected-item">Старший менеджер</p>
      </div>
      <ExitButton />
    </div>
  )
}
