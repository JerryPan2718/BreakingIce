import React from 'react';

import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
      h2: {
        fontSize: 72,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        fontWeight: 'bold'
      }

    }
})

const PageTitle = props => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h2" component="h2">
                {props.name}
            </Typography>
        </ThemeProvider>
        
    )
}

export default PageTitle;