import React from 'react'
import cn from 'classnames'
import TComponent from '@components/types'

interface Props extends TComponent {}

export default function Text({
  children,
  className,
  'data-testid': testId,
}: Props) {
  return (
    <span data-testid={testId || 'text'} className={cn('', className)}>
      {children}
    </span>
  )
}
