import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    linksHeaderStyle: {
        fontSize: myFontSizes.TextFontSize16,
        fontWeight: myFontWeights.Weight500,
        color: myColors.RegularWhite,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize24,
        }
    },
}));

function FooterTextBig(props) {
    const classes = useStyles();

    return (
        <Typography component="div" className={`${props.className} ${classes.linksHeaderStyle}`}>
            {props.text}
        </Typography>
    );
}

export default FooterTextBig;