import { makeStyles, Grid, Avatar, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { myColors } from 'components/Styles/Colors';
import { myFontWeights } from 'components/Styles/Sizes';

const useStyles = makeStyles((theme) => ({
    //number styles
    stepNumberContainer: {
        alignItems: 'center',
        width: '30px',
        [theme.breakpoints.up('md')]: {
            width: '40px',
        }
    },
    innerStepNumAndTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto'
    },
    link: {
        cursor: 'pointer'
    },
    avatarNumberCurrent: {
        backgroundColor: myColors.TurquoisePelorous,
        boxShadow: '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)',
        width: '30px',
        height: '30px',
        [theme.breakpoints.up('md')]: {
            fontWeight: myFontWeights.Weight700Bold,
            width: '40px',
            height: '40px',
        }
    },
    avatarNumber: {
        backgroundColor: myColors.DarkBlueOuterSpace,
        boxShadow: '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)',
        width: '30px',
        height: '30px',
        [theme.breakpoints.up('md')]: {
            fontWeight: myFontWeights.Weight700Bold,
            width: '40px',
            height: '40px',
        }
    },
    aboveStepText: {
        whiteSpace: 'nowrap',
    },
    aboveStepTextCurrent: {
        whiteSpace: 'nowrap',
        fontWeight: myFontWeights.Weight700Bold
    },
}));

function PriceListStepperLinkNoLink(props) {
    const classes = useStyles();

    let linkNoLinkElement = null;
    if (props.href) {
        linkNoLinkElement =
            (<Link passHref href={props.href}>
                <div onClick={() => props.handleTooltipOpen(props.stepNumber)} className={`${classes.stepNumberContainer} ${classes.link}`}>
                    <Grid container spacing={0} className={classes.innerStepNumAndTextContainer}>
                        <Grid item xs={12} md={12}>
                            <Avatar className={props.currentStep >= props.stepNumber ? classes.avatarNumberCurrent : classes.avatarNumber}>{props.stepNumber}</Avatar>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography
                                component="h2"
                                className={props.currentStep === props.stepNumber ? classes.aboveStepTextCurrent : classes.aboveStepText}
                                style={props.TypographyExtraStyle ? props.TypographyExtraStyle : null}>
                                {props.textUnderStepNum}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Link>)
    } else {
        linkNoLinkElement =
            (<div onClick={() => props.handleTooltipOpen(props.stepNumber)} className={`${classes.stepNumberContainer}`}>
                <Grid container spacing={0} className={classes.innerStepNumAndTextContainer}>
                    <Grid item xs={12} md={12}>
                        <Avatar className={props.currentStep >= props.stepNumber ? classes.avatarNumberCurrent : classes.avatarNumber}>{props.stepNumber}</Avatar>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography
                            component="h2"
                            className={props.currentStep === props.stepNumber ? classes.aboveStepTextCurrent : classes.aboveStepText}
                            style={props.TypographyExtraStyle ? props.TypographyExtraStyle : null}>
                            {props.textUnderStepNum}
                        </Typography>
                    </Grid>
                </Grid>
            </div>)
    }

    return (
        <>
            {linkNoLinkElement}
        </>
    );
}

export default PriceListStepperLinkNoLink;