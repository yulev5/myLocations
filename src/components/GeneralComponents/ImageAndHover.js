import { Box, makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Image from 'next/image';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    promoIcon: {
        width: '210px',
        cursor: 'pointer',
        padding: '10px 2px',
        boxSizing: 'border-box',
        '&:hover': {
            borderRadius: '12px',
            boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.15), 0px 3px 6px #00000029'
        }
    },
    abovePromoImgText: {
        fontSize: myFontSizes.TextFontSize22,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        textAlign: 'center'
    },
    promoIconImgContainer: {
        margin: 'auto',
        maxWidth: '100px',
    },
    underPromoImgText: {
        color: myColors.RegularWhite,
        fontSize: myFontSizes.TextFontSize16,
        fontWeight: myFontWeights.Weight600SemiBold,
        lineHeight: '19px',
        textShadow: '1px 1px 1px #5b5c5e'
    },
}));

function name({ image, hoverImage, textAbove, textUnder }) {
    const classes = useStyles();
    const [isHovered, setIsHovered] = useState(false);

    let imageToShow = isHovered ? hoverImage : image;
    textUnder = isHovered ? textUnder : "";

    function handleHoverChanged(hoverStatus) {
        setIsHovered(hoverStatus);
    }
    return (
        <Box
            className={classes.promoIcon}
            component="div"
            onMouseEnter={() => handleHoverChanged(true)}
            onMouseLeave={() => handleHoverChanged(false)}
        >
            <Typography className={classes.abovePromoImgText} component="p">
                {textAbove}
            </Typography>
            <div className={classes.promoIconImgContainer}>
                <img
                    src={imageToShow.src}
                    alt={imageToShow.alt}
                    title={imageToShow.title}
                    layout="fixed"
                    width={100}
                    height={100}
                />
            </div>
            <Typography className={classes.underPromoImgText} component="h3">
                {textUnder}
            </Typography>
        </Box>

    );
}

export default name;