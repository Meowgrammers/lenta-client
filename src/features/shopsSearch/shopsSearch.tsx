import { FC, useState } from 'react'
import { ShopResponse } from '@/entities'

import { SearchIcon, Input } from '@/shared'

interface ShopsSearchProps {
  shops: ShopResponse[]
  onItemSelect: (id: string) => void
}

export const ShopsSearch: FC<ShopsSearchProps> = ({ shops, onItemSelect }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<ShopResponse[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchTerm(term)

    const filteredResults = shops.filter((shop) =>
      shop.id.toLowerCase().startsWith(term.toLowerCase())
    )

    setSearchResults(filteredResults)
  }

  const handleItemClick = (id: string) => {
    onItemSelect(id)
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
          {searchResults.map((result: ShopResponse) => (
            <li
              key={result.id}
              onClick={() => handleItemClick(result.id)}
              className="cursor-pointer border-b border-[#4D4D4D3D] px-4 py-2 text-search-list"
            >
              {result.id}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
