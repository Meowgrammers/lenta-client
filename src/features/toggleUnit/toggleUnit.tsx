import { Switcher, setCheck, useAppDispatch, useAppSelector } from '@/shared'

const ToggleUnit = () => {
  const check = useAppSelector((state) => state.app.check)
  const dispatch = useAppDispatch()

  function changeCheckbox() {
    dispatch(setCheck(!check))
  }

  return (
    <div className="w-max">
      <Switcher
        handleCheck={changeCheckbox}
        checked={check}
        textOn={'количество'}
        textOff={'выручка'}
      />
    </div>
  )
}

export { ToggleUnit }
