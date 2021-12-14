import { makeStyles, Typography } from '@material-ui/core';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import { getAProfessionalIcon, getAvailabilityIcon, getDiversityIcon, getPriceIcon } from '../../assets/Database/DatabaseUtils';
import FullWidthHorizontalSection from '../GeneralComponents/FullWidthHorizontalSection';
import HeaderUnderLine from '../GeneralComponents/HeaderUnderLine';
import { myColors } from '../Styles/Colors';
import { backgourndColorDarkBlueOuterSpace, textColorDarkBlueOuterSpace, textColorRegularWhite, TextFontSize18, TextFontSize20, TextFontSize24, TextFontSize32, TextFontWeight500, TextFontWeight600SemiBold, TextFontWeight700Bold } from '../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    whatWeOfferContainer: {
        backgroundColor: myColors.TurquoisePelorous,
        height: '380px',
        [theme.breakpoints.up('md')]: {
            height: '508px',
        }
    },
    contactusContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '18px',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            marginTop: '60px',
            alignItems: 'right',
        }
    },
    TextFontSize32,
    textColorRegularWhite,
    TextFontWeight600SemiBold,
    backgourndColorDarkBlueOuterSpace,
    textColorDarkBlueOuterSpace,
    TextFontWeight700Bold,
    HeaderAndUnderlineContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    HeaderTextStyle: {
        paddingBottom: '12px',
        fontSize: myFontSizes.TextFontSize24,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize32,
        }
    },
    promosContainerOurFeaturesDesktop: {
        display: 'none',
        justifyContent: 'space-between',
        marginTop: '84px',
        height: '236px',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    promosContainerOurFeaturesMobile: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '13px',
        width: '287px',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    TextFontSize20,
    promoLogoStyle: {
        height: '59px',
        width: '59px',
    },
    promoHeaderStyle: {
        marginTop: '10px',
    },
    TextFontSize24,
    promoContentStyle: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            marginTop: '20px',
            maxWidth: '220px',
        }
    },
    TextFontSize18,
    TextFontWeight500,
    coupleIconsContainer: {
        height: '284px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    HeaderUndelineStyle: {
        backgroundColor: myColors.DarkBlueOuterSpace,
        width: '80px',
        height: '8px',
        [theme.breakpoints.up('md')]: {
            width: '128px',
        }
    }
}));

function WhatWeOfferPromoLine(props) {
    const classes = useStyles();

    let goodPriceIcon = getPriceIcon();
    let diversityIcon = getDiversityIcon();
    let availabilityIcon = getAvailabilityIcon();
    let professionalIcon = getAProfessionalIcon();


    function getDesktopIcons() {
        return (
            <div className={classes.promosContainerOurFeaturesDesktop}>

                <div>
                    <img
                        className={classes.promoLogoStyle}
                        src={goodPriceIcon.src}
                        alt={goodPriceIcon.alt}
                        title={goodPriceIcon.title}
                    />
                    <Typography variant="h3" className={`${classes.promoHeaderStyle} ${classes.TextFontSize24} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight700Bold}`}>
                        מחיר טוב
                        </Typography>

                    <Typography variant="subtitle1" align="center" className={`${classes.promoContentStyle} ${classes.TextFontSize18} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight500}`}>
                        רכישת כלי עבודה איכותיים,יקרה ולא תמיד משתלמת. לעומת זאת השכרה של כלי עבודה מקצועי ויקר במחיר זול ומשתלם
                        </Typography>
                </div>

                <div>
                    <img
                        className={classes.promoLogoStyle}
                        src={diversityIcon.src}
                        alt={diversityIcon.alt}
                        title={diversityIcon.title}
                    />
                    <Typography variant="h3" className={`${classes.promoHeaderStyle} ${classes.TextFontSize24} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight700Bold}`}>
                        מגוון עצום לכל צורך
                        </Typography>

                    <Typography variant="subtitle1" align="center" className={`${classes.promoContentStyle} ${classes.TextFontSize18} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight500}`}>
                        מגוון ענק של כלי עבודה מקצועיים להשכרה, גם כלים וציוד מיוחד וספציפי לעבודות חד פעמיות
                        </Typography>
                </div>


                <div>
                    <img
                        className={classes.promoLogoStyle}
                        src={professionalIcon.src}
                        alt={professionalIcon.alt}
                        title={professionalIcon.title}
                    />
                    <Typography variant="h3" className={`${classes.promoHeaderStyle} ${classes.TextFontSize24} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight700Bold}`}>
                        מקצועיות
                        </Typography>

                    <Typography variant="subtitle1" align="center" className={`${classes.promoContentStyle} ${classes.TextFontSize18} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight500}`}>
                        כל כלי עבודה שאתה צריך לפרוייקט שלך, בחירת הכלי המתאים, הדרכה לשימוש נכון וקבלת כלי עבודה מתוחזק ואיכותי
                        </Typography>
                </div>

                <div>
                    <img
                        className={classes.promoLogoStyle}
                        src={availabilityIcon.src}
                        alt={availabilityIcon.alt}
                        title={availabilityIcon.title}
                    />
                    <Typography variant="h3" className={`${classes.promoHeaderStyle} ${classes.TextFontSize24} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight700Bold}`}>
                        זמינות ונוחות
                    </Typography>

                    <Typography variant="subtitle1" align="center" className={`${classes.promoContentStyle} ${classes.TextFontSize18} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight500}`}>
                        שכור את כלי העבודה שאתה צריך בדיוק ביום שאתה צריך אותו, ללא צורך בתחזוקה ואחסון אנחנו נוודא שהכלי יהיה זמין ומוכן לעבודה
                    </Typography>
                </div>
            </div>
        );
    }


    function getMobileIcons() {
        return (
            <div className={classes.promosContainerOurFeaturesMobile}>

                <div className={classes.coupleIconsContainer}>
                    <div>
                        <img
                            className={classes.promoLogoStyle}
                            src={goodPriceIcon.src}
                            alt={goodPriceIcon.alt}
                            title={goodPriceIcon.title}
                        />
                        <Typography variant="h3" className={`${classes.promoHeaderStyle} ${classes.TextFontSize20} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight700Bold}`}>
                            מחיר משתלם
                        </Typography>

                    </div>


                    <div>
                        <img
                            className={classes.promoLogoStyle}
                            src={diversityIcon.src}
                            alt={diversityIcon.alt}
                            title={diversityIcon.title}
                        />
                        <Typography variant="h3" className={`${classes.promoHeaderStyle} ${classes.TextFontSize20} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight700Bold}`}>
                            מגוון עצום לכל צורך
                        </Typography>

                    </div>
                </div>


                <div className={classes.coupleIconsContainer}>
                    <div>
                        <img
                            className={classes.promoLogoStyle}
                            src={professionalIcon.src}
                            alt={professionalIcon.alt}
                            title={professionalIcon.title}
                        />
                        <Typography variant="h3" className={`${classes.promoHeaderStyle} ${classes.TextFontSize20} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight700Bold}`}>
                            מקצועיות
                </Typography>

                    </div>

                    <div>
                        <img
                            className={classes.promoLogoStyle}
                            src={availabilityIcon.src}
                            alt={availabilityIcon.alt}
                            title={availabilityIcon.title}
                        />
                        <Typography variant="h3" className={`${classes.promoHeaderStyle} ${classes.TextFontSize20} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight700Bold}`}>
                            זמינות ונוחות
                </Typography>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <FullWidthHorizontalSection
            className={`${props.className} ${classes.whatWeOfferContainer}`}>

            <div className={`${classes.contactusContainerStyle}`}>

                <div className={classes.HeaderAndUnderlineContainer}>
                    <Typography className={`${classes.HeaderTextStyle}`}>
                        אז למה שוכרים אצלנו?
                    </Typography>

                    <HeaderUnderLine className={`${classes.HeaderUndelineStyle}`} />
                </div>

                {getMobileIcons()}
                {getDesktopIcons()}

            </div>

        </FullWidthHorizontalSection>
    );
}

export default WhatWeOfferPromoLine;