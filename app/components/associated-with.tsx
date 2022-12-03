import { HStack } from '@chakra-ui/react'
import Icon1 from './icons/icon1'
import Icon2 from './icons/icon2'
import Icon3 from './icons/icon3'
import Icon4 from './icons/icon4'
import Icon5 from './icons/icon5'

export default function AssociatedWith() {
  return (
    <HStack
      as='section'
      h='64'
      bgColor='quintenary'
      justify='space-evenly'
      align='center'
    >
      <Icon1 />
      <Icon2 />
      <Icon3 />
      <Icon4 />
      <Icon5 />
    </HStack>
  )
}
