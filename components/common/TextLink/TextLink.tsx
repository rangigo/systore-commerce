import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

interface Props {
  href: string
  children: React.ReactNode
  className?: string
}

export default function TextLink({ href, children, className }: Props) {
  return (
    <li>
      <Link href={href}>
        <a className={cn('no-underline text-xs', className)}>{children}</a>
      </Link>
    </li>
  )
}
