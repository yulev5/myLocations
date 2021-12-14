import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { TextFontWeight600SemiBold, textColorDarkBlueOuterSpace, textColorLightGreyWildSand, TextFontSize18, TextFontWeight500, TextFontWeight700Bold } from '../../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    HeaderLinkStyle: {
        height: '100%',
    },
    TextFontSize18,
    textColorLightGreyWildSand,
    TextFontWeight600SemiBold,
    TextFontWeight700Bold,
    TextFontWeight500,
    textColorDarkBlueOuterSpace
}))


function OpenDrawerLinkMobile(props) {
    const classes = useStyles();

    let isTextBold = (props.isBold || props.hovered || props.isAccordionLink) ? classes.TextFontWeight700Bold : classes.TextFontWeight500;
    let href = props.andScrollTo ? { pathname: props.href, query: { scrollTo: props.andScrollTo } } : props.href;
    let textColor = props.isAccordionLink ? classes.textColorDarkBlueOuterSpace : classes.textColorLightGreyWildSand;

    return (
        <Link href={href} as={props.asLink} passHref>
            <a>
                <Typography component="h3" className={`${props.className} ${classes.HeaderLinkStyle} ${classes.TextFontSize18} ${textColor} ${isTextBold}`}
                    onClick={props.toggleDrawer(false)}>
                    {props.linkText}
                </Typography>
            </a>
        </Link>
    );
}

export default OpenDrawerLinkMobile;

