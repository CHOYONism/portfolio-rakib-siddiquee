import * as Yup from 'yup'

const ContactMeSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),

  email: Yup.string().required('Email is required').email('Invalid email address'),

  subject: Yup.string()
    .required('Topic is required')
    .oneOf(['Web Development', 'University Project', 'Others'], 'Invalid topic selection'),

  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must not exceed 500 characters')
})

export default ContactMeSchema
