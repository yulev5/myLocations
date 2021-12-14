import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';
import { GetToolBoxGreyBackground } from 'assets/Database/DatabaseUtils';
import { GAEvent, GAEventAction, GAEventCat } from '../../Utils/Tracking';
import { GetFilterImageObj } from 'assets/Database/DatabaseUtils';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Image from 'next/image';
import { useRouter } from 'next/router';


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
        maxWidth: '150px',
        maxHeight: '100px',
        minHeight: '80px',
        marginBottom: '10px',
    },
    filterNameStyle: {
        whiteSpace: 'nowrap',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight600SemiBold,
        paddingBottom: '5px',
        fontSize: myFontSizes.TextFontSize14,
        [theme.breakpoints.up('myxs')]: {
            fontSize: myFontSizes.TextFontSize16,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize20,
        }
    },
}));

function PriceListSingleFilterBox(props) {
    const classes = useStyles();
    let { filterId, filterName, filterNameSecondLine } = props
    const router = useRouter();

    const hrefLink = `/rentals/price-list/${router.query["categoryID"]}/${filterId}`;
    const upperFilterImageObj = GetFilterImageObj(filterId);

    return (
        <Link passHref href={hrefLink}>
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
                                src={upperFilterImageObj.src}
                                alt={upperFilterImageObj.alt}
                                sizes={`(min-width: 960px) 200px, 32vw`}
                            />
                        </div>

                        <Typography
                            variant="h3"
                            className={`${classes.filterNameStyle}`}>
                            {filterName}
                        </Typography>
                        {filterNameSecondLine &&
                            <Typography
                                variant="h3"
                                className={`${classes.filterNameStyle}`}>
                                {filterNameSecondLine}
                            </Typography>
                        }
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default PriceListSingleFilterBox;