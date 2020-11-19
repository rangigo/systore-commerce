import Box from './Box'
import { render } from '@testing-library/react'

describe('UI: Box', () => {
  it('should be able to render the box component', () => {
    const { getByTestId } = render(<Box />)
    expect(getByTestId('box')).toBeInTheDocument()
  })
  it('should render the children inside the box component', () => {
    const content = 'this is a text!'
    const { getByTestId } = render(
      <Box>
        <span data-testid="span-test">{content}</span>
      </Box>
    )
    expect(getByTestId('span-test')).toHaveTextContent(content)
  })
})
