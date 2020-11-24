import { render } from '@testing-library/react'
import Text from './Text'

describe('UI: Text', () => {
  it('should render the text component correctly', () => {
    const content = 'A sample text'
    const { getByTestId } = render(<Text>{content}</Text>)
    expect(getByTestId('text')).toBeInTheDocument()
    expect(getByTestId('text')).toHaveTextContent(content)
  })
})
