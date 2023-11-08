'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import DrawerAppBar from '@/components/DrawerAppBar';

function Theme({ children, }: { children: React.ReactNode }) {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#adba7e'
      },
      background: {
        default: '#232323'
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerAppBar />
        {children}
    </ThemeProvider>
  )
}

export default Theme