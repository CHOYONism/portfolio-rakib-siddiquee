'use client'

import { Divider, Flex, Group, Image, SimpleGrid, Text, Title } from '@mantine/core'

const AboutMeIntro = () => (
  <Group align="center" h="calc(100vh - 10rem)">
    <SimpleGrid cols={2} spacing="xl">
      <Image src="/chayon.webp" alt="Chayon" radius="md" />

      <Flex direction="column" justify="center">
        <Title mb="xs">This is Rakib Siddiquee</Title>
        <Title order={4}>Exploring the world of web development</Title>

        <Divider variant="dashed" my="md" />

        <Text ta="justify">
          Lorem Ipsum is simply dummy text of the printing and dard dummy text ever since the 1500 when an uniknown
          specimen book has not only five.
        </Text>
      </Flex>
    </SimpleGrid>
  </Group>
)

export default AboutMeIntro
