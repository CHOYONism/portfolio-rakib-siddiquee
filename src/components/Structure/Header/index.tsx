import { Anchor, Image, Group } from '@mantine/core'
import Link from 'next/link'

const array = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about-me' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Blogs', url: '/blogs' },
  { title: 'Contact', url: '/contact-me' }
]

const Header = () => (
  <Group justify="space-between" pos="sticky" top={0}>
    <Image src="/logo.svg" alt="logo" height={48} width="auto" />

    <Group>
      {array.map(({ title, url }, index) => (
        <Anchor component={Link} href={url} key={index}>
          {title}
        </Anchor>
      ))}
    </Group>
  </Group>
)

export default Header
