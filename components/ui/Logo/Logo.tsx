import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import TComponent from '@components/types'

interface Props extends TComponent {
  width?: number | string
  height?: number | string
  size?: 'sm' | 'lg'
}

const Logo = ({
  className,
  width,
  height,
  size = 'sm',
  'data-testid': testId,
}: Props) => (
  <div data-testid={testId || 'logo'} className={cn('inline-block', className)}>
    <Image
      src={size && size === 'sm' ? '/logo-sm.png' : '/logo.png'}
      alt="Logo"
      width={width ?? '124px'}
      height={height ?? '56px'}
    />
  </div>
)

export default Logo
