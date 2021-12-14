import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { GAEvent, GAEventAction, GAEventCat } from '../Utils/Tracking';
import Link from 'next/link';
import { GetToolBoxGreyBackground } from 'assets/Database/DatabaseUtils';
import ButtonMedium from '../GeneralComponents/ButtonMedium';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Image from 'next/image';
import useDimensions from 'react-cool-dimensions';

const useStyles = makeStyles((theme) => ({
    CoupleSwipersStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '40vw',
        minHeight: '200px',
        [theme.breakpoints.up('md')]: {
            height: '360px',
            minHeight: '0',
        }
    },
    toolBoxStyle: {
        display: 'flex',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${GetToolBoxGreyBackground().src})`,
        boxShadow: '-3px 4px 6px #00000040',
        minWidth: '144px',
        width: '44vw',
        height: '40vw',
        minHeight: '200px',
        paddingTop: '10px',
        paddingRight: '10px',
        paddingLeft: '10px',
        borderRadius: '4px',
        [theme.breakpoints.up('md')]: {
            width: '240px',
            height: '360px',
            paddingRight: '0px',
            paddingLeft: '0px',
            minHeight: '0',
            minWidth: '0',
            boxShadow: '0px 3px 6px #00000029',
            borderRadius: '8px',
            '&:hover': {
                border: '6px solid #46C1C3',
                boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2), 0px 3px 6px #00000029'
            },
        }
    },
    InnerToolBoxStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '44vw',
        minWidth: '144px',
        height: '40vw',
        minHeight: '200px',
        [theme.breakpoints.up('md')]: {
            width: '225px',
            height: '348px',
            minHeight: '0',
            minWidth: '0',
        }
    },
    pictureContainer: {
        objectFit: 'contain',
        width: '100%',
        minHeight: '80px',
        height: '40vw',
        [theme.breakpoints.up('md')]: {
            height: '170px',
        }
    },
    imageBoxStyle: {
        objectFit: 'contain',
        width: '100%',
        minHeight: '80px',
        height: '40vw',
        [theme.breakpoints.up('md')]: {
            height: '170px',
        }
    },
    toolNameStyle: {
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize18,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize24,
            marginTop: '10px',
        }
    },
    FullModelTypographyStyle: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            marginTop: '4px',
            color: myColors.DarkBlueOuterSpace,
            fontSize: myFontSizes.TextFontSize16,
            fontWeight: myFontWeights.Weight500
        }
    },
    buttonToolAllDetailsContainer: {
        marginBottom: '14px',
        marginTop: '12px',
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
            marginBottom: '10px',
        }
    },
    buttonToolAllDetails: {
        height: '39px',
        width: '110px',
        [theme.breakpoints.up('md')]: {
            height: '47px',
            width: '130px',
        }
    },
    img: {
        width: 'auto !important',
        height: 'auto !important',
        maxHeight: '100% !important',
        maxWidth: '100% !important',
        minWidth: 'auto !important'
    }
}));

export function ToolBoxInCategoryPage({ tool, category }) {
    const classes = useStyles();
    const { observe, width } = useDimensions();

    let toolName = tool["nameWithoutRentalText"];
    let toolFullModel = tool["fullModel"];
    let toolImageObj = tool.images[0];
    const hrefLink = '/rentals/[categoryID]/[toolID]';
    const asLink = `/rentals/${category.urlPostFix}/${tool.urlPostFix}`;

    return (
        <div className={classes.CoupleSwipersStyle}>
            <Link href={hrefLink} as={asLink} passHref>
                <a>
                    <div
                        className={classes.toolBoxStyle}
                        onClick={() => GAEvent(GAEventCat.CARD_BAR_Main_Page, GAEventAction.CATEGORY_CARD_CLICKED, tool.urlPostFix)}
                    >
                        <div className={classes.InnerToolBoxStyle} ref={observe}>
                            <Image
                                className={classes.img}
                                priority={true}
                                layout="responsive"
                                width={130}
                                height={100}
                                objectFit="contain"
                                sizes={(width !== undefined && width != 0) ? `${Math.round(width)}px` : '225px'}
                                src={toolImageObj.src}
                                alt={toolImageObj.alt}
                                title={toolImageObj.title}
                                placeholder="blur"
                                blurDataURL={'/images/iconsAndLogos/logos/השכרת-כלי-עבודה-Power-Tools-Logo.svg'}
                            />

                            <Typography variant="h2" className={`${classes.toolNameStyle}`}>
                                {toolName}
                            </Typography>
                            <Typography variant="h4" className={`${classes.FullModelTypographyStyle}`}>
                                {toolFullModel}
                            </Typography>
                            <ButtonMedium
                                className={classes.buttonToolAllDetailsContainer}
                                buttonStyle={classes.buttonToolAllDetails}
                                text="לכל הפרטים" />
                        </div>
                    </div>
                </a>
            </Link>
        </div >
    );
}