import React from 'react'
import cn from 'classnames'
import { Logo, TextLink } from '@components/ui'

interface Props {
  className?: string
}

export default function SideNav({ className }: Props) {
  return (
    <div className={cn('fixed z-30', className)}>
      <Logo size="lg" width={176} height={176} className="mb-full" />
      <nav
        className="flex justify-center mr-5 lg:mr-10 mt-32"
        data-testid="sidenav"
      >
        <ul className="list-none flex flex-col">
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
