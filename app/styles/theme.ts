import type { ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export const theme: ThemeConfig = extendTheme({
  colors: {
    primary: '#F3F2EC'
  },
  fonts: {
    heading: `'Cormorant Unicase', 'Plus Jakarta Sans', sans-serif`,
    body: `'Cormorant Unicase', 'Plus Jakarta Sans', sans-serif`
  },
  sizes: {
    container: {}
  },
  textStyles: {
    primary: {
      fontFamily: 'Cormorant Unicase'
    },
    secondary: {
      fontFamily: 'Plus Jakarta Sans'
    }
  },
  initialColorMode: 'light',
  useSystemColorMode: true
})
