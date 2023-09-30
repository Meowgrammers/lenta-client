import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from '@tremor/react'
import { styled } from 'styled-components'

const BaseTable = styled(Table)`
  margin-top: 2rem;
`

const TableText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #121212;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`

const Head = styled(TableHead)`
  background: #efefef;
`
const Body = styled(TableBody)``
const HeadRow = styled(TableRow)``

const BodyRow = styled(TableRow)`
  border-bottom: 0.0625rem solid #e5e7eb;
  height: 5rem;
`

const HeadCell = styled(TableHeaderCell)`
  padding: 0.75rem;
  color: #374151;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  text-align: start;
`

const BodyCell = styled(TableCell)`
  padding: 1.1875rem 0.75rem;
  min-width: 3.125rem;
  max-width: 8.75rem;
  text-align: start;
  vertical-align: top;
`
export {
  TableText,
  BodyRow,
  HeadRow,
  HeadCell,
  BodyCell,
  Head,
  BaseTable,
  Body,
}
