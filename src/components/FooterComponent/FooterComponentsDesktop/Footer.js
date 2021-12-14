import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Divider, Container } from "@material-ui/core";
import { Link as ScrollLink } from 'react-scroll';
import { GAEvent, GAEventCat, GAEventAction } from "../../Utils/Tracking";
import { backgourndColorDarkBlueOuterSpaceDarker, textColorGreyPlatinium, TextFontSize16, backgourndColorGreyPlatinium, textColorRegularWhite, TextFontSize18 } from "../../Styles/MyStyles";
import PowerToolsLogoDesktop from "../../GeneralComponents/PowerToolsLogoDesktop";
import FooterHeader from "./FooterHeader";
import FooterLink from "./FooterLink";
import Footer5CategoriesLinksList from "./Footer5CategoriesLinksList";
import FooterSubHeader from "./FooterSubHeader";
import FooterText from "./FooterText";
import FooterHeaderBig from "./FooterHeaderBig";
import FooterTextBig from "./FooterTextBig";
import ContactUsFooterForm from "./ContactUsFooterForm";
import { UserContext } from "../../../contexts/MyContext";
import { myColors } from "components/Styles/Colors";
import FooterSocialIcons from "./FooterSocialIcons";

const useStyles = makeStyles((theme) => ({
    FooterStyle: {
        position: 'absolute',
        right: '0',
        left: '0',
        backgroundColor: myColors.TurquoisePelorous,
    },
    FooterUpperPartStyle: {
        display: 'flex',
        flexDirection: 'column',
    },
    powerToolsLogoStyle: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            marginLeft: 'auto',
            marginTop: '46px',
        }
    },
    footerLinkMainContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px',
        marginRight: '36px',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            marginRight: '0px',
        }
    },

    footerLinks: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        marginRight: '15px',
        [theme.breakpoints.up('md')]: {
            marginTop: '24px',
            marginRight: '0px',
        }
    },
    footerLinksCategories: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
        marginRight: '15px',
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
            marginRight: '40px',
            flexDirection: 'row',
        }
    },
    footerLinksColumn: {
        marginTop: '8px',
        marginLeft: '33px',
        [theme.breakpoints.up('md')]: {
            marginTop: '24px',
            marginLeft: '74px'
        }
    },
    linkStyle: {
        marginBottom: '15px',
        [theme.breakpoints.up('md')]: {
            marginBottom: '17px'
        }
    },
    footerSecondHeader: {
        marginTop: '24px',
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
            marginRight: '40px',
        }
    },
    horizontalLineStyle: {
        backgroundColor: myColors.GreyPlatinium,
        marginTop: '40px',
        marginBottom: '40px',
        height: '4px',
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
            width: 'auto',
            marginRight: 'initial',
            marginLeft: 'initial',
        }
    },
    horizontalLineStyleSecondDivider: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            marginTop: '40px',
            marginBottom: '40px',
            height: '4px',
        },

    },
    backgourndColorGreyPlatinium,
    footerMiddlePartContactAndAddressesLine: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: '36px',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            marginRight: '0px',
        }
    },
    addressesAndOpenningHours: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        justifyContent: 'flex-start',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
            height: '220px',
        }
    },
    addressesDivStyle: {
        display: 'flex',
        marginTop: '32px',
        maxWidth: '450px',
        justifyContent: 'space-between',
        paddingLeft: '10px',
        [theme.breakpoints.up('md')]: {
            marginTop: '20px',
            marginLeft: '0px',
            justifyContent: 'flex-start',
            maxWidth: 'none',
        }
    },
    aBoxStyle: {
        // width: 'max-content'
    },
    addressTextBoxStyle: {
        marginTop: '0px',
        [theme.breakpoints.up('md')]: {
            marginTop: '20px'
        }
    },
    verticalDiverStyle: {
        width: '4px',
        backgroundColor: myColors.GreyPlatinium,
        margin: '0 0 0 10px',
        [theme.breakpoints.up('md')]: {
            margin: '0 32px',
        }
    },
    openingHoursDivStyle: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '32px',
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
        }
    },
    phoneNumberInMobile: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    openningHoursTitle: {
        marginLeft: '30px',
        [theme.breakpoints.up('md')]: {
            marginLeft: '56px'
        }
    },
    phoneTextTitleMobile: {
        marginLeft: '74px',
    },
    leftSideContactUs: {
        height: '138px',
        marginRight: '-36px',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            height: '220px',
            marginRight: 'initial',
        },
    },
    phonesEmailAndSocials: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
            marginLeft: '34px'
        },
    },
    phoneAndEmailDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    contactFormFooterSytle: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    phoneNumberAndEmail: {
        marginTop: '20px'
    },
    textColorRegularWhite,
    TextFontSize18,
    emailSyle: {
        marginTop: '22px'
    },
    footerBottomLineStyle: {
        backgroundColor: myColors.DarkBlueOuterSpace,
        height: '78px',
        [theme.breakpoints.up('md')]: {
            height: '50px',
        }
    },
    backgourndColorDarkBlueOuterSpaceDarker,
    bottomLineContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '78px',
        [theme.breakpoints.up('md')]: {
            height: '50px',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    },
    TextFontSize16,
    textColorGreyPlatinium,
    dividerStyle: {
        display: 'block',
        height: '2px',
        width: '80%',
        backgroundColor: myColors.GreyPlatinium,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    }
}));

function Footer(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    const listOfCategoriesLists = [];
    const sizeOfLinksList = 6;
    for (let i = 0; i < data.categories.length; i += sizeOfLinksList) {
        let groupOf3OrLessCategories = null;
        if (i + sizeOfLinksList <= data.categories.length) {
            groupOf3OrLessCategories = data.categories.slice(i, i + sizeOfLinksList)
        }
        else {
            groupOf3OrLessCategories = data.categories.slice(i, data.categories.length)
        }
        listOfCategoriesLists.push(<Footer5CategoriesLinksList groupOf5OrLessCategories={groupOf3OrLessCategories} key={i} />)
    }

    return (
        <Box
            className={`${classes.FooterStyle}`}
            component="footer"
        >

            <Container className={classes.FooterUpperPartStyle}>

                <PowerToolsLogoDesktop className={classes.powerToolsLogoStyle} />

                <div className={classes.footerLinkMainContainer}>
                    <div >
                        <FooterHeader text="קישורים" />
                        <div className={classes.footerLinks}>
                            <FooterLink text="עמוד הבית" href="/" className={classes.linkStyle} />
                            <FooterLink text="אודות" href="/about-power-tools-rentals" className={classes.linkStyle} />
                            <FooterLink text="ציוד וכלים להשכרה" href="/" className={classes.linkStyle} />
                            <FooterLink text="טיפים ומדריכים" href="/articles" className={classes.linkStyle} />
                            <FooterLink text="שולחן עמידה" href="/comfortly" className={classes.linkStyle} />
                            <FooterLink text="שולחן עמידה ארגונומי חשמלי" externalLink="https://www.comfortly.co.il/" className={classes.linkStyle} />
                            <ScrollLink to="contactUsLine" href="#contactUsLine" smooth={true} duration={380} offset={-300}>
                                <FooterLink text="צור קשר" className={classes.linkStyle} />
                            </ScrollLink>
                            <FooterLink text="תקנון השכרה" href="/terms" className={classes.linkStyle} />
                        </div>
                    </div>

                    <div>
                        <FooterHeader className={classes.footerSecondHeader} text="קטגוריות" />
                        <div className={classes.footerLinksCategories}>
                            {listOfCategoriesLists}
                        </div>
                    </div>
                </div>


                <Divider className={`${classes.horizontalLineStyle}`} />


                <div className={classes.footerMiddlePartContactAndAddressesLine}>

                    <div name='footerContactUs' className={classes.addressesAndOpenningHours}>
                        <div>
                            <FooterHeader text="מוזמנים לקפוץ לבקר" />
                            <div className={classes.addressesDivStyle}>
                                <a className={classes.aBoxStyle}
                                    href="https://goo.gl/maps/ys6XccWuewcxf6Tn9"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <div>
                                        <FooterSubHeader text="סניף ירושלים" />
                                        <FooterText text="רחוב גבעת שאול 46, ירושלים" className={classes.addressTextBoxStyle} />
                                    </div>
                                </a>
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    className={`${classes.verticalDiverStyle}`} />

                                <a className={classes.aBoxStyle}
                                    href="https://goo.gl/maps/jfFPqwQiSsvy97xv6"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <div>
                                        <FooterSubHeader text="סניף תל אביב" />
                                        <FooterText text="רחוב נחלת יצחק 28, תל אביב יפו" className={classes.addressTextBoxStyle} />
                                    </div>
                                </a>

                            </div>
                        </div>

                        <div className={classes.openingHoursDivStyle}>
                            <FooterHeaderBig text="שעות פתיחה" className={classes.openningHoursTitle} />
                            <FooterTextBig text="א'-ה': 7:00-17:00" />
                        </div>

                        <a href="tel:052-4343983" className={classes.phoneNumberInMobile}>
                            <FooterHeaderBig text="טלפון" className={classes.phoneTextTitleMobile} />
                            <div className={`${classes.textColorRegularWhite} ${classes.TextFontSize18}`}>
                                052-4343983
                            </div>
                        </a>

                    </div>


                    <div className={classes.leftSideContactUs}>

                        <div className={classes.phonesEmailAndSocials}>

                            <div className={classes.phoneAndEmailDesktop}>
                                <FooterHeader text="או ליצור איתנו קשר" />

                                <div className={classes.phoneNumberAndEmail}>
                                    <a href="tel:052-4343983">
                                        <div className={`${classes.textColorRegularWhite} ${classes.TextFontSize18}`}>
                                            052-4343983
                                        </div>
                                    </a>

                                    <a href="mailto:powertoolsrentals@gmail.com">
                                        <div className={`${classes.textColorRegularWhite} ${classes.TextFontSize18} ${classes.emailSyle}`}>
                                            powertoolsrentals@gmail.com
                                </div>
                                    </a>
                                </div>
                            </div>

                            <FooterSocialIcons />
                        </div>

                        <ContactUsFooterForm className={classes.contactFormFooterSytle} />

                    </div>

                </div>

                <Divider className={`${classes.horizontalLineStyleSecondDivider} ${classes.backgourndColorGreyPlatinium}`} />

            </Container>


            <div className={`${classes.footerBottomLineStyle}`}>
                <Container className={classes.bottomLineContainerStyle}>
                    <Typography className={`${classes.TextFontSize16} ${classes.textColorGreyPlatinium}`}>
                        2020 © כל הזכויות שמורות לחברת Power Tools
                    </Typography>

                    <Divider className={`${classes.dividerStyle}`} />

                    <Typography className={`${classes.TextFontSize16} ${classes.textColorGreyPlatinium}`}>
                    עיצוב UX\UI - יערה הנמן
                    </Typography>
                </Container>
            </div>
        </Box>
    );
}

export default Footer;