import { render } from '@testing-library/react'
import Paragraph from './Paragraph'

describe('UI: Paragraph', () => {
  it('should be able to render the paragraph correctly', () => {
    const content = 'A paragraph is a collection of sentence.'
    const { getByTestId } = render(<Paragraph>{content}</Paragraph>)
    expect(getByTestId('paragraph')).toHaveTextContent(content)
  })
})
