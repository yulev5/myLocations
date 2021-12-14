import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import { textColorRegularWhite, TextFontSize24, TextFontWeight600SemiBold } from '../../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    linksHeaderStyle: {
        color: myColors.RegularWhite,
        fontSize: myFontSizes.TextFontSize24,
        fontWeight: myFontWeights.Weight600SemiBold,
    },
}));

function FooterHeader(props) {
    const classes = useStyles();

    return (
        <Typography component="div" className={`${classes.linksHeaderStyle} ${props.className}`}>
            {props.text}
        </Typography>
    );
}

export default FooterHeader;