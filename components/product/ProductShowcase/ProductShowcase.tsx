import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

interface Props {
  title: string
  sizes: string[]
  src: string
  width?: number
  height?: number
  className?: string
}

export default function ProductShowcase({
  title,
  sizes,
  src,
  width,
  height,
  className,
}: Props) {
  return (
    <div
      className={cn('inline-block', className)}
      data-testid="product-showcase"
    >
      <Image
        src={src}
        alt={title}
        width={width ?? '352px'}
        height={height ?? '627px'}
      />
      <p className="capitalize text-2xs text-left font-sans">
        <span className="mr-2">{title}</span>|
        <span className="ml-2">
          {sizes.map((size, index) =>
            index === sizes.length - 1 ? size : `${size} | `
          )}
        </span>
      </p>
    </div>
  )
}
