import { render } from '@testing-library/react'
import SideNav from './SideNav'

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => {
    return children
  }
})

describe('SideNav Component', () => {
  it('should render the SideNav component correctly', () => {
    const { getByTestId } = render(<SideNav />)
    expect(getByTestId('sidenav')).toBeInTheDocument()
  })
})
