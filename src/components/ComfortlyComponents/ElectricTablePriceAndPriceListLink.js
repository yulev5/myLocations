import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import { UserContext } from 'contexts/MyContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
    toolPriceAndPriceList: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        marginRight: '36px',
        [theme.breakpoints.up('md')]: {
            marginRight: '0px',
        }
    },
    priceLine: {
        display: 'flex',
        justifyContent: 'space-arround',
    },
    priceTextTitle: {
        marginLeft: '15px',
        fontSize: myFontSizes.TextFontSize32,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        whiteSpace: 'nowrap',
    },
    priceText: {
        fontSize: myFontSizes.TextFontSize32,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight500,
        whiteSpace: 'nowrap',
        marginLeft: '10%',
        [theme.breakpoints.up('md')]: {
            marginLeft: '15px',
        }
    },
    priceListLinkStyle: {
        textDecoration: 'underline',
        fontSize: myFontSizes.TextFontSize18,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight500,
        textAlign: 'right',
        marginTop: '6px',
        [theme.breakpoints.up('md')]: {
            marginTop: '18px',
        }
    },
}));

function ElectricTablePriceAndPriceListLink(props) {
    const classes = useStyles();

    return (
        <div className={`${props.className} ${classes.toolPriceAndPriceList}`}>
            <div className={classes.priceLine}>
                <Typography className={`${classes.priceTextTitle}`}>
                    מחיר:
                </Typography>
                <Typography className={`${classes.priceText}`}>
                    {'\u20AA'}{props.electricTableData.UpTo24Hours}
                </Typography>
            </div>
        </div>
    );
}

export default ElectricTablePriceAndPriceListLink;