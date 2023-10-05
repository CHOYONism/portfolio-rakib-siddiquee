import { Anchor, Paper, Table, Text } from '@mantine/core'
import { BsTelephoneFill, BsLinkedin, BsGithub } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
import { IoMdMail } from 'react-icons/io'

const ContactMeInfo = () => (
  <Paper p="md" shadow="xs">
    <Table withRowBorders={false} verticalSpacing="xs">
      <Table.Tbody>
        <Table.Tr>
          <Table.Th>
            <BsTelephoneFill size="1.2rem" />
          </Table.Th>

          <Table.Td>
            <Text size="xs" c="dimmed">
              Cell Number
            </Text>
            <Text>+77 022 177 05 05</Text>
          </Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>
            <IoMdMail size="1.2rem" />
          </Table.Th>

          <Table.Td>
            <Text size="xs" c="dimmed">
              Email
            </Text>
            <Text>mail@gmail.com</Text>
          </Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>
            <ImFacebook2 size="1.2rem" />
          </Table.Th>

          <Table.Td>
            <Text size="xs" c="dimmed">
              Facebook
            </Text>
            <Anchor target="_blank" href="#">
              Some URL
            </Anchor>
          </Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>
            <BsLinkedin size="1.2rem" />
          </Table.Th>

          <Table.Td>
            <Text size="xs" c="dimmed">
              LinkedIn
            </Text>
            <Anchor target="_blank" href="#">
              Some URL
            </Anchor>
          </Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>
            <BsGithub size="1.2rem" />
          </Table.Th>

          <Table.Td>
            <Text size="xs" c="dimmed">
              GitHub
            </Text>
            <Anchor target="_blank" href="#">
              Some URL
            </Anchor>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  </Paper>
)

export default ContactMeInfo
