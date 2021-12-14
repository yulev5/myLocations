import React, { useContext, useEffect } from 'react';
import MainComponentContainer from 'components/ContainerComponents/MainComponentContainer';
import { makeStyles, Grid, Container, Typography } from '@material-ui/core';
import Head from 'next/head';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import { UserContext } from 'contexts/MyContext';
import PriceListStepper from 'components/PriceListComponenets/PriceListStepper';
import MyBreadCrumbs from 'components/GeneralComponents/MyBreadCrumbs';
import PriceListSingleTimeFilterBox from 'components/PriceListComponenets/ThirdStepComponents/PriceListSingleTimeFilterBox';
import { AddCategoriesListToData, AddCurrentCategoryDataToDataBycategoryID, TimeFiltersData } from 'assets/Database/DatabaseUtils';
import { GetAllCatagoriesFromMongo } from 'components/Utils/mongodb';

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
    filtersContainer: {
        margin: '30px 8px 30px 8px',
        [theme.breakpoints.up('md')]: {
            margin: '50px 0px 50px 0px',
        }
    },
    grid: {
        width: '50%',
        maxWidth: '180px',
        margin: 'auto',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            width: 'auto',
            maxWidth: 'none',
        }
    },
}));


export async function getStaticProps(context) {
    const categories = await GetAllCatagoriesFromMongo();

    return {
        props: {
            categories: categories,
            categoryID: context.params.categoryID,
            filterID: context.params.filterID
        },
        revalidate: 1,
    }
}

function index(props) {
    const classes = useStyles();
    const { categories, categoryID, filterID } = props;
    const { data, storeData } = useContext(UserContext);

    data.generalPageBreadCrumb = "מחירון השכרת כלי עבודה";
    data.urlPostFix = "rentals/price-list/";

    AddCategoriesListToData(categories, data);
    AddCurrentCategoryDataToDataBycategoryID(categoryID, data);

    useEffect(() => {
        storeData(data);
    }, [])

    return (
        <MainComponentContainer>
            <Head>
                <title>{`מחיר השכרת ${data.currentCategoryData.HebrewNameSingle} - בחר לכמה זמן נדרש הכלי? לצפייה במחירון`}</title>
                <meta name="description" content={`מחירון השכרת כלי עבודה - בחר השכרה של 24 שעות, עד 3 ימים או יותר כדי להציג את מחיר ההשכרה של ${data.currentCategoryData.HebrewNameSingle}. או המשך למחירון כלי עבודה המלא לצפייה בכלי עבודה נוספים להשכרה`} />
                <meta name="keywords" content={`זמן השכרת כלי עבודה, מחירון השכרת כלי עבודה, בדוק מחיר השכרה של ציוד לעבודה`} />
            </Head>

            <Container>
                <MyBreadCrumbs />
                <Typography component="h1" className={classes.H1Style}>{`השכרת ${data.currentCategoryData.HebrewNameSingle} - לכמה זמן?`}</Typography>
                <PriceListStepper currentStep={3} toolTipText="בחר את משך זמן ההשכרה" />

                <div className={classes.filtersContainer}>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={12} md={2} key="1">
                            <PriceListSingleTimeFilterBox
                                filterName={TimeFiltersData.UpTo24Hours.filterName}
                                timeFilterId={TimeFiltersData.UpTo24Hours.filterId}
                                categoryID={categoryID}
                                filterID={filterID}
                            />
                        </Grid>
                        <Grid item xs={12} md={2} key="2">
                            <PriceListSingleTimeFilterBox
                                filterName={TimeFiltersData.UpTo3Days.filterName}
                                timeFilterId={TimeFiltersData.UpTo3Days.filterId}
                                categoryID={categoryID}
                                filterID={filterID}
                            />
                        </Grid>
                        <Grid item xs={12} md={2} key="3">
                            <PriceListSingleTimeFilterBox
                                filterName={TimeFiltersData.MoreThan3Days.filterName}
                                timeFilterId={TimeFiltersData.MoreThan3Days.filterId}
                                categoryID={categoryID}
                                filterID={filterID}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </MainComponentContainer >
    );
}

export default index;


export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { categoryID: 'hammers', filterID: '5KG' } },
            { params: { categoryID: 'hammers', filterID: '7.5KG' } },
            { params: { categoryID: 'hammers', filterID: '10KG' } },
            { params: { categoryID: 'hammers', filterID: '20KG' } },
            { params: { categoryID: 'hammers', filterID: '30KG' } },

            { params: { categoryID: 'diamond-drills', filterID: 'diameterMax3' } },
            { params: { categoryID: 'diamond-drills', filterID: 'diameter3To6' } },
            { params: { categoryID: 'diamond-drills', filterID: 'diameter6To12' } },

            { params: { categoryID: 'ground-compactors', filterID: '1' } },
            { params: { categoryID: 'generators', filterID: '1' } },
            { params: { categoryID: 'concrete-tools', filterID: '1' } },
            { params: { categoryID: 'drills-drivers', filterID: '1' } },
            { params: { categoryID: 'polish-machines', filterID: '1' } },
            { params: { categoryID: 'vacuum-cleaner', filterID: '1' } },
            { params: { categoryID: 'water-pressure-cleaners', filterID: '1' } },
            { params: { categoryID: 'ceramic-cutters-machines-for-rent', filterID: '1' } },
            { params: { categoryID: 'extension-cords-for-rent', filterID: '1' } },
            { params: { categoryID: 'water-pumps', filterID: '1' } },
            { params: { categoryID: 'sanders-for-rent', filterID: '1' } },
            { params: { categoryID: 'jigsaws', filterID: '1' } },
            { params: { categoryID: 'circular-saws', filterID: '1' } },
            { params: { categoryID: 'reciprocating-saws', filterID: '1' } },
            { params: { categoryID: 'chain-saws', filterID: '1' } },
            { params: { categoryID: 'thermal-cameras', filterID: '1' } },
            { params: { categoryID: 'concrete-saws', filterID: '1' } },
            { params: { categoryID: 'grinders', filterID: '1' } },
            { params: { categoryID: 'laser-levels', filterID: '1' } }
        ],
        fallback: false // fallback is set to false because we already know the slugs ahead of time
    }
}