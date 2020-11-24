import React from 'react'
import cn from 'classnames'
import TComponent from '@components/types'

interface ItemProps extends TComponent {}

function Item({ className, 'data-testid': testId, children }: ItemProps) {
  return (
    <li data-testid={testId || 'item'} className={cn('', className)}>
      {children}
    </li>
  )
}

interface ListProps extends TComponent {}
export default function List({
  className,
  'data-testid': testId,
  children,
}: ListProps) {
  return (
    <ul data-testid={testId || 'list'} className={cn('', className)}>
      {children}
    </ul>
  )
}

List.Item = Item
