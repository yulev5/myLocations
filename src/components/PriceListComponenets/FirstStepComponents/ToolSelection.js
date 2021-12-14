import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { SortCategoriesByPopularity } from 'assets/Database/DatabaseUtils';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import { UserContext } from 'contexts/MyContext';
import React, { useContext } from 'react';
import PriceListStepper from '../PriceListStepper';
import PriceListSingleCategoryBox from './PriceListSingleCategoryBox';

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
    stepperStyle: {
        marginBottom: '40px'
    },
    gridContainer: {
        overflow: 'hidden',
        margin: '0 8px 30px 8px',
        [theme.breakpoints.up('md')]: {
            margin: '0 0px 50px 0px',
        }
    },
    grid: {
        width: '100%',
        margin: '0px',
    },
}));

function ToolSelection(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    // SortCategoriesByPopularity(data.categoriesList);

    let listOfToolsCategories = props.categories.map((category, index) => {
        return (
            <Grid item xs={3} md={2} key={index}>
                <PriceListSingleCategoryBox category={category} />
            </Grid>
        );
    });

    return (
        <>
            <Typography component="h1" className={classes.H1Style}>מחירון השכרת כלי עבודה</Typography>

            <PriceListStepper currentStep={1} toolTipText="בחר כלי העבודה לבדיקת מחיר ההשכרה" className={classes.stepperStyle} />

            <div className={classes.gridContainer}>
                <Grid container spacing={2} className={classes.grid}>
                    {listOfToolsCategories}
                </Grid>
            </div>
        </>
    );
}

export default ToolSelection;