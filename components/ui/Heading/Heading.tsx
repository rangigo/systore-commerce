import React from 'react'
import clsx from 'clsx'
import TComponent, { FontSizingType, HeadingTagType } from '@components/types'
import s from './Heading.module.css'

interface Props extends TComponent {
  is?: HeadingTagType
  fontSize?: FontSizingType
}

export default function Heading({
  is = 'h2',
  fontSize = 'text-3xl',
  children,
  className,
}: Props) {
  const Tag = React.createElement(
    is,
    {
      'data-testid': 'heading',
      className: clsx(s.root, fontSize, className),
    },
    children
  )
  return Tag
}
