import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'

type HeadingProps = {
  as: string | any
  children: ReactNode
}

export default function Heading({ as, children }: HeadingProps) {
  return (
    <Box as={as} textStyle='tertiary' fontSize='3rem'>
      {children}
    </Box>
  )
}
