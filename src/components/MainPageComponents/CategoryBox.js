import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { GAEvent, GAEventAction, GAEventCat } from '../Utils/Tracking';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Image from 'next/image';
import { GetToolBoxGreyBackground } from 'assets/Database/DatabaseUtils';
import useDimensions from 'react-cool-dimensions';

const useStyles = makeStyles((theme) => ({
    CategoryBoxStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundImage: `url(${GetToolBoxGreyBackground().src})`,
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '8px',
        width: '40vw',
        height: '40vw',
        [theme.breakpoints.up('md')]: {
            width: '240px',
            height: '240px',
            // transition: 'border 0.25s ease',
            '&:hover': {
                border: '6px solid #46C1C3',
                boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2), 0px 3px 6px #00000029'
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
        [theme.breakpoints.up('md')]: {
            width: '90%',
            height: '90%',
        }
    },
    pictureContainerStyle: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    imageBoxStyle: {
        padding:'10px !important'
    },
    categoryBoxCatNameStyle: {
        whiteSpace: 'nowrap',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        paddingBottom: '5px',
        fontSize: myFontSizes.TextFontSize16,
        [theme.breakpoints.up('myxs')]: {
            fontSize: myFontSizes.TextFontSize20,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: myFontSizes.TextFontSize24,
            paddingBottom: '15px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize28,
            paddingBottom: '0px',
        }
    },
}));

function CategoryBox(props) {
    const classes = useStyles();
    const { observe, width } = useDimensions();
    let category = props.category;

    const hrefLink = `/rentals/[categoryID]`;
    const urlPostFix = category.urlPostFix;
    const asLink = `/rentals/${urlPostFix}`;
    let upperCatImageObj = category.images[0];
    let categoryName = category.HebrewName;

    return (
        <div className={props.className}>
            <Link href={hrefLink} as={asLink} passHref>
                <a>
                    <div className={classes.CategoryBoxStyle} onClick={() => GAEvent(GAEventCat.CARD_BAR_Main_Page, GAEventAction.CATEGORY_CARD_CLICKED, urlPostFix)}>
                        <div className={classes.InnerCategoryBoxStyle}>

                            <div className={classes.pictureContainerStyle} ref={observe}>
                                <Image
                                    src={upperCatImageObj.src}
                                    className={classes.imageBoxStyle}
                                    layout="responsive"
                                    width={120}
                                    height={100}
                                    sizes={(width !== undefined && width != 0) ? `${Math.round(width)}px` : '200px'}
                                    objectFit="contain"
                                    alt={upperCatImageObj.alt}
                                    title={upperCatImageObj.title}
                                />
                            </div>
                            <Typography
                                variant="h2"
                                className={`${classes.categoryBoxCatNameStyle}`}>
                                {categoryName}
                            </Typography>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default CategoryBox;