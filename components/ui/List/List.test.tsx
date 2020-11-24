import { render } from '@testing-library/react'
import List from './List'

describe('UI: List', () => {
  it('should be able to render the list component', () => {
    const { getByTestId } = render(<List>A list</List>)
    expect(getByTestId('list')).toBeInTheDocument()
    expect(getByTestId('list')).toHaveTextContent('A list')
  })

  it('should be able to render the Item component', () => {
    const { getByTestId, getAllByTestId } = render(
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
      </List>
    )
    expect(getByTestId('list')).toBeInTheDocument()
    expect(getAllByTestId('item').length).toBe(3)
  })
})
