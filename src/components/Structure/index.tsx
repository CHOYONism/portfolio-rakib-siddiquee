import { ReactNode } from 'react'
import { Container } from '@mantine/core'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

const Structure = ({ children }: Props) => (
  <Container>
    <Header />
    <main>{children}</main>
    <Footer />
  </Container>
)

export default Structure
