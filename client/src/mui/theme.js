import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#8BC34A',
      light: '#DCEDC8',
      dark: '#689F38'
    },
    secondary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000'
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
