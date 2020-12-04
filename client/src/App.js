import React from 'react';
import { Container, Typography, Grid, } from '@material-ui/core';
import './App.css';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


// const theme = createMuiTheme({
//     typography: {
//         fontFamily: [
//             'Brush Script MT', 'Brush Script Std', 'cursive'
//         ].join(','),
//     },
// });

const App = () => {
    return (
        <Container maxWidth="lg">

            <h1><strong>The Journo 📓</strong></h1>

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


        </Container>
    )
}
export default App;