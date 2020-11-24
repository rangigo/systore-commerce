import React from 'react'
import cn from 'classnames'
import { Logo, Link } from '@components/ui'
import TComponent from '@components/types'

interface Props extends TComponent {}

export default function SideNav({ className, 'data-testid': testId }: Props) {
  return (
    <div
      data-testid={testId || 'sidenav'}
      className={cn('fixed z-30', className)}
    >
      <Logo size="lg" width={176} height={176} className="mb-full" />
      <nav className="flex justify-center lg:mr-10 mt-60">
        <ul className="list-none grid grid-cols-1 gap-y-2">
          <Link href="/collections">collections</Link>
          <Link href="/shop">shop</Link>
          <Link href="/sales">sales</Link>
          <Link href="/about">about SY</Link>
          <Link href="/contact">contact</Link>
        </ul>
      </nav>
    </div>
  )
}
