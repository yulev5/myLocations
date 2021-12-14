import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    linksHeaderStyle: {
        fontSize: myFontSizes.TextFontSize16,
        fontWeight: myFontWeights.Weight700Bold,
        color: myColors.RegularWhite,
        [theme.breakpoints.up('md')]: {
            fontWeight: myFontWeights.Weight600SemiBold,
            fontSize: myFontSizes.TextFontSize18,
        }
    },
}));

function FooterSubHeader(props) {
    const classes = useStyles();

    return (
        <Typography component="div" className={`${props.className} ${classes.linksHeaderStyle}`}>
            {props.text}
        </Typography>
    );
}

export default FooterSubHeader;