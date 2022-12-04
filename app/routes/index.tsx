import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'

import { Container } from '@chakra-ui/react'

import type { LoaderData } from '~/types/loader'

import { getBook } from '~/services/book.server'

import AssociatedWith from '~/components/associated-with'
import FeatureBooks from '~/components/feature-books'
import Main from '~/components/main'

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    book: await getBook('9781484254455')
  })
}

export default function Index() {
  const { book } = useLoaderData()
  const { title, desc, image, imageAlt } = book

  return (
    <>
      <Container as='section' maxW='container.xl'>
        <Main
          title={title}
          desc={desc}
          image={image}
          imageAlt={imageAlt}
        ></Main>
      </Container>
      <AssociatedWith />
      <FeatureBooks />
    </>
  )
}
