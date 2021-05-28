import { createMuiTheme } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';


const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#FCCE01',
        },
        secondary: {
          main: '#f50057',
        },
      },
    shadows,
    typography
});

export default theme;