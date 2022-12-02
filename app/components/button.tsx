import { Button as ChakraButton } from '@chakra-ui/react'
import { RxArrowRight } from 'react-icons/rx'

export default function Button() {
  return (
    <ChakraButton
      rightIcon={<RxArrowRight />}
      borderRadius='none'
      colorScheme='primary'
      fontWeight={400}
      py={6}
      textStyle='secondary'
      textTransform='uppercase'
      variant='outline'
      w='44'
    >
      READ MORE
    </ChakraButton>
  )
}
