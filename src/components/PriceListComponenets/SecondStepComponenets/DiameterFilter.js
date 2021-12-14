import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import PriceListSingleFilterBox from './PriceListSingleFilterBox';

const useStyles = makeStyles((theme) => ({
    weightGridContainer: {
        marginRight: '8px',
        marginLeft: '8px',
    },
    grid: {
        width: '100%',
        margin: '0px',
        justifyContent: 'center'
    },
}));

function DiameterFilter(props) {
    const classes = useStyles();

    let listOfWeights = props.diameters.map(diameterTuple => {
        return (
            <Grid item xs={4} md={2} key={diameterTuple[0]}>
                <PriceListSingleFilterBox
                    filterId={diameterTuple[0]}
                    filterName={diameterTuple[1]}
                    filterNameSecondLine={diameterTuple[2]}
                />
            </Grid>)
    });

    return (
        <div className={classes.weightGridContainer}>
            <Grid container spacing={2} className={classes.grid}>
                {listOfWeights}
            </Grid>
        </div>
    );
}

export default DiameterFilter;