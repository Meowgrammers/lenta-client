import { Switcher, setCheck, useAppDispatch, useAppSelector } from '@/shared'

const ToggleUnit = () => {
  const check = useAppSelector((state) => state.app.check)
  const dispatch = useAppDispatch()

  function changeCheckbox() {
    dispatch(setCheck(!check))
  }

  return (
    <Switcher
      handleCheck={changeCheckbox}
      checked={check}
      text={check ? 'выручка, руб' : 'количество, шт/кг'}
    />
  )
}

export { ToggleUnit }
