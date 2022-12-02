import type { ThemeConfig } from '@chakra-ui/react'
import { color, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const primary = '#F3F2EC'
const secondary = '#232323'

export const theme: ThemeConfig = extendTheme({
  colors: {
    primary,
    secondary
  },
  fonts: {
    heading: `'Cormorant Unicase', 'Plus Jakarta Sans', 'Prata', sans-serif`,
    body: `'Cormorant Unicase', 'Plus Jakarta Sans', 'Prata', sans-serif`
  },
  sizes: {
    container: {}
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode(primary, secondary)(props)
      }
    })
  },
  textStyles: {
    primary: {
      fontFamily: 'Cormorant Unicase'
    },
    secondary: {
      fontFamily: 'Plus Jakarta Sans'
    },
    tertiary: {
      fontFamily: 'Prata'
    }
  },
  initialColorMode: 'light',
  useSystemColorMode: false
})
