import { render } from '@testing-library/react'
import ProductShowcase from './ProductShowcase'

const props = {
  title: 'Black Male Uniqlo T-shirt',
  sizes: ['S', 'M'],
  src: '/product1.png',
}

describe('Product Showcase', () => {
  it('should be able to render the product showcase component correctly', () => {
    const { getByTestId } = render(<ProductShowcase {...props} />)
    expect(getByTestId('product-showcase')).toBeInTheDocument()
  })
})
