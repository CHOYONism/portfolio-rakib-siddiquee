'use client'

import { Button, Container, Flex, Image, Paper, SimpleGrid, Text, Title } from '@mantine/core'

const AboutMeIntro = () => (
  <Container>
    <SimpleGrid cols={2}>
      <Paper>
        <Flex direction="column" justify="center" gap="sm">
          <Image src="/AboutMeSampleAvatar.avif" alt="404" />
          <Button>Get Resume</Button>
        </Flex>
      </Paper>

      <Flex direction="column" justify="center" gap="sm">
        <Title>This is Rakib Siddiquee</Title>
        <Title order={4}>Exploring the world of web developing.</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and dard dummy text ever since the 1500 when an uniknown
          specimen book has not only five.
        </Text>
      </Flex>
    </SimpleGrid>
  </Container>
)

export default AboutMeIntro
