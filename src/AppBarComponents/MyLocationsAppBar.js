import React from 'react';
import { AppBar, Button, Container, Divider, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: '100vw'
    },
    button: {
        marginLeft: '10px'
    },

    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
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

                        <Button className={classes.button} color="inherit" variant="outlined">+ Add New Category</Button>

                    </Toolbar>
                </Container>
            </AppBar>

        </>
    );
}

export default MyLocationsAppBar;