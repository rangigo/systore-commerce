import TComponent from '@components/types'
import cn from 'classnames'
import React from 'react'

interface Props extends TComponent {}

export default function Container({
  className,
  'data-testid': testId,
  children,
}: Props) {
  return (
    <div
      data-testid={testId || 'container'}
      className={cn('min-h-screen', className)}
    >
      {children}
    </div>
  )
}
