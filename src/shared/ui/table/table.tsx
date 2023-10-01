import React from 'react'
import { cn } from '@/shared'
import * as Components from '@tremor/react'

const Table = React.forwardRef<
  React.ElementRef<typeof Components.Table>,
  React.ComponentPropsWithoutRef<typeof Components.Table>
>(({ className, children, ...props }, ref) => (
  <Components.Table
    ref={ref}
    className={cn('min-w-[584px] overflow-hidden', className)}
    {...props}
  >
    {children}
  </Components.Table>
))

Table.displayName = Components.Table.displayName

const TableHead = Components.TableHead

const TableBody = Components.TableBody

const TableRow = React.forwardRef<
  React.ElementRef<typeof Components.TableRow>,
  React.ComponentPropsWithoutRef<typeof Components.TableRow>
>(({ className, children, ...props }, ref) => (
  <Components.TableRow
    ref={ref}
    className={cn('flex h-[34px] justify-normal ', className)}
    {...props}
  >
    {children}
  </Components.TableRow>
))

TableRow.displayName = Components.TableRow.displayName

const TableHeaderCell = React.forwardRef<
  React.ElementRef<typeof Components.TableHeaderCell>,
  React.ComponentPropsWithoutRef<typeof Components.TableHeaderCell>
>(({ className, children, ...props }, ref) => (
  <Components.TableHeaderCell
    ref={ref}
    className={cn(
      'h-[34px] min-w-[48px] max-w-[116px] overflow-hidden text-ellipsis p-2 text-sm font-semibold not-italic leading-[18px] text-white',
      className
    )}
    {...props}
  >
    {children}
  </Components.TableHeaderCell>
))

TableHeaderCell.displayName = Components.TableHeaderCell.displayName

const TableCell = React.forwardRef<
  React.ElementRef<typeof Components.TableCell>,
  React.ComponentPropsWithoutRef<typeof Components.TableCell>
>(({ className, children, ...props }, ref) => (
  <Components.TableCell
    ref={ref}
    className={cn(
      'h-[34px] min-w-[48px] max-w-[116px] p-2 text-start align-top',
      className
    )}
    {...props}
  >
    {children}
  </Components.TableCell>
))

TableCell.displayName = Components.TableCell.displayName

const Text = React.forwardRef<
  React.ElementRef<typeof Components.Text>,
  React.ComponentPropsWithoutRef<typeof Components.Text>
>(({ className, children, ...props }, ref) => (
  <Components.Text
    ref={ref}
    className={cn(
      'overflow-hidden text-ellipsis text-base font-normal not-italic leading-5 text-[#121212]',
      className
    )}
    {...props}
  >
    {children}
  </Components.Text>
))

Text.displayName = Components.Text.displayName

export {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableCell,
  Text,
  TableBody,
}
