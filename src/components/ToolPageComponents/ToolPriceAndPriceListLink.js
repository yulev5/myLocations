import { makeStyles, Typography } from '@material-ui/core';
import { listOfCategoriesWithoutFilter } from 'assets/SharedTexts';
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
        justifyContent: 'space-between',
        [theme.breakpoints.up('md')]: {
        }
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

function ToolPriceAndPriceListLink(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    const fullPriceBeforeDiscount = data.currentTool.UpTo24Hours * 1.3;

    return (
        <div className={`${props.className} ${classes.toolPriceAndPriceList}`}>
            <div className={classes.priceLine}>
                <Typography className={`${classes.priceTextTitle}`}>
                    מחיר השכרה:
                </Typography>
                <Typography className={`${classes.priceText}`}>
                    {'\u20AA'}{data.currentTool.UpTo24Hours} / יום
                </Typography>
            </div>

            {data.currentCategoryData.hasPriceList &&
                <Link passHref
                    href={listOfCategoriesWithoutFilter[data.currentCategoryData.urlPostFix] ?
                        `/rentals/price-list/${data.currentCategoryData.urlPostFix}/1`
                        :
                        `/rentals/price-list/${data.currentCategoryData.urlPostFix}`
                    }>
                    <a>
                        <Typography className={`${classes.priceListLinkStyle}`}>
                            למחירון המלא - לחץ כאן
                    </Typography>
                    </a>
                </Link>
            }

        </div>
    );
}

export default ToolPriceAndPriceListLink;