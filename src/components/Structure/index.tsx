import { ReactNode } from 'react'
import { Container } from '@mantine/core'

import Header from './Header'
import Footer from './Footer'

type PropTypes = {
  children: ReactNode
}

const Structure = ({ children }: PropTypes) => (
  <Container pos="relative">
    <Header />
    <main>{children}</main>
    <Footer />
  </Container>
)

export default Structure
