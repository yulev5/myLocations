import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import { textColorRegularWhite, TextFontSize32, TextFontWeight600SemiBold } from '../../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    linksHeaderStyle: {
        color: myColors.RegularWhite,
        fontSize: myFontSizes.TextFontSize16,
        fontWeight: myFontWeights.Weight700Bold,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize32,
            fontWeight: myFontWeights.Weight600SemiBold,
        }
    },
    textColorRegularWhite,
    TextFontSize32,
    TextFontWeight600SemiBold
}));

function FooterHeaderBig(props) {
    const classes = useStyles();

    return (
        <Typography
            component="div"
            className={`${props.className} ${classes.linksHeaderStyle}`}>
            {props.text}
        </Typography>
    );
}

export default FooterHeaderBig;