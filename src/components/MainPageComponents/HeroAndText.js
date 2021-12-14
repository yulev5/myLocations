import { Button, makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import { Link } from 'react-scroll';
import { GetPowerToolsHeroWithTools } from "../../assets/Database/DatabaseUtils";
import styled from 'styled-components'
import Image from 'next/image';
import useDimensions from 'react-cool-dimensions';

const StyledDiv = styled.div`
    .MuiButton-contained{
        /* box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%); */
        box-shadow: 0px 0px 7px 0px rgba(190, 110, 70, 0.75), 0px 0px 7px 0px rgba(190, 110, 70, 0.75),0px 0px 7px 0px rgba(190, 110, 70, 0.75), 0px 0px 7px 0px rgba(190, 110, 70, 0.75) !important;
        /* 68, 109, 246 */
        /* 190, 110, 70 */
    }
`;


const useStyles = makeStyles((theme) => ({
    HeroAndTextContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginRight: '75px',
            width: '960px',
            alignItems: 'flex-start',
        }
    },
    HeroTextStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0px',
        alignItems: 'center',
        marginRight: '20px',
        marginLeft: '20px',
        [theme.breakpoints.up('md')]: {
            marginTop: '45px',
            marginRight: '0px',
            marginLeft: '0px',
            alignItems: 'flex-start',
        },
    },
    BigTitleStyle: {
        marginTop: '4px',
        marginBottom: '15px',
        fontSize: myFontSizes.TextFontSize24,
        fontWeight: myFontWeights.Weight700Bold,
        color: myColors.DarkBlueOuterSpace,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginBottom: '0px',
            lineHeight: '67px',
            marginTop: '0px',
            fontSize: myFontSizes.TextFontSize40,
            fontWeight: myFontWeights.Weight800ExtraBold,
            textAlign: 'right',
        },
    },
    checkMarkStyle: {
        marginTop: '4px',
        marginLeft: '8px',
        fontWeight: myFontWeights.Weight600SemiBold,
        fontSize: myFontSizes.TextFontSize16,
        textAlign: 'right',
    },
    H2MainTextStyle: {
        marginTop: '4px',
        whiteSpace: 'pre-line',
        color: myColors.textColorBlackMirage,
        fontWeight: myFontWeights.Weight600SemiBold,
        fontSize: myFontSizes.TextFontSize16,
        textAlign: 'right',
        [theme.breakpoints.up('md')]: {
            marginTop: '32px',
            lineHeight: '27px',
            fontSize: myFontSizes.TextFontSize18,
            textAlign: 'right'
        },
    },
    textAndCheckMarkDiv: {
        display: 'flex',
    },
    watchAllToolsButtonStyle: {
        whiteSpace: 'pre-line',
        marginTop: '34px',
        height: '57px',
        width: '198px',
        backgroundColor: myColors.TurquoisePelorous,
        color: myColors.DarkBlueOuterSpace,
        transition: 'color 0.5s',
        fontWeight: myFontWeights.Weight600SemiBold,
        borderRadius: '15px',
        fontSize: myFontSizes.TextFontSize18,
        '&:hover': {
            backgroundColor: myColors.TurquoisePelorous
        },
        '-webkit-tap-highlight-color': 'transparent',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize24,
            marginTop: '32px',
            height: '80px',
            width: '248px',
            '&:hover': {
                backgroundColor: myColors.DarkBlueOuterSpace,
                color: myColors.RegularWhite,
            },
        }
    },
    ButtonContainer: {
        display: 'flex',
        marginTop: '24px',
        height: '57px',
        width: '198px',
        [theme.breakpoints.up('md')]: {
            marginTop: '32px',
            height: '56px',
            width: '248px',
            '&:hover': {
                backgroundColor: myColors.DarkBlueOuterSpace
            }
        }
    },
    buttonStyle: {
        height: '57px',
        width: '198px',
        [theme.breakpoints.up('md')]: {
            height: '56px',
            width: '248px',
            '&:hover': {
                backgroundColor: myColors.DarkBlueOuterSpace
            }
        }
    },
    PowerToolsHeroLogoStyle: {
        height: '168px',
        [theme.breakpoints.up('md')]: {
            // height: '55vh',
            height: '430px',
        },
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
    heroImgContainer: {
        position: 'relative',
        width: '105px',
        height: '168px',
        [theme.breakpoints.up('md')]: {
            width: '266px',
            height: '447px',
        }
    }
}));

function HeroAndText() {
    const classes = useStyles();
    const { observe, width } = useDimensions();

    let PowerToolsHero = GetPowerToolsHeroWithTools();

    return (
        <div className={classes.HeroAndTextContainer}>

            <div className={classes.HeroTextStyle}>
                <Typography component="h1" variant="h1" className={`${classes.BigTitleStyle}`}>
                    השכרת כלי עבודה וציוד בנייה
                </Typography>
                <div className={`${classes.showOnMobile}`}>
                    <div className={classes.textAndCheckMarkDiv}>
                        <Typography variant="subtitle1" className={`${classes.checkMarkStyle}`}>
                            ✔
                        </Typography>
                        <Typography variant="subtitle1" className={`${classes.H2MainTextStyle}`}>
                            כלי עבודה מקצועיים ומתוחזקים היטב
                        </Typography>
                    </div>

                    <div className={classes.textAndCheckMarkDiv}>
                        <Typography variant="subtitle1" className={`${classes.checkMarkStyle}`}>
                            ✔
                        </Typography>
                        <Typography variant="subtitle1" className={`${classes.H2MainTextStyle}`}>
                            30 שנות ניסיון בתחום השכרת כלי עבודה
                        </Typography>
                    </div>

                    <div className={classes.textAndCheckMarkDiv}>
                        <Typography variant="subtitle1" className={`${classes.checkMarkStyle}`}>
                            ✔
                        </Typography>
                        <Typography variant="subtitle1" className={`${classes.H2MainTextStyle}`}>
                            יחס אישי + הדרכה לעבודה נכונה ובטוחה
                        </Typography>
                    </div>

                    <div className={classes.textAndCheckMarkDiv}>
                        <Typography variant="subtitle1" className={`${classes.checkMarkStyle}`}>
                            ✔
                        </Typography>
                        <Typography variant="subtitle1" className={`${classes.H2MainTextStyle}`}>
                            המחירים הזולים בארץ להשכרת כלי עבודה
                        </Typography>
                    </div>
                    <div className={classes.textAndCheckMarkDiv}>
                        <Typography variant="subtitle1" className={`${classes.checkMarkStyle}`}>
                            ✔
                        </Typography>
                        <Typography variant="subtitle1" className={`${classes.H2MainTextStyle}`}>
                            סניף בירושלים ובתל אביב ואפשרות למשלוחים
                        </Typography>
                    </div>
                </div>


                <Typography variant="subtitle1" className={`${classes.H2MainTextStyle} ${classes.showOnDesktop}`}>
                    {`שכור כאן את כלי העבודה שאתה צריך
                    מגוון ענק של כלים, ציוד לבנייה ובניין להשכרה יומית לפי הצורך
                    צפה בקטלוג המלא כאן באתר, בסרטונים ותמונות של כלי עבודה שהיו בהשכרה
                    מלבד הכלים הנפוצים שאנחנו משכירים כמו פטיש חציבה, מקדחת יהלום, מהדק אדמה,
                    מערבל בטון, מכשיר לחיתוך קרמיקה, פטישון מקדחה ומברגות לקידוח והברגה
                    ניתן למצוא גם סולמות להשכרה, ציוד לעבודה בגובה, משאבות מים, מד טווח לייזר להשכרה וכלים נוספים
                    `}
                    {/* {`השכרת כלי עבודה זאת המומחיות שלנו
                        במקום לקנות כלי עבודה, פעמים רבות עדיף לשכור
                        תן לנו לחסוך לך זמן וכסף, שכור את כלי העבודה שאתה צריך
                        בצע את העבודה ואנחנו נדאג לכל השאר`} */}
                </Typography>

                <Link to="categoriesToolsForRent" href="#categoriesToolsForRent" smooth={true} duration={380} offset={-150}>
                    <StyledDiv>
                        <Button
                            className={classes.watchAllToolsButtonStyle}
                            variant="contained">
                            {`לחץ כאן
                            לצפייה בכלים להשכרה`}
                        </Button>
                    </StyledDiv>
                </Link>

            </div>

            <div className={classes.heroImgContainer} ref={observe}>
                <Image
                    priority={true}
                    width={100}
                    height={160}
                    layout='responsive'
                    objectFit="contain"
                    src={PowerToolsHero.src}
                    alt={PowerToolsHero.alt}
                    title={PowerToolsHero.title}
                    sizes={(width !== undefined && width != 0) ? `${Math.round(width)}px` : '38px'}
                />
            </div>
        </div >
    );
}

export default HeroAndText;