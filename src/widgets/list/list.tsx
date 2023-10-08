import { FC, useState } from 'react'

import { Checkbox } from '@/features'
import { TItems } from '@/widgets'
import { status, CollapseIcon } from '@/shared'

interface ListProps {
  items: TItems[]
  compute: (checkboxId: string, status: number, data: string) => void
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

  const countSelectedItems = (itemsArray: TItems[]) => {
    const selectedItems = itemsArray.filter(
      (item) => item.status === status.checked
    )
    return selectedItems.length
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
            <li key={item.id} className="w-full" data-set={item.data}>
              <div className="relative mb-1 flex w-full cursor-default items-center gap-1 px-2 py-1 hover:bg-white/[0.16] active:bg-[#002773]">
                <Checkbox
                  id={item.id}
                  data={item.data}
                  name={item.name}
                  checked={item.status === status.checked}
                  indeterminate={item.status === status.indeterminate}
                  compute={compute}
                  className={`checkbox-${item.data}`}
                />
                <label
                  className={`w-[210px] cursor-pointer overflow-hidden text-ellipsis pr-8 ${item.data}`}
                  htmlFor={item.name}
                  onClick={() => toggleItem(item.id)}
                >
                  {item.name}
                </label>

                {hasNestedItems(item.id) && (
                  <>
                    <p className="ml-auto mr-[18px] text-sm text-white/[0.4]">
                      {countSelectedItems(item.items!)}/{item.items!.length}
                    </p>
                    <div
                      className="flex cursor-pointer items-center"
                      onClick={() => toggleItem(item.id)}
                    >
                      <CollapseIcon
                        className={`absolute right-0 h-5 w-5 fill-white hover:fill-[#003D96] ${
                          openItems[item.id] ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
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
