import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { GetToolBoxGreyBackground } from 'assets/Database/DatabaseUtils';
import { GAEvent, GAEventAction, GAEventCat } from '../../Utils/Tracking';
import { GetCategoryMainImage, GetCategoryMainImageFromPublicFolder } from 'assets/Database/DatabaseUtils';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Image from 'next/image';
import { listOfCategoriesWithoutFilter } from 'assets/SharedTexts';
import useDimensions from 'react-cool-dimensions';

const useStyles = makeStyles((theme) => ({
    CategoryBoxStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundImage: `url(${GetToolBoxGreyBackground().src})`,
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '8px',
        width: '100%',
        height: '130px',
        [theme.breakpoints.up('md')]: {
            height: '180px',
            border: '6px solid transparent',
            '&:hover': {
                transition: 'border 0.2s ease-in-out',
                border: '6px solid #46C1C3',
                // boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2), 0px 3px 6px #00000029'
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
    outerImageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
    },
    imageContainer: {
        width: '18vw',
        maxHeight: '100px',
        [theme.breakpoints.up('md')]: {
            width: '152px',
            maxHeight: '145px'
        }
    },
    img: {
        width: 'auto !important',
        height: 'auto !important',
        maxWidth: '152px !important',
        minWidth: 'auto !important',
        minHeight: 'auto !important',
        margin: '0 auto !important',
        maxHeight: '100px !important',
        [theme.breakpoints.up('md')]: {
            maxHeight: '130px !important',
        }
    },
    categoryBoxCatNameStyle: {
        whiteSpace: 'nowrap',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight600SemiBold,
        paddingBottom: '2px',
        fontSize: myFontSizes.TextFontSize12,
        [theme.breakpoints.up('myxs')]: {
            fontSize: myFontSizes.TextFontSize14,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize18,
        }
    },
}));

function PriceListSingleCategoryBox(props) {
    const classes = useStyles();
    let category = props.category;
    const { observe, width } = useDimensions();

    //Todo: make references from old url price list pages to new page

    let hrefLink = `/rentals/price-list/${category.urlPostFix}`;
    if(listOfCategoriesWithoutFilter[category.urlPostFix]){
        hrefLink = `/rentals/price-list/${category.urlPostFix}/1`
    }

    let catImageObj = category.images[0];

    let HebrewNameSingle = category["HebrewNameSingle"];

    return (
        <Link href={hrefLink} passHref>
            <a>
                <div
                    className={classes.CategoryBoxStyle}
                //  onClick={() => GAEvent(GAEventCat.CARD_BAR_Main_Page, GAEventAction.CATEGORY_CARD_CLICKED, urlPostFix)}
                >
                    <div className={classes.InnerCategoryBoxStyle}>
                        <div className={classes.outerImageContainer}>
                            <div className={classes.imageContainer} ref={observe}>
                                <Image                            
                                    sizes={(width !== undefined && width != 0) ? `${Math.round(width)}px` : '140px'}
                                    className={classes.img}
                                    layout="responsive"
                                    src={category.images[0].src}
                                    alt={category.images[0].alt}
                                    width={catImageObj.width}
                                    height={catImageObj.height}
                                />
                            </div>
                        </div>
                        <Typography
                            variant="h3"
                            className={`${classes.categoryBoxCatNameStyle}`}>
                            {HebrewNameSingle}
                        </Typography>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default PriceListSingleCategoryBox;