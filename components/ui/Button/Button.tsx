import React from 'react'
import cn from 'classnames'
import TComponent from '@components/types'

interface Props extends TComponent {}

export default function Button({
  'data-testid': testId,
  className,
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      data-testid={testId || 'button'}
      className={cn('', className)}
    >
      {children}
    </button>
  )
}
