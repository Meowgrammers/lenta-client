import { FC, useState } from 'react'

import { status } from '@/shared'

import { List, AllCheckbox } from '@/features'

export interface Category {
  id: string
  name: string
  items?: Category[]
  status?: number
}

export const initialCategories: Category[] = [
  {
    id: '1',
    name: 'Группа 1',
    items: [
      {
        id: '2',
        name: 'Категория 1.1',
        items: [
          {
            id: '4',
            name: 'Подкатегория 1.1.1',
          },
        ],
      },
      {
        id: '3',
        name: 'Категория 1.2',
        items: [
          {
            id: '4',
            name: 'Подкатегория 1.2.1',
            items: [
              { id: '5', name: 'Товар 1.2.1.1' },
              { id: '15', name: 'Товар 1.2.1.2' },
              { id: '25', name: 'Товар 1.2.1.3' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '6',
    name: 'Группа 2',
    items: [
      {
        id: '7',
        name: 'Категория 2.1',
        items: [
          { id: '8', name: 'Подкатегория 2.1.1' },
          { id: '9', name: 'Подкатегория 2.1.1' },
        ],
      },
      { id: '21', name: 'Категория 1.1' },
    ],
  },
]

export const ListMenu: FC = () => {
  const [selectAllChecked, setSelectAllChecked] = useState(false)
  const [items, setItems] = useState<Category[]>(initialCategories)

  const calculateSelectAllState = () => {
    let checkedCount = 0
    let indeterminateCount = 0

    items.forEach((item) => {
      if (item.status === status.checked) {
        checkedCount++
      } else if (item.status === status.indeterminate) {
        indeterminateCount++
      }
    })

    if (indeterminateCount > 0) {
      return null // Хотя бы один элемент имеет состояние indeterminate
    } else if (checkedCount === items.length) {
      return true // Все элементы отмечены
    } else {
      return false // Ни один элемент не отмечен
    }
  }

  const setStatus = (root: Category, newStatus: number) => {
    root.status = newStatus
    if (Array.isArray(root.items)) {
      return root.items.forEach((item) => {
        setStatus(item, newStatus)
      })
    }
  }

  const computeStatus = (children: Category[]) => {
    let checked = 0
    let indeterminate = 0

    children.forEach((item) => {
      if (item.status && item.status === status.checked) checked++
      if (item.status && item.status === status.indeterminate) indeterminate++
    })

    if (checked === children.length) {
      return status.checked
    } else if (checked > 0 || indeterminate > 0) {
      return status.indeterminate
    }
  }

  const traverse = (
    root: Category | Category[],
    needle: string,
    newStatus: number
  ) => {
    if (Array.isArray(root)) {
      root.forEach((item) => traverse(item, needle, newStatus))
    } else {
      if (root.id === needle) {
        setStatus(root, newStatus)
      }

      if (root.items) {
        root.items.forEach((item) => traverse(item, needle, newStatus))
        root.status = computeStatus(root.items)
      }
    }
  }

  const compute = (checkboxId: string, newStatus: number) => {
    traverse(items, checkboxId, newStatus)
    setItems([...items])
  }

  const handleSelectAllChange = () => {
    const newStatus = selectAllChecked ? status.unchecked : status.checked
    setSelectAllChecked(!selectAllChecked) // Инверуем состояние "Выбрать все"
    // Проходим по всем элементам и устанавливаем им новый статус
    items.forEach((item) => {
      traverse(item, item.id, newStatus)
    })
    // Обновляем состояние списка элементов
    setItems([...items])
  }

  const selectAllState = calculateSelectAllState()

  return (
    <>
      <div className=" mb-4 flex gap-1 text-profile-title font-semibold">
        <AllCheckbox
          checked={selectAllChecked}
          indeterminate={selectAllState === null}
          onChange={handleSelectAllChange}
        />
        Выбрать все
      </div>
      <List items={items} compute={compute} />
    </>
  )
}
