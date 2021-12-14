import { Container, makeStyles, Typography } from '@material-ui/core';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React, { useMemo } from 'react';
import { myColors } from '../Styles/Colors';
import { GetPowerToolsLogoIconColor, getSelectPowerToolForRentIconBlue, getSelectPowerToolForRentIconOrange } from 'assets/Database/DatabaseUtils';
import ImageAndHover from '../GeneralComponents/ImageAndHover';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';


const stripHeight = '510px';

const useStyles = makeStyles((theme) => ({
    HowDoesItWorkContainerStyle: {
        height: stripHeight,
    },
    StripStyle: {
        position: 'absolute',
        left: '0',
        right: '0',
        height: stripHeight,
        backgroundColor: myColors.TurquoisePelorous,
        boxShadow: '0px 3px 6px #00000082'
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '35px',
    },
    HeaderAndUnderlineContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'pre'
    },
    HeaderTextStyle: {
        paddingBottom: '12px',
        fontSize: myFontSizes.TextFontSize32,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
    },
    listOfTexts: {
        display: 'flex',
        marginTop: '20px',
        marginRight: '75px',
        flexDirection: 'column'
    },
    texItem: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '5px'
    },
    textItemTypography: {
        // marginRight: '15px',
        fontSize: myFontSizes.TextFontSize18,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight600SemiBold,
    },
    promoIconContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '50px',
    },
    promoIcon: {
        width: '200px',
        height: '80px',
    },
    abovePromoImgText: {
        fontSize: myFontSizes.TextFontSize18,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        textAlign: 'center'
    },
    underPromoImgText: {
        fontSize: myFontSizes.TextFontSize18,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
    },
    promoIconImgContainer: {
        margin: 'auto',
        maxWidth: '80px',
    },


    promoBoxContainer: {
        padding: '40px 0 0',
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

function InfoSeoTextsPromoLine(props) {
    const classes = useStyles();

    const selectPowerToolForRentIconBlue = useMemo(() => {
        return getSelectPowerToolForRentIconBlue();
    },[getSelectPowerToolForRentIconBlue]);

    const selectPowerToolForRentIconOrange = useMemo(() => {
        return getSelectPowerToolForRentIconOrange();
    },[getSelectPowerToolForRentIconOrange]);

    const PowerToolsLogoIconColor = useMemo(() => {
        return GetPowerToolsLogoIconColor();
    },[GetPowerToolsLogoIconColor]);

    return (
        <div className={`${classes.HowDoesItWorkContainerStyle} ${props.className}`}>
            <div className={classes.StripStyle}>
                <Container>
                    <div className={classes.contentContainer}>

                        <div className={classes.HeaderAndUnderlineContainer}>
                            <Typography component="h2" className={`${classes.HeaderTextStyle}`}>
                                צריך כלי עבודה מקצועי?
                            </Typography>
                            <Typography component="p" className={`${classes.HeaderTextStyle}`}>
                                {` הגעת למקום הנכון.`}
                            </Typography>
                        </div>

                        <div className={classes.listOfTexts}>
                            <div className={classes.texItem}>
                                <Typography component="p" className={classes.textItemTypography}>
                                    ✔ כלי עבודה מקצועיים מטופלים ומתוחזקים היטב מוכנים לעבודה שלך
                                </Typography>
                            </div>

                            <div className={classes.texItem}>
                                <Typography component="p" className={classes.textItemTypography}>
                                    ✔ 30 שנות ניסיון בתחום מאפשרים לנו לתת ידע מקצועי ומדוייק לבחירת כלי העבודה המתאים
                                </Typography>
                            </div>

                            <div className={classes.texItem}>
                                <Typography component="p" className={classes.textItemTypography}>
                                    ✔ יחס אישי + הדרכה לעבודה נכונה ובטוחה
                                </Typography>
                            </div>

                            <div className={classes.texItem}>
                                <Typography component="p" className={classes.textItemTypography}>
                                    ✔ חיסכון מרבי - השכרת כלי עבודה במחירים הזולים בארץ
                                </Typography>
                            </div>
                        </div>

                        <div className={classes.promoIconContainer}>


                            <ScrollLink to="categoriesToolsForRent" href="#categoriesToolsForRent" smooth={true} duration={380} offset={-200}>
                                <ImageAndHover
                                    image={selectPowerToolForRentIconBlue}
                                    hoverImage={selectPowerToolForRentIconOrange}
                                    textAbove="בחר כלי"
                                    textUnder="בחר את כלי העבודה שאתה צריך להשכרה מתוך מגוון הכלים שלנו"
                                />
                            </ScrollLink>

                            <Link href="/rentals/price-list" passHref >
                                <div>
                                    <ImageAndHover
                                        image={PowerToolsLogoIconColor}
                                        hoverImage={PowerToolsLogoIconColor}
                                        textAbove="מחירון"
                                        textUnder="לחץ כאן לצפייה במחירון המלא של כלי עבודה להשכרה"
                                    />
                                </div>
                            </Link>

                            <ScrollLink to="categoriesToolsForRent" href="#categoriesToolsForRent" smooth={true} duration={380} offset={-200}>
                                <ImageAndHover
                                    image={selectPowerToolForRentIconBlue}
                                    hoverImage={selectPowerToolForRentIconOrange}
                                    textAbove="בחר כלי"
                                    textUnder="בחר את כלי העבודה שאתה צריך להשכרה מתוך מגוון הכלים שלנו"
                                />
                            </ScrollLink>

                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}

export default InfoSeoTextsPromoLine;