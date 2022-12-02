import { Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'
import { NavLink } from '@remix-run/react'

export default function Navbar() {
  return (
    <Stack
      align='center'
      as='nav'
      direction='row'
      h={12}
      justifyContent='space-between'
      w='60vw'
    >
      <Heading as='h1' fontSize='3rem'>
        Book
        <Text display='inline' fontWeight='light'>
          saw
        </Text>
      </Heading>
      <HStack
        fontWeight='regular'
        letterSpacing='12%'
        spacing={12}
        textStyle='secondary'
        textTransform='uppercase'
      >
        <Link as={NavLink} to='/' variant='link'>
          Home
        </Link>
        <Link as={NavLink} to='/books' variant='link'>
          Books
        </Link>
        <Link as={NavLink} to='/about' variant='link'>
          About
        </Link>
        <Link as={NavLink} to='/contact' variant='link'>
          Contact
        </Link>
      </HStack>
    </Stack>
  )
}
