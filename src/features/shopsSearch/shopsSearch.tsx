import { FC, useState } from 'react'

import { SearchIcon, Input, ShopsMock } from '@/shared'

interface ShopsSearchProps {
  onItemSelect: (id: string) => void
}

export const ShopsSearch: FC<ShopsSearchProps> = ({ onItemSelect }) => {
  // const shops = useAppSelector((state) => state.shops.allItems)
  const shops = ShopsMock.map((item) => item.id)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchTerm(term)

    const filteredResults = shops.filter((shop) =>
      shop.toLowerCase().startsWith(term.toLowerCase())
    )

    setSearchResults(filteredResults)
  }

  const handleItemClick = (store: string) => {
    onItemSelect(store)
    setSearchTerm('')
    setSearchResults([])
  }

  return (
    <>
      <Input
        className="mb-1 !w-[318px]"
        icon={SearchIcon}
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && searchResults.length > 0 && (
        <ul className="max-h-40 overflow-y-auto rounded-lg bg-white text-[#4D4D4D]">
          {searchResults.map((result: string) => (
            <li
              key={result}
              onClick={() => handleItemClick(result)}
              className="cursor-pointer border-b border-[#4D4D4D3D] px-4 py-2 text-search-list"
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
