import { HStack, Image, Text, VStack } from '@chakra-ui/react'

import Background from './background'
import Button from './button'

export default function Main() {
  return (
    <HStack
      align='center'
      as='main'
      display='flex'
      flexShrink='1'
      justify='space-between'
      mt={48}
    >
      <Background />
      <VStack as='aside' spacing={12} alignItems='flex-start'>
        <Text
          as='h2'
          fontSize={'6xl'}
          fontWeight={400}
          noOfLines={2}
          textStyle='tertiary'
          textTransform='capitalize'
        >
          Life of the wild
        </Text>
        <Text textStyle='secondary' textAlign='justify' w='lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
          magna velit eleifend. Amet, quis urna, a eu.
        </Text>
        <Button />
      </VStack>
      <Image
        objectFit='cover'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
      />
    </HStack>
  )
}
