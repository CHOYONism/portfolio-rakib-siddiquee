import type { Metadata } from 'next'

import ContactMeContainer from '@components/contact-me'

export const metadata: Metadata = {
  title: `Contact Me - ${process.env.APP_NAME}`
}

const ContactMe = () => {
  return <ContactMeContainer />
}

export default ContactMe
