import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { Logo } from '@components/ui'
import throttle from 'lodash.throttle'
import TextLink from '../TextLink/TextLink'
import Hamburger from '@components/icons/Hamburger'
import { Bag } from '@components/icons'

const Navbar = () => {
  const [isDropdownOpen, setIsDropDownOpen] = useState<boolean>(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = () => {
    const offset = 0
    const { scrollTop } = document.documentElement
    const scrolled = scrollTop > offset
    setHasScrolled(scrolled)
  }

  useEffect(() => {
    document.addEventListener('scroll', throttle(handleScroll, 200))
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="fixed ml-0 mt-0 w-full">
      <div className="bg-accents-1 md:bg-transparent flex items-center justify-between text-center px-5 md:px-0 py-2 md:py-0">
        <div
          onClick={() => setIsDropDownOpen(!isDropdownOpen)}
          className="inline-block mt-3 md:hidden cursor-pointer"
        >
          <Hamburger />
        </div>
        <Logo size="sm" className="md:hidden" />
        <Logo width="176px" height="176px" className="hidden md:block" />

        <div className="flex md:hidden justify-between items-center">
          <div className="cursor-pointer">
            <Bag width="28" height="28" />
          </div>

          <span className="ml-1">0</span>
        </div>
      </div>
      <div
        className={cn('pt-8', {
          hidden: !isDropdownOpen,
          'bg-accents-1': isDropdownOpen,
          'h-screen': isDropdownOpen,
        })}
      >
        <nav
          className="flex flex-col justify-evenly text-center md:text-left mt-0 md:mt-48 pl-0 md:pl-11"
          data-testid="sidenav"
        >
          <div className="mb-10">
            <span className="text-xl">VND</span>
          </div>
          <TextLink className="mb-5 md:mb-0" href="/collections">
            collections
          </TextLink>
          <TextLink className="mb-5 md:mb-0" href="/shop">
            shop
          </TextLink>
          <TextLink className="mb-5 md:mb-0" href="/sales">
            sales
          </TextLink>
          <TextLink className="mb-5 md:mb-0" href="/about">
            about SY
          </TextLink>
          <TextLink className="mb-5 md:mb-0" href="/contact">
            contact
          </TextLink>
          <hr className="w-2/5 md:hidden mx-auto my-6" />
          <p className="mb-5 md:mb-0">(+84) 917 899 773</p>
          <TextLink underlined className="mb-5 md:mb-0" href="/contact">
            facebook
          </TextLink>
          <TextLink underlined className="mb-5 md:mb-0" href="/contact">
            instagram
          </TextLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
