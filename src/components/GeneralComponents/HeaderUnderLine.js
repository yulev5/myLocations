import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    HeaderUnderLine: {
        borderRadius: '30px'
    },
}));

function HeaderUnderLine(props) {
    const classes = useStyles();

    return (
        <div className={`${props.className} ${classes.HeaderUnderLine}`} />
    );
}

export default HeaderUnderLine;