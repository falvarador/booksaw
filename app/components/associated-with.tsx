import { HStack } from '@chakra-ui/react'

import Icon from './icons/icon'

export default function AssociatedWith() {
  return (
    <HStack
      as='section'
      bgColor='quintenary'
      justify='space-evenly'
      align='center'
      mt='24'
      p={16}
    >
      <Icon icon={1} alt='Booksaw' />
      <Icon icon={2} alt='Bookstore' />
      <Icon icon={3} alt='Bookdoor' />
      <Icon icon={4} alt='Library' />
      <Icon icon={5} alt='Flaprise' />
    </HStack>
  )
}
