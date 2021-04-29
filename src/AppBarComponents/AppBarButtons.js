import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '10px'
    },
}));

function AppBarButtons(props) {
    const classes = useStyles();

    return (
        <>
            <Button className={classes.button} color="inherit" variant="outlined">
                + Add New Category
            </Button>
        </>
    );
}

export default AppBarButtons;