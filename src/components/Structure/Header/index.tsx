import { Anchor, Image, Flex, Group } from '@mantine/core'
import Link from 'next/link'

const array = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about-me' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Blogs', url: '/blogs' },
  { title: 'Contact', url: '/contact-me' }
]

const Header = () => (
  <Flex justify="space-between">
    <Image src="/logo.svg" alt="logo" height={48} width="auto" />

    <Group>
      {array.map(({ title, url }) => (
        <Anchor component={Link} href={url}>
          {title}
        </Anchor>
      ))}
    </Group>
  </Flex>
)

export default Header
