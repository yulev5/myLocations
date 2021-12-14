import { Container, makeStyles, Typography } from '@material-ui/core';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import { GetMakitaBWLogoName, GetBoschBWLogoName, GetDewaltBWLogoName, GetBlackAndDeckerBWLogoName } from '../../assets/Database/DatabaseUtils';
import HeaderUnderLine from '../GeneralComponents/HeaderUnderLine';
import { myColors } from '../Styles/Colors';
import { textTitleBig40LightGreyBold, TextFontSize32, textColorDarkBlueOuterSpace, TextFontWeight700Bold, backgourndColorDarkBlueOuterSpace } from "../Styles/MyStyles";


const useStyles = makeStyles((theme) => ({
    HowDoesItWorkContainerStyle: {
        height: '257px',
        [theme.breakpoints.up('md')]: {
            height: '300px',
        }
    },
    StripStyle: {
        position: 'absolute',
        left: '0',
        right: '0',
        backgroundColor: myColors.TurquoisePelorous,
        height: '257px',
        [theme.breakpoints.up('md')]: {
            height: '300px',
        }
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '40px',
        [theme.breakpoints.up('md')]: {
            paddingTop: '44px',
        }
    },
    HeaderAndUnderlineContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    HeaderTextStyle: {
        paddingBottom: '4px',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize24,
        whiteSpace: 'pre-line',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize32,
            whiteSpace: 'normal',
            paddingBottom: '12px',
        }
    },
    headerUnderlineStyle: {
        backgroundColor: myColors.DarkBlueOuterSpace,
        width: '80px',
        height: '8px',
        [theme.breakpoints.up('md')]: {
            width: '182px',
        }
    },

    textTitleBigLightGreyBold: textTitleBig40LightGreyBold,
    brandsContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '40px',
        padding: '0 15px',
        [theme.breakpoints.up('md')]: {
            marginTop: '65px',
            padding: '0 0',
        }
    },
    logoImageStyle: {
        height: '50px',
        width: '40%',
        marginLeft: '10px',
        [theme.breakpoints.up('md')]: {
            height: '45px',
            width: '225px'
        }
    },
    showOnDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
}));

function LeadingBrandsPromoLine(props) {
    const classes = useStyles();

    let makita = GetMakitaBWLogoName();
    let bosch = GetBoschBWLogoName();
    let dewalt = GetDewaltBWLogoName();
    let bAndD = GetBlackAndDeckerBWLogoName();

    return (
        <div className={classes.HowDoesItWorkContainerStyle}>
            <div className={classes.StripStyle}>
                <Container>
                    <div className={classes.contentContainer}>
                        <div className={classes.HeaderAndUnderlineContainer}>
                            <Typography className={`${classes.HeaderTextStyle}`}>{`אנחנו עובדים עם
                            המותגים המובילים בתחום`}
                            </Typography>

                            <HeaderUnderLine className={classes.headerUnderlineStyle} />
                        </div>

                        <div className={classes.brandsContainer}>
                            <img
                                className={classes.logoImageStyle}
                                key={"1"}
                                src={makita.src}
                                alt={makita.alt}
                                title={makita.title}
                            />
                            <img
                                className={classes.logoImageStyle}
                                key={"2"}
                                src={bosch.src}
                                alt={bosch.alt}
                                title={bosch.title}
                            />
                            <img
                                className={`${classes.showOnDesktop} ${classes.logoImageStyle}`}
                                key={"3"}
                                src={dewalt.src}
                                alt={dewalt.alt}
                                title={dewalt.title}
                            />

                            <img
                                className={`${classes.showOnDesktop} ${classes.logoImageStyle}`}
                                key={"4"}
                                src={bAndD.src}
                                alt={bAndD.alt}
                                title={bAndD.title}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default LeadingBrandsPromoLine;