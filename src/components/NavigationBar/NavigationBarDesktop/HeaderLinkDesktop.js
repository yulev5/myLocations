import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { TextFontWeight600SemiBold, textColorDarkBlueOuterSpace, textColorLightGreyWildSand, TextFontSize18, TextFontWeight500, TextFontWeight700Bold } from '../../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    HeaderLinkStyle: {
        height: '100%',
        lineHeight: '54px',
        letterSpacing: '0.235px'
    },
    HeaderLinkStyleHovered: {
        height: '100%',
        lineHeight: '54px',
        letterSpacing: '0px'
    },
    TextFontSize18,
    textColorLightGreyWildSand,
    TextFontWeight600SemiBold,
    TextFontWeight700Bold,
    TextFontWeight500,
    textColorDarkBlueOuterSpace
}))


function HeaderLinkDesktop({ linkText, href, hovered, isBold, andScrollTo }) {
    const classes = useStyles();

    const headerLinkStyle = (hovered) ? classes.HeaderLinkStyleHovered : classes.HeaderLinkStyle;
    const isTextBold = (isBold || hovered) ? classes.TextFontWeight700Bold : classes.TextFontWeight500;
    const textColor = hovered ? classes.textColorDarkBlueOuterSpace : classes.textColorLightGreyWildSand;
    const hrefLink = andScrollTo ? { pathname: href, query: { scrollTo: andScrollTo } } : href;

    return (
        <Link href={hrefLink} passHref>
            <a>
                <Typography component="h3" className={`${headerLinkStyle} ${classes.TextFontSize18} ${textColor} ${isTextBold}`}>
                    {linkText}
                </Typography>
            </a>
        </Link>
    );
}

export default HeaderLinkDesktop;

