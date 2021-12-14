import { makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from 'contexts/MyContext';
import Link from 'next/link';
import Image from 'next/image';
import { GAEvent, GAEventAction, GAEventCat } from 'components/Utils/Tracking';
import { TextFontWeight700Bold, textColorDarkBlueOuterSpace, TextFontSize16, TextFontSize20 } from '../../Styles/MyStyles';
import { GetToolBoxGreyBackground } from 'assets/Database/DatabaseUtils';

const useStyles = makeStyles((theme) => ({
    SuperMenuOpenPartCategoriesContainer: {
        paddingTop: '20px',
        display: 'flex',
        marginRight: '20px',
        marginLeft: '20px'
    },
    coupleCategories: {
        height: '320px',
        width: '139px',
        marginLeft: '20px'
    },
    singleCategoryContainer: {
        height: '160px',
        width: '139px',
        marginLeft: '20px',
        marginBottom: '20px',
    },
    coupleCategories: {
        height: '320px',
        width: '139px',
        marginLeft: '20px'
    },
    singleCategory: {
        marginBottom: '20px',
    },
    CategoryBoxStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '139px',
        height: '139px',
        boxSizing: 'border-box',
        backgroundImage: `url(${GetToolBoxGreyBackground().src})`,
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '8px',
        // transition: 'all 0.25s ease', 
        '&:hover': {
            border: '6px solid #46C1C3',
            boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2), 0px 3px 6px #00000029'
        }
    },
    InnerCategoryBoxStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '120px',
        height: '120px',
    },
    imageContainer: {

    },
    textColorDarkBlueOuterSpace,
    TextFontSize16,
    TextFontWeight700Bold
}));

function SuperMenuOpenPart({ hoveredCat, setIsSuperMenuHidden }) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    return (
        <div className={classes.SuperMenuOpenPartCategoriesContainer}>
            {data.superCategories[hoveredCat].categories.map((category) =>
                <div key={category.id} className={classes.singleCategoryContainer}>
                    <div className={classes.singleCategory}>
                        <Link href={`/rentals/[categoryID]`} as={`/rentals/${category.urlPostFix}`} passHref >
                            <a>
                                <div className={classes.CategoryBoxStyle} onClick={() => { GAEvent(GAEventCat.CARD_BAR_Main_Page, GAEventAction.CATEGORY_CARD_CLICKED, category.urlPostFix); setIsSuperMenuHidden(true) }}>
                                    <div className={classes.InnerCategoryBoxStyle}>

                                        <div className={classes.imageContainer}>
                                            <Image
                                                src={category.images[0].src}
                                                layout="responsive"
                                                width={125}
                                                height={100}
                                                objectFit="contain"
                                                sizes='120px'
                                                alt={category.images[0].alt}
                                                title={category.images[0].title}
                                            />
                                        </div>

                                        <Typography align="center" variant="h2" className={`${classes.textColorDarkBlueOuterSpace} ${classes.TextFontSize16} ${classes.TextFontWeight700Bold}`}>
                                            {category["HebrewName"]}
                                        </Typography>
                                    </div>
                                </div>
                            </a>
                        </Link>

                    </div>
                </div>
            )}
        </div>
    );
}

export default SuperMenuOpenPart;