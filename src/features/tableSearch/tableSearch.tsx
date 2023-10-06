import { setSearch } from '@/entities'
import { useAppDispatch, SearchIcon } from '@/shared'
import { TextInput } from '@tremor/react'

const TableSearch = () => {
  const dispatch = useAppDispatch()

  function changeSearch(value: string) {
    dispatch(setSearch(value))
  }

  return (
    <TextInput
      onChange={(e) => changeSearch(e.target.value)}
      icon={SearchIcon}
      type="text"
      placeholder="Поиск по названию…"
      className="w-[359px]"
    />
  )
}
export { TableSearch }
