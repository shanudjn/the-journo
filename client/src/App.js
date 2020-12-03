import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, ThemeProvider, createMuiTheme } from '@material-ui/core';
import './App.css';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Brush Script MT', 'Brush Script Std', 'cursive'
        ].join(','),
    },
});

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <ThemeProvider theme={theme}><Typography variant="h2" align="center">The Journo</Typography></ThemeProvider>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItem="stretch" spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}
export default App;