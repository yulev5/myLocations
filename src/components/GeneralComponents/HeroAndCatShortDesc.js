import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Image from 'next/image';
import React, { useContext } from 'react';
import { GetPowerToolsHeroWithTools } from '../../assets/Database/DatabaseUtils';
import { UserContext } from '../../contexts/MyContext';
import { textColorDarkBlueOuterSpace, TextFontSize48, TextFontWeight700Bold } from '../Styles/MyStyles';
import useDimensions from 'react-cool-dimensions';

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '30px',
        marginLeft: '30px',
        [theme.breakpoints.up('md')]: {
            width: '560px',
            marginRight: 'auto',
            marginLeft: 'auto',
        }
    },
    PowerToolsHeroLogoStyle: {
        width: '38px',
        height: '64px',
        marginTop: '23px',
        [theme.breakpoints.up('md')]: {
            width: '94px',
            height: '160px',
            marginTop: 'initial'
        }
    },
    TextFontSize48,
    TextFontWeight700Bold,
    textColorDarkBlueOuterSpace,
    H1CatNameStyle: {
        lineHeight: '63px',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize24,
        marginTop: '6px',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize48,
            marginTop: 'initial',
        }
    },
    shortDescriptionStyle: {
        color: myColors.BlackMirage,
        fontSize: myFontSizes.TextFontSize16,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize24,
        }
    },
}));

function HeroAndCatShortDesc(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const { observe, width } = useDimensions();

    let headerText = props.h1Title ? props.h1Title : (data.currentCategoryData ? data.currentCategoryData.linkText : "");
    let shortDescriptionText = props.shortText ? props.shortText : (data.currentCategoryData ? data.currentCategoryData.shortDescription : "");
    let imageAlt = props.imageAlt ? props.imageAlt : data.currentCategoryData.linkText;
    let imageTitle = props.imageAlt ? props.imageAlt : data.currentCategoryData.metaDescription;

    let PowerToolsHero = GetPowerToolsHeroWithTools();

    return (
        <div className={`${props.className} ${classes.containerStyle}`}>
            <div className={classes.PowerToolsHeroLogoStyle} ref={observe}>
                <Image
                    src={PowerToolsHero.src}
                    priority={true}
                    width={100}
                    height={160}
                    layout='responsive'
                    objectFit="contain"
                    alt={imageAlt}
                    title={imageTitle}
                    sizes={(width !== undefined && width != 0) ? `${Math.round(width)}px` : '38px'}
                />
            </div>
            <Typography component="h1" className={`${classes.H1CatNameStyle}`}>
                {headerText}
            </Typography>
            <Typography className={`${classes.shortDescriptionStyle}`}>
                {shortDescriptionText}
            </Typography>
        </div>
    );
}

export default HeroAndCatShortDesc;