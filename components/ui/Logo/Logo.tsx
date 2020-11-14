import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

interface Props {
  className?: string
  width?: number | string
  height?: number | string
  size?: 'sm' | 'lg'
}

const Logo = ({ className, width, height, size }: Props) => (
  <div className={cn('inline-block', className)}>
    <img
      src={size && size === 'sm' ? '/logo-sm.png' : '/logo.png'}
      alt="Logo"
      // The cart item image is already optimized and very small in size
      width={width ?? '124px'}
      height={height ?? '56px'}
    />
  </div>
)

export default Logo
