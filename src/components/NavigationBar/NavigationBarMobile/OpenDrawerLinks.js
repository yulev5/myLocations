import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import { backgourndColorLightGreyWildSand, TextFontWeight700Bold } from '../../Styles/MyStyles';
import OpenDrawerLinkMobile from 'components/NavigationBar/NavigationBarMobile/OpenDrawerLinkMobile'
import SuperCategoriesAccordions from './SuperCategoriesAccordions';

const useStyles = makeStyles((theme) => ({
    drawerLinksContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    TextFontWeight700Bold,
    middleHeaderStyle: {
        marginTop: '24px'
    },
    dividerStyle: {
        marginLeft: '24px',
        marginTop: '24px',
        height: '2px'
    },
    backgourndColorLightGreyWildSand
}));

function OpenDrawerLinks(props) {
    const classes = useStyles();
    const router = useRouter();

    return (
        <>
            <div className={props.className}>

                <OpenDrawerLinkMobile toggleDrawer={props.toggleDrawer} isBold={router.pathname === '/'} href="/" linkText="דף הבית" />

                <OpenDrawerLinkMobile toggleDrawer={props.toggleDrawer} className={classes.middleHeaderStyle} isBold={router.pathname === '/about-power-tools-rentals'} href="/about-power-tools-rentals" linkText="אודות" />

                <OpenDrawerLinkMobile toggleDrawer={props.toggleDrawer} className={classes.middleHeaderStyle} andScrollTo="categoriesToolsForRent" isBold={router.pathname.includes('/rentals/[categoryID]')} href="/" linkText="השכרת כלי עבודה" />

                <OpenDrawerLinkMobile toggleDrawer={props.toggleDrawer} className={classes.middleHeaderStyle} andScrollTo="footerContactUs" isBold={false} href="/" linkText="צור קשר" />

                <OpenDrawerLinkMobile toggleDrawer={props.toggleDrawer} className={classes.middleHeaderStyle} isBold={router.pathname === '/articles'} href="/articles" linkText="טיפים ומדריכים" />

            </div>

            <Divider className={`${classes.dividerStyle} ${classes.backgourndColorLightGreyWildSand}`} />

            <SuperCategoriesAccordions toggleDrawer={props.toggleDrawer} />
        </>
    );
}

export default OpenDrawerLinks;