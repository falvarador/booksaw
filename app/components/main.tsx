import { HStack, Image, Text, VStack } from '@chakra-ui/react'

import { RxArrowRight } from 'react-icons/rx'

import Background from './background'
import Button from './button'

type MainProps = {
  title: string
  desc: string
  image: string
  imageAlt: string
}

export default function Main({ title, desc, image, imageAlt }: MainProps) {
  return (
    <HStack align='center' as='main' display='flex' justify='space-between'>
      <Background />
      <VStack as='article' spacing={12} alignItems='flex-start'>
        <Text
          as='h2'
          fontSize={'6xl'}
          fontWeight={400}
          noOfLines={2}
          textStyle='tertiary'
          textTransform='capitalize'
        >
          {title}
        </Text>
        <Text textStyle='secondary' textAlign='justify' w='lg'>
          <q>{desc}</q>
        </Text>
        <Button to='/demo' text='READ MORE' icon={RxArrowRight} />
      </VStack>
      <Image objectFit='cover' w='100%' src={image} alt={imageAlt} />
    </HStack>
  )
}
