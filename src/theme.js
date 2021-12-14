import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            myxs: 320,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    direction: 'rtl',
    typography: {
        "fontFamily": `"Assistant", "Arial", sans-serif, Segoe UI Emoji`,
    },
    palette: {
        primary: {
            main: '#3F51B5',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    }
    ,
    overrides: {
        MuiContainer: {
            root: {
                width: '1080px',
                padding: '0px !important',
                '@media (max-width:960px)': {
                    width: '100vw',
                }
            },
            // maxWidthXs: {
            //     padding: '0px',
            //     width: '600px'
            // },
            // maxWidthSm: {
            //     padding: '0px',
            //     width: '600px'
            // },
            // maxWidthMd: {
            //     padding: '0px',
            //     width: '1080px'
            // },
            maxWidthLg: {
                padding: '0px',
                // width: '1080px'
            },
            // maxWidthXl: {
            //     padding: '0px',
            //     width: '1080px'
            // },
        },
        MuiButtonBase: {
            root: {
                "fontFamily": `"Assistant", "Arial", sans-serif`,
            }
        }
    }
});

export default theme;