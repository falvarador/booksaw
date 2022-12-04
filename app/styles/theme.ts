import type { ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const primary = '#F3F2EC'
const secondary = '#232323'

export const theme: ThemeConfig = extendTheme({
  colors: {
    primary,
    secondary,
    tertiary: '#C0C0C0',
    tertiaryAlpha: '#C0C0C050',
    quaternary: '#74642F',
    quintenary: '#EDEBE4',
    sextenary: '#7A7A7A',
    septenary: '#EFEEE8',
    septenaryStroke: '#EAE8DF'
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
