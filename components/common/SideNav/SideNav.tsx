import React from 'react'
import cn from 'classnames'
import TextLink from '../TextLink/TextLink'

interface Props {
  className?: string
}

export default function SideNav({ className }: Props) {
  return (
    <nav className="text-center">
      <ul>
        <TextLink href="/collections">collections</TextLink>
        <TextLink href="/shops">shops</TextLink>
        <TextLink href="/sales">sales</TextLink>
        <TextLink href="/about">about SY</TextLink>
        <TextLink href="/contact">contact</TextLink>
      </ul>
    </nav>
  )
}
