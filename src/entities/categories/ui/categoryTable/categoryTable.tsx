import {
  TableText,
  HeadRow,
  BodyRow,
  HeadCell,
  BodyCell,
  Head,
  BaseTable,
  Body,
  CategoryMock,
} from '@/shared'

import { FC } from 'react'

export const CategoryTable: FC = () => {
  return (
    <BaseTable>
      <Head>
        <HeadRow>
          <HeadCell>[]</HeadCell>
          <HeadCell>ТК</HeadCell>
          <HeadCell>Группа</HeadCell>
          <HeadCell>Категория</HeadCell>
          <HeadCell>Подкатегория</HeadCell>
          <HeadCell>ID и название</HeadCell>
          <HeadCell>Единица</HeadCell>
        </HeadRow>
      </Head>
      <Body>
        {CategoryMock.map((item) => {
          return (
            <BodyRow key={item.id}>
              <BodyCell>[]</BodyCell>
              <BodyCell>
                <TableText>{item.id}</TableText>
              </BodyCell>
              <BodyCell>
                <TableText>{item.group}</TableText>
              </BodyCell>
              <BodyCell>
                <TableText> {item.category}</TableText>
              </BodyCell>
              <BodyCell>
                <TableText>{item.subcategory}</TableText>
              </BodyCell>
              <BodyCell>
                <TableText>{item.sku}</TableText>
              </BodyCell>
              {item.uom && (
                <BodyCell>
                  <TableText> {item.uom}</TableText>
                </BodyCell>
              )}
            </BodyRow>
          )
        })}
      </Body>
    </BaseTable>
  )
}
