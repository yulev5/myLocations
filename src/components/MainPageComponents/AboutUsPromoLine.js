import { makeStyles, Typography } from '@material-ui/core';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import { getToolsStoreImage } from '../../assets/Database/DatabaseUtils';
import ButtonMedium from '../GeneralComponents/ButtonMedium';
import FullWidthHorizontalSection from '../GeneralComponents/FullWidthHorizontalSection';
import { myColors } from '../Styles/Colors';
import { hoverOpacity07 } from "../Styles/MyStyles";
import Image from 'next/image';
import { isMobileOrTablet } from 'components/Utils/Utils';

const useStyles = makeStyles((theme) => ({
    fullWidthHorizontalSectionStyle: {
        backgroundColor: myColors.DarkBlueOuterSpaceDarker,
        height: 'auto',
        height: '880px',
        [theme.breakpoints.up('md')]: {
            height: '600px',
        },
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
    },
    RightSideText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            alignItems: 'flex-start',
        }
    },
    HeaderTextStyle: {
        whiteSpace: 'pre-line',
        color: myColors.RegularWhite,
        fontWeight: myFontWeights.Weight600SemiBold,
        fontSize: myFontSizes.TextFontSize24,
        marginTop: '64px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'right',
            marginTop: '44px',
            fontSize: myFontSizes.TextFontSize32,
        }
    },
    SubHeaderTextStyle: {
        margin: '12px 36px 0',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        fontSize: myFontSizes.TextFontSize16,
        color: myColors.LightGreyWildSand,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize18,
            marginTop: '30px',
            textAlign: 'right',
            margin: '12px 0px 0',
            color: myColors.RegularWhite,
        }
    },
    showOnMobile: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    showOnDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    buttonReadMoreStyleContainer: {
        display: 'flex',
        marginTop: '24px',
        [theme.breakpoints.up('md')]: {
            marginTop: '30px',
        }
    },
    buttonReadMoreStyle: {
        height: '56px',
        width: '170px',
        [theme.breakpoints.up('md')]: {
            height: '47px',
            width: '140px',
        }
    },
    hoverOpacity07,
    leftImgStyle: {
        position:'relative',
        marginTop: '48px',
        margin: 'auto',
        width: '95%',
        maxWidth: '420px',
        height:'60vw',
        maxHeight:'377px',
        [theme.breakpoints.up('md')]: {
            marginTop: '60px',
            maxWidth: 'none',
            // width: '500px',
            height: '377px',
            margin: 'initial'
        }
    },
    imgRoundCorners: {
        borderRadius: '8px',
    }
}));

function AboutUsPromoLine(props) {
    const classes = useStyles();
    const toolStoreImage = getToolsStoreImage();

    return (
        <FullWidthHorizontalSection className={classes.fullWidthHorizontalSectionStyle}>
            <div className={classes.contentContainer}>
                <div className={classes.RightSideText}>
                    <Typography className={`${classes.HeaderTextStyle}`}>{`יותר מ-30 שנות ניסיון
                    של השכרת כלי עבודה, ציוד וכלים`}
                    </Typography>

                    <Typography className={`${classes.SubHeaderTextStyle} ${classes.showOnMobile}`}>
                        {`החיסכון בכסף, היעילות והביקוש הגבוה של השכרה לעומת קנייה של ציוד לעבודה חייבו אותנו להתמקד ולהציג את כל המידע בצורה מרוכזת וברורה תוך שיפור השירות ומגוון הכלים והציוד המוצעים להשכרה.

                        סניף חדש להשכרה נפתח בתל אביב ומשרת את תושבי תל אביב, רמת גן, פתח תקווה, ראשון לציון וערים נוספות במרכז הארץ

                        יש לנו ניסיון רב בהשכרה של כלים, תן לנו לספק לך את כלי העבודה שאתה צריך לעבודה מיידית ומקצועית במחיר זול. 
                        בחר את כלי העבודה שאתה צריך וצור קשר איתנו כדי לקחת אותו מאחד הסניפים או במשלוח`}
                        {/* {`האתר מוקדש אך ורק לתחום של השכרת כלי עבודה.
                    החיסכון בכסף והיעילות בהשכרה לעומת קנייה חייבו אותנו להתמקד  ולהציג לך את כל המידע בצורה מרוכזת וברורה תוך שיפור השירות ומגוון כלי העבודה והציוד המוצעים להשכרה.
                    את הניסיון הרב שיש לנו במכירה והשכרה אנחנו מעבירים עכשיו בצורה דיגיטלית מהאתר`} */}
                    </Typography>
                    <Typography className={`${classes.SubHeaderTextStyle} ${classes.showOnDesktop}`}>
                        {`החיסכון בכסף, היעילות והביקוש הגבוה של השכרה לעומת קנייה של ציוד לעבודה חייבו אותנו להתמקד ולהציג את כל המידע בצורה מרוכזת וברורה תוך שיפור השירות ומגוון הכלים והציוד המוצעים להשכרה.

                    סניף חדש להשכרה נפתח בתל אביב ומשרת את תושבי תל אביב, רמת גן, פתח תקווה, ראשון לציון וערים נוספות במרכז הארץ

                    יש לנו ניסיון רב בהשכרה של כלים, תן לנו לספק לך את כלי העבודה שאתה צריך לעבודה מיידית ומקצועית במחיר זול. 
                    בחר את כלי העבודה שאתה צריך וצור קשר איתנו כדי לקחת אותו מאחד הסניפים או במשלוח`}

                        {/* {`האתר כולו מוקדש אך ורק לתחום של השכרת כלי עבודה.
                    החיסכון בכסף והיעילות בהשכרה לעומת קנייה חייבו אותנו להתמקד
                    ולהציג לך את כל המידע בצורה מרוכזת וברורה תוך שיפור השירות ומגוון הכלים והציוד.
                    את הניסיון הרב שיש לנו במכירה והשכרה אנחנו מעבירים עכשיו בצורה דיגיטלית מהאתר`} */}
                    </Typography>
                    <ButtonMedium
                        className={classes.buttonReadMoreStyleContainer}
                        buttonStyle={classes.buttonReadMoreStyle}
                        hover={classes.hoverOpacity07}
                        href="/about-power-tools-rentals"
                        text="קרא עלינו עוד" />
                </div>

                <div className={classes.leftImgStyle}>
                    <Image
                        className={classes.imgRoundCorners}
                        src={toolStoreImage.src}
                        layout="fill"
                        alt={toolStoreImage.alt}
                        title={toolStoreImage.title}
                    />
                </div>

            </div>
        </FullWidthHorizontalSection>
    );
}

export default AboutUsPromoLine;