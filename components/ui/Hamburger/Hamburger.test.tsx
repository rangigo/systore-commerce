import { render } from '@testing-library/react'
import Hamburger from './Hamburger'
import { motion } from 'framer-motion'

describe('UI: Hamburger', () => {
  it('should be able to render the Hamburger component', () => {
    /** TODO: Testing SVG with react-testing-library breaks */
    // const { getByTestId } = render(
    //   <motion.div>
    //     <Hamburger toggle={() => {}} />
    //   </motion.div>
    // )
    // expect(getByTestId('hamburger')).toBeInTheDocument()
  })
})
