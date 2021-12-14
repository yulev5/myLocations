import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';
import HeaderLinkDesktop from './HeaderLinkDesktop';

const useStyles = makeStyles((theme) => ({
    upperLinksDiv: {
        display: 'flex',
        height: '100%',
        alignItems: 'center'
    },
    separatorStyle: {
        marginLeft: '20px',
        marginRight: '20px',
        margin: 'auto',
        fontWeight: myFontWeights.TextFontWeight700Bold,
    },
    headerLinkStyle: {
        height: '100%',
        lineHeight: '54px',
        letterSpacing: '0.235px',
        fontSize: myFontSizes.TextFontSize18,
        fontWeight: myFontWeights.Weight500,
        color: myColors.LightGreyWildSand,
        cursor: 'pointer'
    }
}));

const Separator = () => {
    const classes = useStyles();
    return (
        <div className={`${classes.separatorStyle}`} >
            |
        </div>
    )
}

function UpperRightLinks() {
    const classes = useStyles();
    const router = useRouter();

    return (
        <div className={classes.upperLinksDiv}>

            <HeaderLinkDesktop isBold={router.pathname === '/'} href="/" linkText="דף הבית" />

            <Separator />

            <HeaderLinkDesktop isBold={router.pathname === '/about-power-tools-rentals'} href="/about-power-tools-rentals" linkText="אודות" />

            <Separator />

            <HeaderLinkDesktop andScrollTo="categoriesToolsForRent" isBold={router.pathname.includes('/rentals/[categoryID]')} href="/" linkText="השכרת כלי עבודה" />

            <Separator />

            <Link to="footerContactUs" smooth={true} duration={380}>
                <Typography component="h3" className={classes.headerLinkStyle} >
                    צור קשר
                </Typography>
            </Link>
        </div>
    );
}

export default UpperRightLinks;