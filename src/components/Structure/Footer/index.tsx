import { Anchor, Text } from '@mantine/core/'
import Link from 'next/link'

const Footer = () => (
  <Text align="center">
    © 2023 - {new Date().getFullYear()}{' '}
    <Anchor component={Link} href="/">
      Rakib Siddiquee.
    </Anchor>
    &nbsp;All rights reserved.
  </Text>
)

export default Footer
