import { fireEvent, render } from '@testing-library/react'
import { Router } from 'next/router'
import TextLink from './TextLink'

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => {
    return children
  }
})

describe('Test Link Component', () => {
  const spies: any = {}

  beforeEach(() => {
    spies.routerChangeStart = jest.fn()
    Router.events.on('routeChangeStart', spies.routerChangeStart)
  })

  afterEach(() => {
    Router.events.off('routeChangeStart', spies.routerChangeStart)
  })

  it('should be able to render the TextLink component correclty', () => {
    const { getByTestId } = render(<TextLink href="/">Home</TextLink>)
    expect(getByTestId('text-link')).toBeInTheDocument()
  })

  it('should be able to render the children component', () => {
    const { getByTestId } = render(
      <TextLink href="/">
        <span data-testid="test-link">Link</span>
      </TextLink>
    )
    expect(getByTestId('text-link')).toBeInTheDocument()
    expect(getByTestId('test-link')).toHaveTextContent('Link')
  })
})
