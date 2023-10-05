import AboutMeIntro from '@components/about-me/Intro'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `About Me - ${process.env.APP_NAME}`
}

const AboutMe = () => <AboutMeIntro />

export default AboutMe
