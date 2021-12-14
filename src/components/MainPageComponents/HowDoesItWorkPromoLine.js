import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { GetPowerToolsHeroWithToolsLoogingLeft, GetCutterAndPlierIcon, GetSawIcon } from '../../assets/Database/DatabaseUtils';
import HeaderUnderLine from '../GeneralComponents/HeaderUnderLine';
import { myColors } from '../Styles/Colors';
import { textTitleBig40LightGreyBold, textBig32blueBold, textSemiBoldBlue20, TextFontSize32, textColorDarkBlueOuterSpace, TextFontWeight700Bold, backgourndColorDarkBlueOuterSpace } from "../Styles/MyStyles";

const stripHeight = '300px';

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
        paddingTop: '40px',
    },
    HeaderAndUnderlineContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    HeaderTextStyle: {
        paddingBottom: '12px'
    },
    TextFontSize32,
    textColorDarkBlueOuterSpace,
    TextFontWeight700Bold,
    backgourndColorDarkBlueOuterSpace,

    textTitleBigLightGreyBold: textTitleBig40LightGreyBold,
    promoBoxContainer: {
        padding: '40px 0 0',
        display: 'flex',
        justifyContent: 'space-between',
    },
    promoBoxStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '33%'
    },
    textBig32blueBold,
    textSemiBoldBlue20,
    promoIconStyle: {
        width: '98px',
        height: '98px',
    },
    headerUnderlineStyle: {
        width: "80px",
        height: "8px",
    },
}));

function HowDoesItWorkPromoLine(props) {
    const classes = useStyles();

    const cutterAndPlierIcon = GetCutterAndPlierIcon();
    const sawIcon = GetSawIcon();
    const PowerToolsHeroWithToolsLoogingLeft = GetPowerToolsHeroWithToolsLoogingLeft();

    return (
        <div className={`${classes.HowDoesItWorkContainerStyle} ${props.className}`}>
            <div className={classes.StripStyle}>
                <Container>
                    <div className={classes.contentContainer}>

                        <div className={classes.HeaderAndUnderlineContainer}>
                            <Typography className={`${classes.TextFontSize32} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight700Bold} ${classes.HeaderTextStyle}`}>
                                איך זה עובד?
                            </Typography>

                            <HeaderUnderLine className={classes.headerUnderlineStyle} />
                        </div>


                        <div className={classes.promoBoxContainer}>

                            <div className={classes.promoBoxStyle}>
                                <img
                                    className={classes.promoIconStyle}
                                    src={cutterAndPlierIcon.src}
                                    alt={cutterAndPlierIcon.alt}
                                    title={cutterAndPlierIcon.title}
                                />
                                <Typography className={classes.textSemiBoldBlue20}>1. שכור את כלי העבודה</Typography>
                            </div>


                            <div className={classes.promoBoxStyle}>
                                <img
                                    className={classes.promoIconStyle}
                                    src={sawIcon.src}
                                    alt={sawIcon.alt}
                                    title={sawIcon.title}
                                />
                                <Typography className={classes.textSemiBoldBlue20}>2. בצע את העבודה</Typography>
                            </div>

                            <div className={classes.promoBoxStyle}>
                                <img
                                    className={classes.promoIconStyle}
                                    src={PowerToolsHeroWithToolsLoogingLeft.src}
                                    alt="אנחנו נדאג לאחסון ותחזוקה"
                                    title="עבודה נוחה עם כלי העבודה שהשכרת - אנחנו נדאג לנושא האחסון והתחזוקה"
                                />
                                <Typography className={classes.textSemiBoldBlue20}>3. אנחנו נדאג לאחסון ותחזוקה</Typography>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default HowDoesItWorkPromoLine;