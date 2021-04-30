import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            dark: '#1c2025',
        },
        primary: {
            main: '#8a85ff'
        },
        secondary: {
            main: '#8a85ff'
        },
        text: {
            primary: '#e6e5e8',
            secondary: '#adb0bb'
        },
        initial: {
            default: '#e6e5e8'
        }
    },
    shadows,
    typography
});

export default theme;