import { Anchor } from '@mantine/core/'
import Link from 'next/link'

const Footer = () => (
  <div>
    © 2023 - {new Date().getFullYear()}{' '}
    <Anchor component={Link} href="/">
      Rakib Siddiquee.
    </Anchor>
    All rights reserved.
  </div>
)

export default Footer
