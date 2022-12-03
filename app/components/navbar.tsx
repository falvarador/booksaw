import { Heading, HStack, Stack, Text } from '@chakra-ui/react'

import Link from './link'

export default function Navbar() {
  return (
    <Stack
      align='center'
      as='nav'
      direction='row'
      justifyContent='space-between'
      w='100%'
      px={4}
    >
      <Heading as='h1' fontSize='3rem'>
        Book
        <Text display='inline' fontWeight='light'>
          saw
        </Text>
      </Heading>
      <HStack
        fontWeight='regular'
        letterSpacing='4'
        spacing={12}
        textStyle='secondary'
        textTransform='uppercase'
      >
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/books'>Books</Link>
        <Link to='/contact'>Contact</Link>
      </HStack>
    </Stack>
  )
}
