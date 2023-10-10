import { FC, useEffect, useMemo, useState } from 'react'

import {
  status,
  Button,
  useAppSelector,
  CategoryMock,
  CollapseIcon,
  useAppDispatch,
} from '@/shared'
import { AllCheckbox } from '@/features'
import { List } from '@/widgets'

import {
  setCategory,
  setGroup,
  setSkus,
  setSubcategory,
  resetGroup,
  resetCategory,
  resetSubcategory,
  resetSkus,
  resetAll,
} from '@/entities'

export interface TItems {
  id: string
  name: string
  data: string
  items?: TItems[]
  status?: number
}

export const ListMenu: FC = () => {
  const [selectAllChecked, setSelectAllChecked] = useState<boolean | null>(
    false
  )

  const shops = useAppSelector((state) => state.shops.selectedItems)
  const dispatch = useAppDispatch()

  const sortingCategoryMock =
    shops.length > 0
      ? CategoryMock.filter((category) => {
          return shops.includes(category.store)
        })
      : CategoryMock

  // Новая структура данных
  const newCategories: TItems[] = useMemo(() => {
    return sortingCategoryMock.reduce((acc, item) => {
      const group = item.group
      const category = item.category
      const subcategory = item.subcategory
      const sku = item.sku

      // Поиск или создание группы
      let existingGroup = acc.find((groupItem) => groupItem.id === group)
      if (!existingGroup) {
        existingGroup = {
          id: group,
          name: group,
          data: 'group',
          items: [],
        }
        acc.push(existingGroup)
      }

      // Поиск или создание категории
      let existingCategory = existingGroup.items?.find(
        (categoryItem) => categoryItem.id === category
      )
      if (!existingCategory) {
        existingCategory = {
          id: category,
          name: category,
          data: 'category',
          items: [],
        }
        existingGroup.items = existingGroup.items || []
        existingGroup.items.push(existingCategory)
      }

      // Поиск или создание подкатегории
      let existingSubcategory = existingCategory.items?.find(
        (subcategoryItem) => subcategoryItem.id === subcategory
      )
      if (!existingSubcategory) {
        existingSubcategory = {
          id: subcategory,
          name: subcategory,
          data: 'subcategory',
          items: [],
        }
        existingCategory.items = existingCategory.items || []
        existingCategory.items.push(existingSubcategory)
      }

      // Добавление товара
      existingSubcategory.items = existingSubcategory.items || []
      existingSubcategory.items.push({
        id: sku,
        name: sku,
        data: 'sku',
      })

      return acc
    }, [] as TItems[])
  }, [shops])

  const [items, setItems] = useState<TItems[]>(newCategories)

  useEffect(() => {
    setItems(newCategories)
    setSelectAllChecked(false)
  }, [shops])

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

    if (checkedCount === 0 && indeterminateCount === 0) {
      return false
    } else if (checkedCount === items.length) {
      return true
    } else {
      return null
    }
  }
  const setStoreStatus = (root: TItems, newStatus: number | undefined) => {
    switch (root.data) {
      case 'group':
        if (
          newStatus === status.checked ||
          newStatus === status.indeterminate
        ) {
          dispatch(setGroup(root.id))
        } else if (newStatus === status.unchecked || newStatus === undefined) {
          dispatch(resetGroup(root.id))
        }
        break
      case 'category':
        if (
          newStatus === status.checked ||
          newStatus === status.indeterminate
        ) {
          dispatch(setCategory(root.id))
        } else if (newStatus === status.unchecked || newStatus === undefined) {
          dispatch(resetCategory(root.id))
        }
        break
      case 'subcategory':
        if (
          newStatus === status.checked ||
          newStatus === status.indeterminate
        ) {
          dispatch(setSubcategory(root.id))
        } else if (newStatus === status.unchecked || newStatus === undefined) {
          dispatch(resetSubcategory(root.id))
        }
        break
      case 'sku':
        if (
          newStatus === status.checked ||
          newStatus === status.indeterminate
        ) {
          dispatch(setSkus(root.id))
        } else if (newStatus === status.unchecked || newStatus === undefined) {
          dispatch(resetSkus(root.id))
        }
        break
      default:
        break
    }
  }

  const setStatus = (root: TItems, newStatus: number) => {
    root.status = newStatus
    setStoreStatus(root, newStatus)
    if (Array.isArray(root.items)) {
      root.items.forEach((item) => {
        setStatus(item, newStatus)
      })
    }
  }

  const computeStatus = (children: TItems[]) => {
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
    root: TItems | TItems[],
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
        setStoreStatus(root, root.status)
      }
    }
  }

  const compute = (checkboxId: string, newStatus: number) => {
    traverse(items, checkboxId, newStatus)
    setItems([...items])

    const allChecked = items.every((item) => item.status === status.checked)
    const allUnchecked = items.every((item) => item.status === status.unchecked)

    if (allChecked) {
      setSelectAllChecked(true)
    } else if (allUnchecked) {
      setSelectAllChecked(false)
    } else {
      setSelectAllChecked(null)
    }
  }

  const handleSelectAllChange = () => {
    const newStatus = selectAllChecked ? status.unchecked : status.checked
    setSelectAllChecked(!selectAllChecked)
    items.forEach((item) => {
      traverse(item, item.id, newStatus)
    })
    setItems([...items])
  }

  const selectAllState = calculateSelectAllState()

  const handleResetChecked = () => {
    items.forEach((item) => {
      if (item.status === status.checked || status.indeterminate) {
        traverse(item, item.id, status.unchecked)
      }
    })
    setItems([...items])
    setSelectAllChecked(false)
    dispatch(resetAll())
  }

  const totalItems = useMemo(() => {
    const countTotalItems = (itemsArray: TItems[]) => {
      let count = itemsArray.length
      itemsArray.forEach((item) => {
        if (Array.isArray(item.items)) {
          count += countTotalItems(item.items)
        }
      })
      return count
    }

    return countTotalItems(newCategories)
  }, [newCategories])

  const selectedItemsCount = useMemo(() => {
    const countSelectedItems = (itemsArray: TItems[]) => {
      let count = 0
      itemsArray.forEach((item) => {
        if (item.status === status.checked) {
          count += 1
        }
        if (Array.isArray(item.items)) {
          count += countSelectedItems(item.items)
        }
      })
      return count
    }
    return countSelectedItems(items)
  }, [items])

  const [isListVisible, setIsListVisible] = useState(true)
  const toggleListVisibility = () => {
    setIsListVisible((prevIsVisible) => !prevIsVisible)
  }

  return (
    <div className="overflow-y-auto">
      <div className="mb-4 flex items-center justify-between gap-1 py-1 pl-2 text-profile-title font-semibold hover:bg-white/[0.16] active:bg-[#002773]">
        <div className="flex items-center gap-1">
          <AllCheckbox
            checked={selectAllChecked}
            indeterminate={selectAllState === null}
            onChange={handleSelectAllChange}
          />
          <label
            onClick={toggleListVisibility}
            className="w-[210px] cursor-pointer"
          >
            Выбрать все
          </label>
        </div>

        <div className="flex gap-1">
          <p className="ml-2 cursor-default text-sm text-white/[0.4]">
            {selectedItemsCount}/{totalItems}
          </p>
          <div
            className="h-5 w-5 cursor-pointer"
            onClick={toggleListVisibility}
          >
            <CollapseIcon
              className={`h-5 w-5 fill-white hover:fill-[#003D96] ${
                isListVisible ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>
      </div>
      {isListVisible && (
        <div className="ml-[-12px] max-h-[400px] overflow-auto">
          <List items={items} compute={compute} />
        </div>
      )}
      <Button
        onClick={handleResetChecked}
        className={`mt-6 h-10 w-full shadow-sm ${
          selectedItemsCount === 0
            ? 'cursor-default border-white/[.40] text-white/[.40]'
            : 'border-white text-white hover:bg-white/[0.16] hover:text-white active:bg-color-back-primary-on-blue'
        } `}
        variant="secondary"
        disabled={selectedItemsCount === 0}
      >
        Сбросить
      </Button>
    </div>
  )
}
