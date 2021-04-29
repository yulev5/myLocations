import React from 'react';
import { AppBar, Button, Container, Divider, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AppBarButtons from './AppBarButtons';

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: '100vw'
    },
}));

function MyLocationsAppBar(props) {
    const classes = useStyles();

    return (
        <>
            <AppBar position="sticky" className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <Typography variant="h6">
                            Categories
                        </Typography>
                        <Divider orientation="vertical" flexItem style={{ marginLeft: '10px', backgroundColor: '#fff' }} />

                        <AppBarButtons />

                    </Toolbar>
                </Container>
            </AppBar>

        </>
    );
}

export default MyLocationsAppBar;