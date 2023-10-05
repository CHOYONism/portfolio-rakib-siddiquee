'use client'

import Link from 'next/link'
import { Button, Flex, Text, Title } from '@mantine/core'

const Banner = () => {
  return (
    <Flex direction="column" justify="center" align="center" gap={10} h="calc(100vh - 120px)">
      <Title>Rakib Siddiquee</Title>

      <Text>Coding Enthusiast</Text>

      <Button component={Link} href="/contact-me">
        Ask Me A Question
      </Button>
    </Flex>
  )
}

export default Banner
