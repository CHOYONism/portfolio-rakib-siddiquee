import { Anchor, Text } from '@mantine/core'
import Link from 'next/link'

const Footer = () => (
  <Text ta="center" component="footer" py="xs">
    © {new Date().getFullYear()}{' '}
    <Anchor component={Link} href="/">
      Rakib Siddiquee.
    </Anchor>
    &nbsp;All rights reserved.
  </Text>
)

export default Footer
