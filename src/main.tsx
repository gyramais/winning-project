import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Widget from './components/Widged/Widget'
import "./index.css"

const theme = createTheme({
  shape: {
    borderRadius: 20
  },
  palette: {
    primary: {
      main: '#0BB599'
    }
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 16
        }
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          width: 56,
          height: 56,
          borderRadius: 10,
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Widget />
    </ThemeProvider>
  </React.StrictMode>
)
