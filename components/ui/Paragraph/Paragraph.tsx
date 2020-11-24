import React from 'react'
import cn from 'classnames'
import TComponent from '@components/types'

interface Props extends TComponent {}

export default function Paragraph({
  'data-testid': testId,
  className,
  children,
}: Props) {
  return (
    <p data-testid={testId || 'paragraph'} className={cn('', className)}>
      {children}
    </p>
  )
}
