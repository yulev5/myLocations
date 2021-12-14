import React, { useContext } from 'react';
import MainComponentContainer from 'components/ContainerComponents/MainComponentContainer';
import { makeStyles, Typography, Container } from '@material-ui/core';
import Head from 'next/head';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import WeightsFilter from 'components/PriceListComponenets/SecondStepComponenets/WeightsFilter';
import PriceListStepper from 'components/PriceListComponenets/PriceListStepper';
import MyBreadCrumbs from 'components/GeneralComponents/MyBreadCrumbs';
import { UserContext } from 'contexts/MyContext';

const useStyles = makeStyles((theme) => ({
    H1Style: {
        lineHeight: '63px',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize28,
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

function Hammers(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    data.generalPageBreadCrumb = "מחירון השכרת כלי עבודה";
    data.urlPostFix = "rentals/price-list/";

    // function createData(generatorName, oneDayPrice, threeDaysPrice, longRentPrice) {
    //     return { generatorName, oneDayPrice, threeDaysPrice, longRentPrice };
    // }

    // const rows = [
    //     createData('פטישון', 77, 65, 50),
    //     createData('פטיש חציבה 5 ק"ג', 128, 118, 105),
    //     createData('פטיש חציבה 11 ק"ג', 154, 145, 130),
    //     createData('פטיש חציבה 15 ק"ג', 197, 180, 165),
    //     createData('פטיש חציבה 30 ק"ג', 220, 210, 195),
    // ];

    return (
        <MainComponentContainer>
            <Head>
                <title>{"מחירון השכרת פטישי חציבה" + " - Power-Tools.co.il"}</title>
                <meta name="description" content={"צפה במחירון השכרת פטישי חציבה - מחיר השכרת פטיש חציבה לפי שעות, ימים או תקופות ארוכות"} />
                <meta name="keywords" content={"מחירון השכרת פטיש חציבה, מחיר השכרת פטיש חציבה, מחיר השכרה פטיש, עלות השכרת פטיש חציבה, השוואת מחירים פטיש חציבה"} />
            </Head>

            <Container>
                <MyBreadCrumbs />
                <Typography component="h1" className={classes.H1Style}>מחירון השכרת פטישי חציבה</Typography>
                <PriceListStepper currentStep={2} toolTipText="בחר גודל פטיש חציבה" />

                <div className={classes.filtersContainer}>
                    <WeightsFilter
                        weights={
                            [
                                ["5KG", "5 קילו"],
                                ["7.5KG", "7.5 קילו"],
                                ["10KG", "10 קילו"],
                                ["20KG", "20 קילו"],
                                ["30KG", "30 קילו"]
                            ]
                        }
                    />
                </div>

            </Container>
        </MainComponentContainer >
    );
}

export default Hammers;