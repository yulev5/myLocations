import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const stripHeight = '500px';

const useStyles = makeStyles((theme) => ({
    FullWidthHorizontalContainerDivStyle: {
    },
    StripStyle: {
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '0px !important',
        boxShadow: '0px 3px 6px #00000082',
    },
    MUIConatinerStyle: {
    }
}));

function FullWidthHorizontalSection(props) {
    const classes = useStyles();

    return (
        <div
            className={`${classes.FullWidthHorizontalContainerDivStyle} ${props.className}`}>

            <div
                className={`${classes.StripStyle} ${props.className}`}>
                <Container className={classes.MUIConatinerStyle}>
                    {props.children}
                </Container>
            </div>

        </div>
    );
}

export default FullWidthHorizontalSection;