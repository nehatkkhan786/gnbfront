import { ThemeProvider, createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
      mode: 'dark',
    },
})
const AppThemeProvider = (props) => { 
  return (
    <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>
  )
}

export default AppThemeProvider