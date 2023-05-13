import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const theme = extendTheme({
  semanticTokens: {
    colors: {
      button: {
        default: '#14f195',
      },
      text: {
        default: '#ffffff',
        _dark: '#ade3b8',
      },
      accentText: {
        default: '#000000',
      },
      factContainerBackground: {
        default: '#000000',
      },
      heroGradientStart: {
        default: 'rgb(171, 102, 255) ',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: 'rgb(20, 241, 149) ',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
})

export default theme
