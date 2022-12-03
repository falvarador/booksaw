import type { ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const primary = '#F3F2EC'
const secondary = '#232323'
const tertiary = '#C0C0C0'
const tertiaryAlpha = '#C0C0C050'
const quaternary = '#74642F'
const quintenary = '#EDEBE4'

export const theme: ThemeConfig = extendTheme({
  colors: {
    primary,
    secondary,
    tertiary,
    tertiaryAlpha,
    quaternary,
    quintenary
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
