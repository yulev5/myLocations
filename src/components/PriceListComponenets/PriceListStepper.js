import { Divider, Grid, makeStyles, Tooltip, Zoom } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import PriceListStepperLinkNoLink from './PriceListStepperLinkNoLink';

const useStyles = makeStyles((theme) => ({
    stepperContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: '20px',
        paddingLeft: '20px',
        [theme.breakpoints.up('md')]: {
            paddingRight: '30px',
            paddingLeft: '30px',
        }
    },
    innerStepNumAndTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto'
    },
    //divider style
    dividerContainer: {
        flexGrow: '1'
    },
    dividerPassed: {
        height: '3px',
        backgroundColor: myColors.TurquoisePelorous
    },
    dividerNext: {
        height: '3px',
        backgroundColor: myColors.DarkBlueOuterSpace
    },
}));

function PriceListStepper(props) {
    const classes = useStyles();
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const router = useRouter();

    const handleTooltipClose = () => {
        setTooltipOpen(false);
    };

    const handleTooltipOpen = (clickedId) => {
        if (clickedId >= props.currentStep) {
            setTooltipOpen(true);
            setTimeout(() => {
                handleTooltipClose();
            }, 2500);
        }
    };

    return (
        <Tooltip
            PopperProps={{ disablePortal: true }}
            onClose={handleTooltipClose}
            open={tooltipOpen}
            TransitionComponent={Zoom}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={props.toolTipText}
            placement={props.currentStep == 1 ? "bottom-start" : (props.currentStep == 2 | props.currentStep == 3 ? "bottom" : "bottom-end")}>

            <div className={`${classes.stepperContainer} ${props.className}`}>

                <PriceListStepperLinkNoLink
                    href={props.currentStep > 1 ? "/rentals/price-list/" : null}
                    handleTooltipOpen={handleTooltipOpen}
                    currentStep={props.currentStep}
                    stepNumber={1}
                    textUnderStepNum="בחר כלי"
                />


                <div onClick={() => handleTooltipOpen(1.5)} className={classes.dividerContainer}>
                    <Grid container spacing={0} className={classes.innerStepNumAndTextContainer}>
                        <Grid item xs={12} md={12}>
                            <Grid container spacing={0}>
                                <Grid item xs={6} md={6} >
                                    <Divider className={classes.dividerPassed} />
                                </Grid>
                                <Grid item xs={6} md={6} >
                                    <Divider className={props.currentStep >= 2 ? classes.dividerPassed : classes.dividerNext} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} style={{ height: '22px' }}>

                            </Grid>
                        </Grid>
                    </Grid>
                </div>


                <PriceListStepperLinkNoLink
                    href={props.currentStep > 2 ? `/rentals/price-list/${router.query["categoryID"]}` : null}
                    handleTooltipOpen={handleTooltipOpen}
                    currentStep={props.currentStep}
                    stepNumber={2}
                    textUnderStepNum="סנן סוג"
                    TypographyExtraStyle={{ marginRight: '-5px' }}
                />

                <div onClick={() => handleTooltipOpen(2.5)} className={classes.dividerContainer}>
                    <Grid container spacing={0} className={classes.innerStepNumAndTextContainer}>

                        <Grid container spacing={0}>
                            <Grid item xs={6} md={6} >
                                <Divider className={props.currentStep >= 2 ? classes.dividerPassed : classes.dividerNext} />
                            </Grid>
                            <Grid item xs={6} md={6} >
                                <Divider className={props.currentStep >= 3 ? classes.dividerPassed : classes.dividerNext} />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={12} style={{ height: '22px' }}>

                        </Grid>
                    </Grid>
                </div>

                <PriceListStepperLinkNoLink
                    href={props.currentStep > 3 ? `/rentals/price-list/${router.query["categoryID"]}/${router.query["filterID"]}` : null}
                    handleTooltipOpen={handleTooltipOpen}
                    currentStep={props.currentStep}
                    stepNumber={3}
                    textUnderStepNum="זמן השכרה"
                    TypographyExtraStyle={{ marginRight: '-15px' }}
                />

                <div onClick={() => handleTooltipOpen(2.5)} className={classes.dividerContainer}>
                    <Grid container spacing={0} className={classes.innerStepNumAndTextContainer}>

                        <Grid container spacing={0}>
                            <Grid item xs={6} md={6} >
                                <Divider className={props.currentStep >= 3 ? classes.dividerPassed : classes.dividerNext} />
                            </Grid>
                            <Grid item xs={6} md={6} >
                                <Divider className={props.currentStep >= 4 ? classes.dividerPassed : classes.dividerNext} />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={12} style={{ height: '22px' }}>

                        </Grid>
                    </Grid>
                </div>

                <PriceListStepperLinkNoLink
                    handleTooltipOpen={handleTooltipOpen}
                    currentStep={props.currentStep}
                    stepNumber={4}
                    textUnderStepNum="מחיר"
                />

            </div >
        </Tooltip>
    );
}

export default PriceListStepper;