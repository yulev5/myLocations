import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes } from 'components/Styles/Sizes';
import React from 'react';
import { textColorRegularWhite, TextFontSize18 } from '../../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    linksHeaderStyle: {
        fontSize: myFontSizes.TextFontSize16,
        color: myColors.RegularWhite,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize18,
        }
    },
    TextFontSize18,
}));

function FooterText(props) {
    const classes = useStyles();

    return (
        <Typography
            component="div"
            className={`${props.className} ${classes.linksHeaderStyle}`}>
            {props.text}
        </Typography>
    );
}

export default FooterText;