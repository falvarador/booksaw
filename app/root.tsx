// root.tsx
import React, { useContext, useEffect } from 'react'

import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction
} from '@remix-run/node' // Depends on the runtime you choose

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import { withEmotionCache } from '@emotion/react'

import { ServerStyleContext, ClientStyleContext } from '~/styles/context'
import { theme } from '~/styles/theme'

import Layout from '~/layout'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Booksaw | A better way to get your next free ebook',
  viewport: 'width=device-width,initial-scale=1'
})

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300;400;500;600;700&display=swap" rel="stylesheet'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap" rel="stylesheet'
    }
  ]
}

export const loader: LoaderFunction = async ({ request }) => {
  return request.headers.get('cookie') ?? ''
}

interface DocumentProps {
  children: React.ReactNode
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext)
    const clientStyleData = useContext(ClientStyleContext)

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head
      // re-inject tags
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach(tag => {
        ;(emotionCache.sheet as any)._insertTag(tag)
      })
      // reset cache to reapply global styles
      clientStyleData?.reset()
    }, [])

    return (
      <html lang='en'>
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
)

export default function App() {
  const cookies = useLoaderData()

  return (
    <Document>
      <ChakraProvider
        theme={theme}
        colorModeManager={
          typeof cookies === 'string'
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager
        }
      >
        <Layout />
      </ChakraProvider>
    </Document>
  )
}
