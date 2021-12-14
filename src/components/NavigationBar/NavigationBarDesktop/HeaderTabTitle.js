import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { textColorDarkBlueOuterSpace, textColorLightGreyWildSand, TextFontSize18, TextFontWeight500, TextFontWeight600SemiBold } from '../../Styles/MyStyles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    HeaderLinkStyle: {
        height: '100%',
        lineHeight: '54px',
        letterSpacing: '0.235px'
    },
    HeaderLinkStyleHovered: {
        height: '100%',
        lineHeight: '54px',
        letterSpacing: '0px',
        cursor: 'pointer',
        userSelect: 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': 'none',
        '-webkit-user-select': 'none',
        '-webkit-touch-callout': 'none',
    },
    TextFontSize18,
    textColorLightGreyWildSand,
    TextFontWeight600SemiBold,
    TextFontWeight500,
    textColorDarkBlueOuterSpace
}))


function HeaderTabTitle(props) {
    const classes = useStyles();

    let headerLinkStyle = (props.hovered) ? classes.HeaderLinkStyleHovered : classes.HeaderLinkStyle;
    let isTextBold = (props.isBold || props.hovered) ? classes.TextFontWeight600SemiBold : classes.TextFontWeight500;
    let textColor = props.hovered ? classes.textColorDarkBlueOuterSpace : classes.textColorLightGreyWildSand;

    return (
        <Typography className={`${headerLinkStyle} ${classes.TextFontSize18} ${textColor} ${isTextBold}`}>
            {props.linkText}
        </Typography>
    );
}

export default HeaderTabTitle;

