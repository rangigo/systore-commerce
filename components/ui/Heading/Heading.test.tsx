import { render } from '@testing-library/react'
import Heading from './Heading'

describe('UI: Heading', () => {
  it('should render the heading component', () => {
    const { getByTestId } = render(<Heading></Heading>)
    expect(getByTestId('heading')).toBeInTheDocument()
  })
})
