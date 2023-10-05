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
          I am currently in my final year studying Electrical and Electronic Engineering at the University of Debrecen.
          My academic journey has ignited a passion for coding, particularly in the realm of Embedded Systems and IoT
          solutions. As a result, I am expanding my skill set by learning web development and pursuing a Master's in
          Data Science. I see Data Science as the ideal fusion of my electrical engineering knowledge and programming
          enthusiasm, and I am excited about the potential it holds.
        </Text>
      </Flex>
    </SimpleGrid>
  </Group>
)

export default AboutMeIntro
