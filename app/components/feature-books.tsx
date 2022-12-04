import { HStack, Text, VStack } from '@chakra-ui/react'

import Book from './commons/book'
import Heading from './commons/heading'

const subtitle = 'Some quality items'.toUpperCase()

export default function FeatureBooks() {
  return (
    <VStack as='section' justify='space-evenly' align='center' mt='32'>
      <Text textStyle='secondary' fontSize='sm' color='sextenary' mb={2}>
        {subtitle}
      </Text>
      <Heading as='h2'>Featured Books</Heading>
      <HStack>
        <Book
          author='Armor Ramsey'
          price='40.00'
          title='Simple way of piece life'
        />
      </HStack>
    </VStack>
  )
}
