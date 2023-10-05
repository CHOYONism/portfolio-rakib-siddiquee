'use client'

import { Divider, SimpleGrid, Title } from '@mantine/core'

import ContactMeForm from './Form'
import ContactMeInfo from './Information'

const ContactMeContainer = () => (
  <>
    <Title order={2}>Contact Me</Title>

    <Divider variant="dashed" my="xs" />

    <SimpleGrid cols={{ base: 1, md: 2 }}>
      <ContactMeInfo />
      <ContactMeForm />
    </SimpleGrid>
  </>
)

export default ContactMeContainer
