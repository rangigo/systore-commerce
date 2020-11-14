import rangeMap from '@lib/range-map'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getConfig } from '@bigcommerce/storefront-data-hooks/api'
import getAllProducts from '@bigcommerce/storefront-data-hooks/api/operations/get-all-products'
import getSiteInfo from '@bigcommerce/storefront-data-hooks/api/operations/get-site-info'
import getAllPages from '@bigcommerce/storefront-data-hooks/api/operations/get-all-pages'

import Logo from '../components/ui/Logo'
import SideNav from '@components/common/SideNav/SideNav'
import Image from 'next/image'
import ProductShowcase from '@components/product/ProductShowcase/ProductShowcase'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  // Get Featured Products
  const { products: featuredProducts } = await getAllProducts({
    variables: { field: 'featuredProducts', first: 6 },
    config,
    preview,
  })

  // Get Best Selling Products
  const { products: bestSellingProducts } = await getAllProducts({
    variables: { field: 'bestSellingProducts', first: 6 },
    config,
    preview,
  })

  // Get Best Newest Products
  const { products: newestProducts } = await getAllProducts({
    variables: { field: 'newestProducts', first: 12 },
    config,
    preview,
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })

  // These are the products that are going to be displayed in the landing.
  // We prefer to do the computation at buildtime/servertime
  const { featured, bestSelling } = (() => {
    // Create a copy of products that we can mutate
    const products = [...newestProducts]
    // If the lists of featured and best selling products don't have enough
    // products, then fill them with products from the products list, this
    // is useful for new commerce sites that don't have a lot of products
    return {
      featured: rangeMap(6, (i) => featuredProducts[i] ?? products.shift())
        .filter(nonNullable)
        .sort((a, b) => a.node.prices.price.value - b.node.prices.price.value)
        .reverse(),
      bestSelling: rangeMap(
        6,
        (i) => bestSellingProducts[i] ?? products.shift()
      ).filter(nonNullable),
    }
  })()

  return {
    props: {
      featured,
      bestSelling,
      newestProducts,
      categories,
      brands,
      pages,
    },
    revalidate: 14400,
  }
}

const nonNullable = (v: any) => v

export default function Home({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <div className="bg-primary h-screen font-serif">
      <div className="fixed">
        <Logo className="mb-full" />
        <SideNav className="mt-32" />
      </div>

      <div className="text-center mx-auto pt-20">
        <p className="uppercase text-xs font-sans text-2xs">
          Our latest collections
        </p>
        <h1 className="italic text-6xl">White Dreaming</h1>
        <h2 className="text-accents-0 mt-2 text-lg">
          Dressing well is a form of good manner
        </h2>
        <div className="mt-6 mx-auto">
          <ProductShowcase
            title="ĐẦM SUÔNG VOAN HOA KEM KÈM BELT"
            sizes={['S', 'M']}
            src="/product1.png"
            className="mr-6"
          />
          <ProductShowcase
            title="ĐẦM SUÔNG VOAN HOA KEM KÈM BELT"
            sizes={['S', 'M']}
            src="/product2.png"
          />
        </div>
      </div>
    </div>
  )
}

// Home.Layout = Layout
