import { makeStyles, Typography } from '@material-ui/core';
import { getQuotationMarkImage, getReviewProfileImg } from 'assets/Database/DatabaseUtils';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    reviewContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        marginBottom: '50px'
    },
    quotationMarkIconStyle: {
        height: '40px',
        width: '25px',
        [theme.breakpoints.up('md')]: {
            height: '50px',
            width: '32px',
        }
    },
    reviewTextStyle: {
        marginTop: '20px',
        padding: '0px 20px',
        fontSize: myFontSizes.TextFontSize18,
        color: myColors.DarkBlueOuterSpace,
    },
    profileImgStyle: {
        marginTop: '40px',
        [theme.breakpoints.up('md')]: {
            marginTop: '44px'
        }
    },
    reviewerNameStyle: {
        marginTop: '24px',
        fontSize: myFontSizes.TextFontSize24,
        color: myColors.TurquoisePelorous,
    },
    reviewerProfessionStyle: {
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize24,
        color: myColors.TurquoisePelorous,
    }
}));

function SingleReviewComponent(props) {
    const classes = useStyles();

    let profileImg = getReviewProfileImg(props.reviewObj.imgId);

    const quotationMarkIcon = getQuotationMarkImage();
    return (
        <div className={classes.reviewContainer}>
            <div>
                <Image
                    className={classes.quotationMarkIconStyle}
                    src={quotationMarkIcon.src}
                    height={40}
                    width={25}
                    alt={quotationMarkIcon.alt}
                    title={quotationMarkIcon.title}
                />
                <Typography className={classes.reviewTextStyle}>
                    {props.reviewObj.review}
                </Typography>
            </div>

            <div>

                <Image
                    className={classes.profileImgStyle}
                    src={profileImg.src}
                    height={100}
                    width={100}
                    alt={profileImg.alt}
                    title={profileImg.title}
                />
                <Typography className={classes.reviewerNameStyle}>
                    {props.reviewObj.nameAndCity}
                </Typography>
                <Typography className={classes.reviewerProfessionStyle}>
                    {props.reviewObj.profession}
                </Typography>
            </div>
        </div>
    );
}

export default SingleReviewComponent;