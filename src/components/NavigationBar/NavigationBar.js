import React, { useMemo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, IconButton, SwipeableDrawer, useScrollTrigger } from '@material-ui/core';
import { textRegularGrey18 } from '../Styles/MyStyles';
import { backgourndColorTurquoisePelorous, backgourndColorLightGreyWildSand } from '../Styles/MyStyles';
import UpperRightLinks from './NavigationBarDesktop/UpperRightLinks';
import HeaderLogoAndPhone from './NavigationBarDesktop/HeaderLogoAndPhone';
import DownPartNavigation from './NavigationBarDesktop/DownPartNavigation';
import { myColors } from 'components/Styles/Colors';
import { getNavBarMenuIcon, getXCloseIconLightGrey } from 'assets/Database/DatabaseUtils';
import PowerToolsLogoMobile from 'components/GeneralComponents/PowerToolsLogoMobile';
import { GAEvent, GAEventCat, GAEventAction } from 'components/Utils/Tracking';
import OpenDrawerLinks from './NavigationBarMobile/OpenDrawerLinks';
import { isMobileOrTablet } from 'components/Utils/Utils';

const useStyles = makeStyles((theme) => ({
    appBarStyle: {
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255,0.75)',
        [theme.breakpoints.up('md')]: {
            height: '130px',
            display: 'block',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            backgroundColor: myColors.TurquoisePelorous,
        },
    },
    upperToolBarStyle: {
        paddingRight: '0px',
        paddingLeft: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        height: '70px',
    },
    textLinkStyle: textRegularGrey18,
    backgroundColor: backgourndColorTurquoisePelorous,
    bottomToolBarStyle: {
        paddingRight: '0px',
        paddingLeft: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        height: '60px',
    },
    horizontalLineStyleDesktop: {
        height: '1px',
    },
    backgourndColorLightGreyWildSand,

    navContainerStyleMobile: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px',
    },
    toolBarStyle: {
        padding: '0px',
    },
    iconButtonStyle: {
        border: 'none',
        outline: 'none',
        padding: '0px',
        margin: '0px 37px 0px 0px',
        "&:focus": {
            outline: 'none'
        },
    },
    navBarMenuIconStyle: {
        width: '30px',
    },
    powerToolsLogoMobileStyle: {
        marginLeft: '10%',
    },

    //Drawer Styles
    mainDrawerStyle: {
        width: "83%",
        height: '100%',
        flexShrink: 0,
        overflowy: 'hidden',
    },
    backgourndColorTurquoisePelorous,
    drawerPaper: {
        width: "83%",
    },
    drawerContainer: {
        paddingTop: '10px',
        marginRight: '37px',

    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px',
        ...theme.mixins.toolbar,
        height: '24px',
        minHeight: '24px'
    },
    iconButtonStyleX: {
        border: 'none',
        outline: 'none',
        padding: '0px',
        margin: '0px 0px 0px 0px',
        "&:focus": {
            outline: 'none'
        },
    },
    xCloseIconLightGreyStyle: {
        width: '24px',
        height: '24px'
    },
    openDrawerLinksStyle: {
        marginRight: '7px',
        marginTop: '20px'
    },

}));

function NavigationBar() {
    const classes = useStyles();
    const [isDrawerOpen, setOpen] = React.useState(false);
    const isMobile = isMobileOrTablet();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    const toggleDrawer = booleanValue => () => {
        if (booleanValue)
            GAEvent(GAEventCat.NAVIGATION_BAR, GAEventAction.OPEN_HAMBURGER_MENU)
        else
            GAEvent(GAEventCat.NAVIGATION_BAR, GAEventAction.CLOSE_HAMBURGER_MENU)

        setOpen(booleanValue);
    };

    const NavBarMenuIcon = useMemo(() => getNavBarMenuIcon(), [getNavBarMenuIcon]);
    const xCloseIconLightGrey = useMemo(() => getXCloseIconLightGrey(), [getXCloseIconLightGrey]);

    return (
        <nav>
            <AppBar
                className={`${classes.appBarStyle}`}
                id="AppBar"
                position="fixed"
                elevation={isMobile && trigger ? 4 : 0}>

                {/* ------------------Desktop Navbar---------------- */}
                {!isMobile &&
                    <>
                        <Container>
                            <Toolbar className={classes.upperToolBarStyle}>
                                <UpperRightLinks />
                                <HeaderLogoAndPhone />
                            </Toolbar>
                        </Container>

                        <Divider className={`${classes.horizontalLineStyleDesktop} ${classes.backgourndColorLightGreyWildSand}`} />

                        <Container>
                            <DownPartNavigation />
                        </Container>
                    </>
                }
                {/* ------------------End of Desktop Navbar---------------- */}

                {/* ------------------Mobile Navbar---------------- */}
                {isMobile &&
                    <Container className={classes.navContainerStyleMobile}>
                        <Toolbar id="Toolbar" className={classes.toolBarStyle}>
                            <IconButton
                                className={classes.iconButtonStyle}
                                id="IconButton"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}>

                                <img
                                    className={classes.navBarMenuIconStyle}
                                    width="30px"
                                    height="22px"
                                    sizes={`30px`}
                                    alt={NavBarMenuIcon.alt}
                                    src={NavBarMenuIcon.src}
                                    title={NavBarMenuIcon.title} />
                            </IconButton>
                        </Toolbar>

                        <PowerToolsLogoMobile className={classes.powerToolsLogoMobileStyle} />
                    </Container>
                }
            </AppBar>

            {isMobile && isDrawerOpen &&
                <SwipeableDrawer
                    className={`${classes.mainDrawerStyle}`}
                    classes={{ paper: `${classes.drawerPaper} ${classes.backgourndColorTurquoisePelorous}` }}
                    variant='temporary'
                    anchor='left'
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={0}>

                        <div className={classes.drawerContainer}>

                            <div className={classes.drawerHeader} onClick={toggleDrawer(false)}>
                                <IconButton className={classes.iconButtonStyleX}>
                                    <img
                                        className={classes.xCloseIconLightGreyStyle}
                                        alt={xCloseIconLightGrey.alt}
                                        src={xCloseIconLightGrey.src}
                                        title={xCloseIconLightGrey.title}
                                    />
                                </IconButton>
                            </div>

                            <OpenDrawerLinks className={classes.openDrawerLinksStyle} toggleDrawer={toggleDrawer} />
                        </div>
                </SwipeableDrawer>}
            {/* ------------------End of Mobile Navbar---------------- */}
        </nav>
    )
}

export default NavigationBar;