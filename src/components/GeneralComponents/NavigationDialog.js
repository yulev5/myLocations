import { Avatar, Dialog, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { getNavigateIconBlueBg, getNavigateIconGreenBg } from 'assets/Database/DatabaseUtils';
import { myColors } from 'components/Styles/Colors';
import { TextFontWeight500, TextFontWeight700Bold } from 'components/Styles/MyStyles';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    navigateButtonStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    contactImageStyleLastOne: {
        minWidth: '44px',
        minHeight: '44px',
        width: '10vw',
        maxWidth: '65px',
        cursor: 'pointer',
    },
    dialogTitleStyle: {
        padding: '16px 24px',
        fontSize: myFontSizes.TextFontSize24,
        fontWeight: myFontWeights.Weight700Bold,
        color: myColors.DarkBlueOuterSpace,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
            fontSize: myFontSizes.TextFontSize32,
        },
    },
    navigationAddressesBox: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
    navigationOptionStyle: {
        color: myColors.textColorBlackMirage,
        fontWeight: myFontWeights.Weight600SemiBold,
        fontSize: myFontSizes.TextFontSize16,
        textAlign: 'right',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize18,
            textAlign: 'right'
        },
    },
    navigationUnderButtonText: {
        marginTop: '16px',
        color: myColors.DarkBlueOuterSpace,
        fontSize: myFontSizes.TextFontSize16,
    },
    TextFontWeight500,
    TextFontWeight700Bold,
}));

function NavigationDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    let navigateIconGreenBg = getNavigateIconGreenBg();

    let textWeight = isHovered ? classes.TextFontWeight700Bold : classes.TextFontWeight500;
    let iconToShow = isHovered ? getNavigateIconBlueBg() : navigateIconGreenBg;

    function handleHoverChanged(hoverStatus) {
        setIsHovered(hoverStatus);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    React.useEffect(() => {
        document.querySelectorAll('p[name="contactBottomText"], p[name="contactBottomText2"]').forEach(el => {
            const { width } = el.getBoundingClientRect();
            el.style.width = `${width + 2}px`;
        });
    }, []);

    return (
        <>
            <div
                onMouseEnter={() => handleHoverChanged(true)}
                onMouseLeave={() => handleHoverChanged(false)}
                className={classes.navigateButtonStyle}
                onClick={handleClickOpen}>
                <img
                    className={classes.contactImageStyleLastOne}
                    src={iconToShow.src}
                    alt={iconToShow.alt}
                    title={iconToShow.title}
                />
                <Typography
                    name="contactBottomText2"
                    noWrap
                    className={`${classes.navigationUnderButtonText} ${textWeight}`}>
                    סניפים
                </Typography>
            </div>

            <Dialog
                onClose={handleClose}
                aria-labelledby="navigation-addresses"
                open={open}>
                <div className={classes.navigationAddressesBox}>
                    <Typography id="navigation-addresses" className={`${classes.dialogTitleStyle}`}>בחר סניף לניווט</Typography>

                    <List>
                        <a
                            href="https://ul.waze.com/ul?place=ChIJk7AB_UXWAhURY0P5ZRQZEoc&ll=31.79444440%2C35.18732040&navigate=yes"
                            target="_blank"
                            rel="noreferrer noopener">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img
                                            className={classes.contactImageStyleLastOne}
                                            src={navigateIconGreenBg.src}
                                            alt={navigateIconGreenBg.alt}
                                            title={navigateIconGreenBg.title}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    classes={{ primary: classes.navigationOptionStyle }}
                                    primary="סניף ירושלים - גבעת שאול 46" />
                            </ListItem>
                        </a>

                        <a
                            href="https://ul.waze.com/ul?ll=32.07413400%2C34.79941800&navigate=yes&utm_medium=lm_share_location"
                            target="_blank"
                            rel="noreferrer noopener">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img
                                            className={classes.contactImageStyleLastOne}
                                            src={navigateIconGreenBg.src}
                                            alt={navigateIconGreenBg.alt}
                                            title={navigateIconGreenBg.title}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    classes={{ primary: classes.navigationOptionStyle }}
                                    primary="סניף תל אביב - נחלת יצחק 28" />
                            </ListItem>
                        </a>
                    </List>
                </div>
            </Dialog>
        </>
    );
}

export default NavigationDialog;