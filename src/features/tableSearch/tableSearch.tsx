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
      placeholder="Поиск по таблице…"
      className="h-10 w-[288px] min-w-[288px]"
    />
  )
}
export { TableSearch }
