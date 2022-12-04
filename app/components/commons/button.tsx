import { Box } from '@chakra-ui/react'
import { Link } from '@remix-run/react'

import type { IconType } from 'react-icons/lib'

type ButtonProps = {
  icon: IconType
  text: string
  to: string
}

export default function Button({ icon, text, to }: ButtonProps) {
  return (
    <Box
      _hover={{ bg: 'tertiaryAlpha' }}
      alignItems='center'
      as={Link}
      to={to}
      bg='transparent'
      border='1px'
      borderColor='tertiary'
      color='black'
      cursor='pointer'
      display='flex'
      fontSize={14}
      fontWeight={400}
      h={14}
      justifyContent='center'
      p={4}
      px='8px'
      py={6}
      textAlign='center'
      textStyle='secondary'
      textTransform='uppercase'
      transition='0.2s'
      w='44'
    >
      {text}
      <Box as={icon} ml={2} />
    </Box>
  )
}
