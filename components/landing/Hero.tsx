import ProductShowcase from '@components/product/ProductShowcase/ProductShowcase'
import { Box, Heading, Paragraph } from '@components/ui'
import React from 'react'

export default function Hero() {
  return (
    <Box className="bg-primary">
      <Box className="text-center mx-auto pt-20">
        <Paragraph className="uppercase font-sans text-2xs">
          Our latest collections
        </Paragraph>
        <Heading className="italic text-6xl">White Dreaming</Heading>
        <Heading className="text-accents-0 mt-2 text-lg">
          Dressing well is a form of good manner
        </Heading>
        <Box className="mt-6 mx-auto">
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
        </Box>
      </Box>
    </Box>
  )
}
