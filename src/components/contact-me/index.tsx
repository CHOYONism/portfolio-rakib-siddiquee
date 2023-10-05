'use client'

import { Box, Divider, Flex, Group, SimpleGrid, Title } from '@mantine/core'

import ContactMeForm from './Form'
import ContactMeInfo from './Information'

const ContactMeContainer = () => (
  <Flex align="center" h="calc(100vh - 10rem)">
    <Box w="100%">
      <Title order={2} mb="xs">
        Contact Me
      </Title>

      <Divider variant="dashed" mb="md" />

      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <ContactMeInfo />
        <ContactMeForm />
      </SimpleGrid>
    </Box>
  </Flex>
)

export default ContactMeContainer
