'use client'

import { Container, Flex, Image, SimpleGrid, Text, Title } from '@mantine/core'

const NotFoundComp = () => (
  <Container>
    <SimpleGrid cols={2}>
      <Flex direction="column" justify="center" gap="sm">
        <Title>Sorry!</Title>
        <Title order={4}>This Page is Not Found.</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and dard dummy text ever since the 1500 when an uniknown
          specimen book has not only five.
        </Text>
      </Flex>

      <Image src="/404.png" alt="404" />
    </SimpleGrid>
  </Container>
)

export default NotFoundComp
