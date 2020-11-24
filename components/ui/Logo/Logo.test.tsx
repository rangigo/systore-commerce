import { render } from '@testing-library/react'
import Logo from './Logo'

describe('UI: Logo', () => {
  it('should be able to render the logo', () => {
    const { getByTestId } = render(<Logo />)
    expect(getByTestId('logo')).toBeInTheDocument()
  })
})
