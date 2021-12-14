import { makeStyles } from '@material-ui/core';
import React from 'react';
import HeroAndText from './HeroAndText';
import HowDoesItWorkPromoLine from './HowDoesItWorkPromoLine';
import InfoSeoTextsPromoLine from './InfoSeoTextsPromoLine';
import MainCategoriesView from './MainCategoriesView';
import LeadingBrandsPromoLine from './LeadingBrandsPromoLine';
import AboutUsPromoLine from './AboutUsPromoLine';
import GoogleReviewsScroller from './GoogleReviewsScroller';
import ContactUsLine from 'components/GeneralComponents/ContactUsLine';
import ArticleLine from './ArticleLine';
import JumpingArrowDown from 'components/MainPageComponents/JumpingArrowDown';
import WhatWeOfferPromoLine from 'components/AboutUsComponents/WhatWeOfferPromoLine';

const useStyles = makeStyles((theme) => ({
    MainPageComponentsDesktopContainer: {
        // display: 'none',
        // '@media (min-width: 960px)': {
        //     display: 'block'
        // }
    },
    fitToScreenStyle: {
        [theme.breakpoints.up('md')]: {
            paddingTop: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    },
    JumpingArrowStyle: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            marginTop: '34px',
        },
    },
    HowDoesItWorkStyle: {
        display: 'none',
        marginTop: '0px',
        [theme.breakpoints.up('md')]: {
            marginTop: '20px',
            display: 'block',
        }
    },
    whatWeOfferPromoLineStyle: {
        marginTop: '66px',
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
            marginTop: '0px',
        }
    },
    categoriesViewerStyle: {
        marginTop: '64px',
        marginBottom: '64px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px',
            marginBottom: '100px',
        },
    },
    contactUsLineStyle: {
        marginTop: '60px',
    }
}));

function MainPageComponentsDesktop(props) {
    const classes = useStyles();
    // const windowSize = useWindowSize();

    return (
        <div>

            <div className={`${classes.fitToScreenStyle}`}
                // style={{
                //     '@media (minWidth: 960px)': {
                //         height: `${windowSize.height - 200}px`
                //     }
                // }}
                >
                <HeroAndText />
                <JumpingArrowDown className={classes.JumpingArrowStyle} />
            </div>

            <InfoSeoTextsPromoLine className={classes.HowDoesItWorkStyle} />
            {/* <HowDoesItWorkPromoLine className={classes.HowDoesItWorkStyle} /> */}
            <WhatWeOfferPromoLine className={classes.whatWeOfferPromoLineStyle} />
            <MainCategoriesView className={classes.categoriesViewerStyle} />
            <LeadingBrandsPromoLine />
            <AboutUsPromoLine />
            <GoogleReviewsScroller />
            <ContactUsLine className={classes.contactUsLineStyle} />
            <ArticleLine />
        </div>
    );
}

export default MainPageComponentsDesktop;