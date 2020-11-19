import React from 'react'
import cn from 'classnames'
import TComponent from '@components/types'

interface Props extends TComponent {}

export default function Box({
  className,
  'data-testid': testId,
  children,
}: Props) {
  return (
    <div data-testid={testId || 'box'} className={cn('', className)}>
      {children}
    </div>
  )
}
