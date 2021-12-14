import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import HeaderUnderLine from '../GeneralComponents/HeaderUnderLine';
import MainCategoriesSlider from '../MainPageComponents/MainCategoriesSlider';
import MainCategoriesMobileSlider from './MainCategoriesMobileSlider';

const useStyles = makeStyles((theme) => ({
    HeaderAndUnderlineStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '64px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px'
        }
    },
    otherToolsHeaderStyle: {
        color: myColors.TurquoisePelorous,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize24,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize32,
        }
    },
    HeaderUnderLineStyle: {
        marginTop: '12px',
        backgroundColor: myColors.TurquoisePelorous,
        width: '80px',
        height: '8px',
        [theme.breakpoints.up('md')]: {
            width: '182px',
        }
    },
    mainCategoriesSliderStyle: {
        marginTop: '40px',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block'
        }
    },
    mainCategoriesMobileSliderStyle: {
        marginTop: '40px',
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
}));

function OtherCategoriesPromoLine(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.HeaderAndUnderlineStyle}>
                <Typography variant="h3" className={`${classes.otherToolsHeaderStyle}`}>
                    כלים נוספים שאולי יעניינו אותך
                </Typography>
                <HeaderUnderLine className={`${classes.HeaderUnderLineStyle}`} />
            </div>
            <MainCategoriesSlider removeCurrentCat={true} className={classes.mainCategoriesSliderStyle} />
            <MainCategoriesMobileSlider removeCurrentCat={true} className={classes.mainCategoriesMobileSliderStyle} />
        </>
    );
}

export default OtherCategoriesPromoLine;