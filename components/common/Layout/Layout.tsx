import cn from 'classnames'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useUI } from '@components/ui/context'
import { MobileNav, Footer } from '@components/common'
import { usePreventScroll } from '@react-aria/overlays'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { CommerceProvider } from '@bigcommerce/storefront-data-hooks'
import type { Page } from '@bigcommerce/storefront-data-hooks/api/operations/get-all-pages'
import SideNav from '../SideNav'
import { Box, Button } from '@components/ui'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    Loading...
  </div>
)

const dynamicProps = {
  loading: () => <Loading />,
}

const FeatureBar = dynamic(
  () => import('@components/common/FeatureBar'),
  dynamicProps
)

interface Props {
  pageProps: {
    pages?: Page[]
  }
}

const Layout: FC<Props> = ({ children, pageProps }) => {
  const { displaySidebar, displayModal } = useUI()
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { locale = 'en-US' } = useRouter()

  usePreventScroll({
    isDisabled: !(displaySidebar || displayModal),
  })

  return (
    <CommerceProvider locale={locale}>
      <Box>
        <MobileNav className="block md:hidden" />
        <SideNav className="hidden md:block" />

        <main>{children}</main>
        <Footer pages={pageProps.pages} />

        <FeatureBar
          title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
          hide={acceptedCookies}
          action={
            <Button className="mx-5" onClick={onAcceptCookies}>
              Accept cookies
            </Button>
          }
        />
      </Box>
    </CommerceProvider>
  )
}

export default Layout
