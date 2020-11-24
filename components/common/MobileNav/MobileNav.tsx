import React, { useRef } from 'react'
import cn from 'classnames'
import { Hamburger, Logo, Link, Box } from '@components/ui'
import { Bag } from '@components/icons'
import { motion, useCycle } from 'framer-motion'
import TComponent from '@components/types'

const mobileNavMotion = {
  open: (height = 300) => ({
    clipPath: `circle(${height * 2 + 200}px at -20px -20px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at -20px -20px)',
    transition: {
      delay: 0.25,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

interface Props extends TComponent {}

export default function MobileNav({ className, 'data-testid': testId }: Props) {
  const [isOpen, setIsOpen] = useCycle<boolean>(false, true)
  const containerRef = useRef(null)

  return (
    <Box className={cn('fixed ml-0 mt-0 w-full z-30', className)}>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        ref={containerRef}
      >
        <Box className="bg-accents-1 md:bg-transparent flex items-center justify-between text-center px-5 md:px-0 py-2 md:py-0">
          <Hamburger toggle={() => setIsOpen()} />
          <Logo size="sm" className="md:hidden" />
          <Logo width="176px" height="176px" className="hidden md:block" />

          <Box className="flex md:hidden justify-between items-center">
            <Box className="cursor-pointer">
              <Bag width="28" height="28" />
            </Box>

            <span className="ml-1">0</span>
          </Box>
        </Box>

        <motion.div
          variants={mobileNavMotion}
          className={cn(
            'bg-accents-1 bg-opacity-85 h-screen backdrop-blur pt-8'
          )}
        >
          <nav
            className="flex flex-col justify-evenly text-center md:text-left mt-0 md:mt-48 pl-0 md:pl-11"
            data-testid="mobilenav"
          >
            <Box className="mb-10">
              <span className="text-xl">VND</span>
            </Box>
            <Link className="mb-5 md:mb-0" href="/collections">
              collections
            </Link>
            <Link className="mb-5 md:mb-0" href="/shop">
              shop
            </Link>
            <Link className="mb-5 md:mb-0" href="/sales">
              sales
            </Link>
            <Link className="mb-5 md:mb-0" href="/about">
              about SY
            </Link>
            <Link className="mb-5 md:mb-0" href="/contact">
              contact
            </Link>
            <hr className="w-2/5 md:hidden mx-auto my-6" />
            <p className="mb-5 md:mb-0">(+84) 917 899 773</p>
            <Link underlined className="mb-5 md:mb-0" href="/contact">
              facebook
            </Link>
            <Link underlined className="mb-5 md:mb-0" href="/contact">
              instagram
            </Link>
          </nav>
        </motion.div>
      </motion.nav>
    </Box>
  )
}
