import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#fff',
      },
    },
});

const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
            {children}
        </ThemeProvider>
      );
}

export default AppTheme;