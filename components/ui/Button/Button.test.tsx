import { render } from '@testing-library/react'
import Button from './Button'

describe('UI: Button', () => {
  it('should be able to render the button', () => {
    const content = 'Click me'
    const { getByTestId } = render(<Button>{content}</Button>)
    expect(getByTestId('button')).toBeInTheDocument()
    expect(getByTestId('button')).toHaveTextContent(content)
  })
})
