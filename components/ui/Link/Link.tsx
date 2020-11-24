import React from 'react'
import Link from 'next/link'
import TComponent from '@components/types'
import cn from 'classnames'

interface Props extends TComponent {
  href: string
  newTab?: boolean
  underlined?: boolean
}

const TextLink = ({
  href,
  children,
  'data-testid': testId,
  className,
  newTab,
  underlined,
}: Props) => {
  return (
    <Link href={href} passHref={newTab}>
      {newTab ? (
        <a
          data-testid={testId || 'text-link-new-tab'}
          className={cn(
            'no-underline cursor-pointer transition-all duration-200 ease-in-out',
            className
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <span
          data-testid={testId || 'text-link'}
          className={cn(
            'text-md md:text-xs font-serif leading-relaxed cursor-pointer',
            className,
            {
              'no-underline': !underlined,
              underline: underlined,
            }
          )}
        >
          {children}
        </span>
      )}
    </Link>
  )
}
export default TextLink
