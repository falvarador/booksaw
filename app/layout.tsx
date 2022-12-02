import { Container } from '@chakra-ui/react'
import { Outlet } from '@remix-run/react'
import Header from '~/components/header'

export default function Layout() {
  return (
    <Container as='section' maxW='container.xl'>
      <Header />
      <Outlet />
    </Container>
  )
}
