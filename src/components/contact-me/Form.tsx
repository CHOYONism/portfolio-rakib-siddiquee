import { useForm, yupResolver } from '@mantine/form'
import { Button, Paper, Select, SimpleGrid, TextInput, Textarea } from '@mantine/core'
import { BsFillSendFill as SendIcon } from 'react-icons/bs'

import ContactMeSchema from './schema'

const ContactMeForm = () => {
  const { onSubmit, getInputProps, reset } = useForm({
    validate: yupResolver(ContactMeSchema),
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  })

  const submitHandler = (val: any) => {}

  return (
    <Paper component="form" p="md" shadow="xs" onSubmit={onSubmit(submitHandler)}>
      <SimpleGrid spacing="xs">
        <TextInput label="Name" placeholder="John Doe" {...getInputProps('name')} />

        <TextInput label="Email" placeholder="user@domain.com" {...getInputProps('email')} />

        <Select
          label="Topic"
          placeholder="Pick a topic"
          data={['Web Development', 'University Project', 'Others']}
          {...getInputProps('subject')}
        />

        <Textarea label="Message" placeholder="Write your words..." rows={4} {...getInputProps('message')} />

        <Button type="submit" rightSection={<SendIcon />} tt="uppercase" mt={8}>
          Send
        </Button>
      </SimpleGrid>
    </Paper>
  )
}

export default ContactMeForm
