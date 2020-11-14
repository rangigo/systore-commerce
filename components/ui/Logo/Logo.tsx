import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

interface Props {
  className?: string
  width?: number
  height?: number
}

const Logo = ({ className, width, height }: Props) => (
  <div className={cn('inline-block', className)}>
    <Image
      src="/logo.png"
      alt="Logo Image"
      // The cart item image is already optimized and very small in size
      unoptimized
      width={width ?? '176px'}
      height={height ?? '176px'}
    />
  </div>
)

export default Logo
