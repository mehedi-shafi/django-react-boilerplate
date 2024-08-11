import React from 'react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0d1b2a',
        },
        secondary: {
            main: '#778da9',
        },
        text: {
            main: '#00171f',
            title: '#caf0f8',
            white: '#ffffff',
        },
        button: {
            main: '#1b263b',
        },
        topbar: {
            main: '#013a63',
        },
    },
});

export default theme;
