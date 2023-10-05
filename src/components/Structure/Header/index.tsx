import { Anchor, Image, Group, Title } from '@mantine/core'
import Link from 'next/link'

const array = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about-me' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Blogs', url: '/blogs' },
  { title: 'Contact', url: '/contact-me' }
]

const Header = () => (
  <Group justify="space-between" pos="sticky" top={0} py="xs">
    <Group gap="xs">
      <Image src="/logo.png" alt="logo" height={48} width="auto" />
      <Title size={24}>Rakib Siddiquee</Title>
    </Group>

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
