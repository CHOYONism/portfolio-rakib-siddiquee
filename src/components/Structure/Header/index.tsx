import Link from 'next/link'
import { Anchor, Image, Group, Title, useComputedColorScheme, useMantineColorScheme, ActionIcon } from '@mantine/core'
import { BsMoon as DarkIcon, BsSun as LightIcon } from 'react-icons/bs'

const array = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about-me' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Blogs', url: '/blogs' },
  { title: 'Contact', url: '/contact-me' }
]

const Header = () => {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
  const { setColorScheme } = useMantineColorScheme()

  return (
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

        <ActionIcon
          variant="light"
          aria-label="color-theme"
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        >
          {computedColorScheme === 'light' ? <DarkIcon /> : <LightIcon />}
        </ActionIcon>
      </Group>
    </Group>
  )
}

export default Header
