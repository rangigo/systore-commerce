import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

interface Props {
  href: string
  children: React.ReactNode
  className?: string
  underlined?: boolean
}

export default function TextLink({
  href,
  children,
  className,
  underlined,
}: Props) {
  return (
    <Link href={href}>
      <a
        data-testid="text-link"
        className={cn(
          'text-md md:text-xs font-serif leading-relaxed',
          className,
          {
            'no-underline': !underlined,
            underline: underlined,
          }
        )}
      >
        {children}
      </a>
    </Link>
  )
}
