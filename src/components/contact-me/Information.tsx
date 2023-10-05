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
            <Text>+36 20 483 9943</Text>
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
            <Text>rakibul.islam.siddiquee@gmail.com</Text>
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
            <Anchor target="_blank" href="https://www.facebook.com/rakibul.islam.siddiquee">
              Rakib Siddiquee
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
            <Anchor target="_blank" href="https://www.linkedin.com/in/rakibulislamsiddiquee/">
              Md Rakibul Islam Siddiquee
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
            <Anchor target="_blank" href="https://github.com/CHOYONism">
              Rakib Siddiquee
            </Anchor>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  </Paper>
)

export default ContactMeInfo
