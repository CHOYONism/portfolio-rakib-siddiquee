import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { Work_Sans, Lora } from 'next/font/google'
import clsx from 'clsx'

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import './globals.css'
import { theme } from '@config/theme'
import AppWrapper from './Wrapper'

const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap'
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rakibsiddiquee.me'),
  title: 'Rakib Siddiquee',
  description: 'Electrical Engineering Graduate | Coding Enthusiast'
}

type PropTypes = {
  children: ReactNode
}

const RootLayout = ({ children }: PropTypes) => (
  <html lang="en" className={clsx(work_sans.variable, lora.variable)}>
    <head>
      <ColorSchemeScript defaultColorScheme="auto" />
    </head>

    <body suppressHydrationWarning>
      <MantineProvider theme={theme} defaultColorScheme="auto" classNamesPrefix="rs">
        <Notifications />

        <ModalsProvider>
          <AppWrapper>{children}</AppWrapper>
        </ModalsProvider>
      </MantineProvider>
    </body>
  </html>
)

export default RootLayout
