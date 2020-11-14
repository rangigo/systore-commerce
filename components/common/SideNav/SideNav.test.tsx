import { render } from '@testing-library/react'
import SideNav from './SideNav'

describe('SideNav Component', () => {
  it('should render the SideNav component correctly', () => {
    const { getByTestId } = render(<SideNav />)
    expect(getByTestId('sidenav')).toBeInTheDocument()
  })
})
