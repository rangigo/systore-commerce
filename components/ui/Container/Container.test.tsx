import { render } from '@testing-library/react'
import Container from './Container'

describe('UI: Container', () => {
  it('should be able to render the container component', () => {
    const { getByTestId } = render(<Container />)
    expect(getByTestId('container')).toBeInTheDocument()
  })
})
