import { FC, useState } from 'react'

import { Checkbox } from '@/features'
import { Category } from '@/widgets'
import { status, CollapseIcon } from '@/shared'

interface ListProps {
  items: Category[]
  compute: (checkboxId: string, status: number) => void
}

export const List: FC<ListProps> = ({ items, compute }) => {
  const [openItems, setOpenItems] = useState<{ [itemId: string]: boolean }>({})

  const toggleItem = (itemId: string) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [itemId]: !prevOpenItems[itemId],
    }))
  }

  const isItemOpen = (itemId: string) => openItems[itemId]

  const hasNestedItems = (itemId: string) => {
    const item = items.find((i) => i.id === itemId)
    return item && Array.isArray(item.items) && item.items.length > 0
  }

  return (
    <div className="flex flex-col pl-3">
      <ul className="w-full text-profile-title font-semibold">
        {items.map((item) => {
          let childList = null
          if (Array.isArray(item.items)) {
            childList = isItemOpen(item.id) ? (
              <List items={item.items} compute={compute} />
            ) : null
          }
          return (
            <li key={item.id} className="w-full">
              <div
                className="relative flex w-full cursor-pointer items-center gap-1 px-2 py-1 hover:bg-white/[0.16]"
                onClick={() => toggleItem(item.id)}
              >
                <Checkbox
                  id={item.id}
                  name={item.name}
                  checked={item.status === status.checked}
                  indeterminate={item.status === status.indeterminate}
                  compute={compute}
                />
                <label className="" htmlFor={item.name}>
                  {item.name}
                </label>

                {hasNestedItems(item.id) && (
                  <>
                    <p className="ml-auto mr-[18px] text-sm text-white/[0.4]">
                      7/10
                    </p>
                    <CollapseIcon
                      className={`absolute right-0 h-5 w-5 ${
                        openItems[item.id] ? 'rotate-180' : ''
                      }`}
                      fill="white"
                    />
                  </>
                )}
              </div>
              {childList}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
