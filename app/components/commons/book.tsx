import { Box, Text, Image, VStack } from '@chakra-ui/react'

type BookProps = {
  author: string
  price: string
  title: string
}

export default function Book({ author, price, title }: BookProps) {
  return (
    <VStack as='article' w='100%' maxW='sm' overflow='hidden'>
      <Box bg='septenary' border='1px solid' borderColor='septenaryStroke'>
        <Image
          src='https://itbook.store/img/books/9781617294136.png'
          alt='book cover'
          w='100%'
          h='100%'
          objectFit='cover'
          filter="drop-shadow='3px 5px 2px rgb(0 0 0 / 0.4)"
        />
      </Box>
      <Box p='4'>
        <Text as='h3' color='quaternary' fontSize={24} textStyle='tertiary'>
          {title}
        </Text>
        <Text
          color='sextenary'
          fontSize='sm'
          mt={2}
          textAlign='center'
          textStyle='secondary'
        >
          {author}
        </Text>
        <Text
          color='sextenary'
          fontSize='sm'
          mt={4}
          textAlign='center'
          textStyle='tertiary'
        >
          ${price}
        </Text>
      </Box>
    </VStack>
  )
}
