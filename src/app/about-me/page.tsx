import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `About Me - ${process.env.APP_NAME}`
}

const AboutMe = () => {
  return <div>AboutMe</div>
}

export default AboutMe
