import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { GetToolBoxGreyBackground } from 'assets/Database/DatabaseUtils';
import { GAEvent, GAEventAction, GAEventCat } from '../../Utils/Tracking';
import { GetFilterImageObj } from 'assets/Database/DatabaseUtils';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Image from 'next/image';


const useStyles = makeStyles((theme) => ({
    CategoryBoxStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundImage: `url(${GetToolBoxGreyBackground().src})`,
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            border: '6px solid transparent',
            '&:hover': {
                transition: 'border 0.2s ease-in-out',
                border: '6px solid #46C1C3',
            },
        }
    },
    InnerCategoryBoxStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: '45px',
        maxHeight: '45px',
        minHeight: '45px',
        margin: '10px 0px'
    },
    pictureContainerStyle: {
        padding: '5px 5px 5px 5px',
        width: 'auto',
        height: 'auto',
        maxHeight: '100px',
        minHeight: '80px',
        margin: 'auto',
    },
    imageBoxStyle: {
        objectFit: 'contain',
        width: '100%',
        height: '100%',
    },
    filterNameStyle: {
        whiteSpace: 'nowrap',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight600SemiBold,
        paddingBottom: '5px',
        fontSize: myFontSizes.TextFontSize18,
        [theme.breakpoints.up('myxs')]: {
            fontSize: myFontSizes.TextFontSize22,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize20,
        }
    },
}));


function PriceListSingleTimeFilterBox(props) {
    const classes = useStyles();
    let { categoryID, filterID, filterName, timeFilterId } = props

    const upperFilterImageObj = GetFilterImageObj("timeFilterIcon");
    const hrefLink = `/rentals/price-list/${categoryID}/${filterID}/${timeFilterId}`;

    return (
        <Link passHref href={hrefLink}>
            <a>
                <div
                    //  onClick={() => GAEvent(GAEventCat.CARD_BAR_Main_Page, GAEventAction.CATEGORY_CARD_CLICKED, urlPostFix)}
                    className={classes.CategoryBoxStyle}>

                    <div className={classes.InnerCategoryBoxStyle}>

                        <div className={classes.imageContainer} >
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src={upperFilterImageObj.src}
                                alt={filterName}
                                sizes={`60px`}
                            />
                        </div>

                        <Typography
                            className={`${classes.filterNameStyle}`}
                            variant="h3">
                            {filterName}
                        </Typography>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default PriceListSingleTimeFilterBox;