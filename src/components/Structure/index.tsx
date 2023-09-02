import { ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

const Structure = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Structure
