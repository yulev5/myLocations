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

function WeightsFilter(props) {
    const classes = useStyles();

    let listOfWeights = props.weights.map(weightTuple => {
        return (
            <Grid item xs={4} md={2} key={weightTuple[0]}>
                <PriceListSingleFilterBox
                    filterId={weightTuple[0]}
                    filterName={weightTuple[1]}
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

export default WeightsFilter;