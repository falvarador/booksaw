import { Container } from '@chakra-ui/react'
import Navbar from './navbar'

export default function Header() {
  return (
    <Container as='header' maxW='8xl' bg='primary'>
      <Navbar />
    </Container>
  )
}
