import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { GetToolBoxGreyBackground } from 'assets/Database/DatabaseUtils';
import { GAEvent, GAEventAction, GAEventCat } from '../../Utils/Tracking';
import { GetCategoryMainImage, GetCategoryMainImageFromPublicFolder } from 'assets/Database/DatabaseUtils';
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
        [theme.breakpoints.up('md')]: {
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
    imageContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: '150px',
        maxHeight: '100px',
        minHeight: '80px',
        marginBottom: '10px',
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

    //Todo: make references from old url price list pages to new page
    
    const hrefLink = `/rentals/price-list/${category.urlPostFix}`;

    let catImageObj = GetCategoryMainImageFromPublicFolder(category["id"]);
    let HebrewNameSingle = category["HebrewNameSingle"];

    return (
        <Link href={hrefLink} passHref>
            <a>
                <div
                    className={classes.CategoryBoxStyle}
                //  onClick={() => GAEvent(GAEventCat.CARD_BAR_Main_Page, GAEventAction.CATEGORY_CARD_CLICKED, urlPostFix)}
                >
                    <div className={classes.InnerCategoryBoxStyle}>
                        <div className={classes.imageContainer} >
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src={catImageObj.src}
                                alt={catImageObj.alt}
                                sizes={`(min-width: 960px) 200px, 70px`}
                                quality={100}
                            />
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