import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import Layout from './layouts/layout'

import styles from './styles/app.css'

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
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet'
    },
    { rel: 'stylesheet', href: styles }
  ]
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='bg-primary font-prata'>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
