import { useLoaderData } from '@remix-run/react'
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

import { theme } from '~/styles/theme'

import Document from '~/layouts/document'
import Layout from '~/layouts/layout'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  encoding: 'utf-8',
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
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet'
    }
  ]
}

export const loader: LoaderFunction = async ({ request }) => {
  return request.headers.get('cookie') ?? ''
}

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
