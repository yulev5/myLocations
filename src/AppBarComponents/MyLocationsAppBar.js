import { AppBar, Container, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    appBar:{
        width:'100vw'
    },
}));

function MyLocationsAppBar(props) {
    const classes = useStyles();

    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Container>
                <Toolbar>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default MyLocationsAppBar;