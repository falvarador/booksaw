import type { ReactNode } from 'react'

import { Link as ChakraLink } from '@chakra-ui/react'

import { NavLink } from '@remix-run/react'

type LinkProps = {
  children: ReactNode | string
  to: string
}

export default function Link({ children, to }: LinkProps) {
  return (
    <ChakraLink as={NavLink} to={to} _activeLink={{ color: 'quaternary' }}>
      {children}
    </ChakraLink>
  )
}
