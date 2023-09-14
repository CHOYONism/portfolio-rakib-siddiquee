'use client'

import { Button, Flex, Text, Title } from '@mantine/core'

const Banner = () => {
  return (
    <Flex direction="column" justify="center" align="center" gap={10} style={{ height: '100vh' }}>
      <Title>Rakib Siddiquee</Title>

      <Text>Lorem Ipsum</Text>

      <Button>Ask Me A Question</Button>
    </Flex>
  )
}

export default Banner
