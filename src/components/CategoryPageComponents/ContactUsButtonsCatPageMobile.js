import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { getMessageIconGreenBg, getPhoneIconGreenBg, getWhatsappIconGreenBg } from '../../assets/Database/DatabaseUtils';
import { Link as ScrollLink } from 'react-scroll';
import { UserContext } from '../../contexts/MyContext';
import NavigationDialog from 'components/GeneralComponents/NavigationDialog';
import { myFontSizes } from 'components/Styles/Sizes';
import { myColors } from 'components/Styles/Colors';

const useStyles = makeStyles((theme) => ({
    contactUsSingleButtonAndText: {
        marginLeft: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    contactUsIconsContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    contactImageStyle: {
        minWidth: '44px',
        minHeight: '44px',
        width: '10vw',
        maxWidth: '65px',
        cursor: 'pointer',
    },
    contactImageStyleLastOne: {
        minWidth: '44px',
        minHeight: '44px',
        width: '10vw',
        maxWidth: '65px',
        cursor: 'pointer',
    },
    bottomTextStyleFirstLine: {
        marginTop: '16px',
        fontSize: myFontSizes.TextFontSize16,
        color: myColors.DarkBlueOuterSpace,
    },
}));

function ContactUsButtonsCatPageMobile(props) {
    const { data, storeData } = useContext(UserContext);
    const classes = useStyles();

    let phoneIconGreenBg = getPhoneIconGreenBg();
    let whatsappIconGreenBg = getWhatsappIconGreenBg();
    let messageIconGreenBg = getMessageIconGreenBg();
    let whatsappTextMessageWithToolName = `היי! אני מתעניין ב ${data.currentCategoryData.linkText}%0Aאשמח שתיצרו איתי קשר`;

    return (
        <div className={props.className}>
            <div className={classes.contactUsIconsContainer}>
                <Box
                    className={classes.contactUsSingleButtonAndText}
                    component="a"
                    href="tel:052-4343983"
                    target="_blank"
                    rel="noreferrer noopener">
                    <img
                        className={classes.contactImageStyle}
                        src={phoneIconGreenBg.src}
                        alt={phoneIconGreenBg.alt}
                        title={phoneIconGreenBg.title}
                    />
                    <Typography
                        className={classes.bottomTextStyleFirstLine}
                        noWrap>
                        טלפון
                    </Typography>
                </Box>

                <Box
                    className={classes.contactUsSingleButtonAndText}
                    component="a"
                    href={`https://wa.me/972524343983?text=${whatsappTextMessageWithToolName}`}
                    target="_blank"
                    rel="noreferrer noopener">
                    <img
                        className={classes.contactImageStyle}
                        src={whatsappIconGreenBg.src}
                        alt={whatsappIconGreenBg.alt}
                        title={whatsappIconGreenBg.title}
                    />
                    <Typography
                        className={classes.bottomTextStyleFirstLine}
                        noWrap>
                        WhatsApp
                    </Typography>
                </Box>

                <ScrollLink to="sendUsMessageLine" href="#sendUsMessageLine" smooth={true} duration={380} offset={-130}>
                    <Box
                        className={classes.contactUsSingleButtonAndText}
                        component="div"
                        // href={`https://wa.me/972524343983?text=${whatsappTextMessageWithToolName}`}
                        // target="_blank"
                        // rel="noreferrer noopener"
                        >
                        <img
                            className={classes.contactImageStyle}
                            src={messageIconGreenBg.src}
                            alt={messageIconGreenBg.alt}
                            title={messageIconGreenBg.title}
                        />
                        <Typography
                            className={classes.bottomTextStyleFirstLine}
                            noWrap>
                            הודעה
                        </Typography>
                    </Box>

                </ScrollLink>

                <NavigationDialog />

            </div>
        </div>
    );
}

export default ContactUsButtonsCatPageMobile;