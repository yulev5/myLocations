import React, { useContext } from 'react';
import MainComponentContainer from 'components/ContainerComponents/MainComponentContainer';
import { makeStyles, Typography, Container } from '@material-ui/core';
import Head from 'next/head';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import DiameterFilter from 'components/PriceListComponenets/SecondStepComponenets/DiameterFilter';
import PriceListStepper from 'components/PriceListComponenets/PriceListStepper';
import MyBreadCrumbs from 'components/GeneralComponents/MyBreadCrumbs';
import { UserContext } from 'contexts/MyContext';

const useStyles = makeStyles((theme) => ({
    H1Style: {
        lineHeight: '63px',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize25,
        margin: '30px 0',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize48,
        }
    },
    H2Style: {
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize18,
    },
    filtersContainer: {
        margin: '30px 8px 30px 8px',
        [theme.breakpoints.up('md')]: {
            margin: '50px 0px 50px 0px',
        }
    }
}));

function DiamondDrills(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    data.generalPageBreadCrumb = "מחירון השכרת כלי עבודה";
    data.urlPostFix = "rentals/price-list/";

    return (
        <MainComponentContainer>
            <Head>
                <title>{"מחירון השכרת מקדחות יהלום" + " - Power-Tools.co.il"}</title>
                <meta name="description" content={"צפה במחירון השכרת מקדחות יהלום עם סטנד או ידניות וכוסות קידוח יהלום בגדלים שונים - מחיר השכרה לפי שעות, ימים או תקופות ארוכות"} />
                <meta name="keywords" content={"מחירון השכרת מקדחת יהלום, מחירון השכרת מקדח יהלום, מחיר השכרת כוס קידוח יהלום, מחיר השכרת כוס יהלום, השאלת מקדחת כוס יהלום מחיר, מחירון השכרת מקדח יהלום למזגן"} />
            </Head>

            <Container>
                <MyBreadCrumbs />
                <Typography component="h1" className={classes.H1Style}>מחירון השכרת מקדחות כוס יהלום</Typography>
                <PriceListStepper currentStep={2} toolTipText="בחר את קוטר קידוח היהלום" />

                <div className={classes.filtersContainer}>
                    <DiameterFilter
                        diameters={
                            [
                                ["diameterMax3", 'עד 3 אינץ\'', '(7.5 ס"מ)'],
                                ["diameter3To6", '3-6 אינץ\'', '(7.5-15 ס"מ)'],
                                ["diameter6To12", '6-12 אינץ\'', '(15-30 ס"מ)'],
                            ]
                        }
                    />
                </div>

            </Container>
        </MainComponentContainer >
    );
}

export default DiamondDrills;