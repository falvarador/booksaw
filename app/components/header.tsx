import { Stack } from '@chakra-ui/react'
import Navbar from './navbar'

export default function Header() {
  return (
    <Stack as='header' bg='primary' align='center'>
      <Navbar />
    </Stack>
  )
}
