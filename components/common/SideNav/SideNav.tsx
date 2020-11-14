import React from 'react'
import cn from 'classnames'
import TextLink from '../TextLink/TextLink'
import { Logo } from '@components/ui'

interface Props {
  className?: string
}

export default function SideNav({ className }: Props) {
  return (
    <div className={cn('fixed', className)}>
      <Logo className="mb-full" />
      <nav className="flex justify-center mt-32" data-testid="sidenav">
        <ul className="list-none">
          <TextLink href="/collections">collections</TextLink>
          <TextLink href="/shop">shop</TextLink>
          <TextLink href="/sales">sales</TextLink>
          <TextLink href="/about">about SY</TextLink>
          <TextLink href="/contact">contact</TextLink>
        </ul>
      </nav>
    </div>
  )
}
