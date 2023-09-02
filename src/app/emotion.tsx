'use client'

import { ReactNode } from 'react'
import { CacheProvider } from '@emotion/react'
import { useEmotionCache, MantineProvider } from '@mantine/core'
import { useServerInsertedHTML } from 'next/navigation'

import Structure from '@/components/Structure'

type Props = {
  children: ReactNode
}

const RootStyleRegistry = ({ children }: Props) => {
  const cache = useEmotionCache()
  cache.compat = true

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' ')
      }}
    />
  ))

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Structure>{children}</Structure>
      </MantineProvider>
    </CacheProvider>
  )
}

export default RootStyleRegistry
