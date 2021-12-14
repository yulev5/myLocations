import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import ContactUsButtons from 'components/ToolPageComponents/ContactUsButtons';
import React from 'react';
import ElectricTableContactUsButtons from './ElectricTableContactUsButtons';
import ElectricTablePriceAndPriceListLink from './ElectricTablePriceAndPriceListLink';

const useStyles = makeStyles((theme) => ({
    toolInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        [theme.breakpoints.up('md')]: {
            width: '414px',
        }
    },
    rightSideInfoInnerTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        [theme.breakpoints.up('md')]: {
            width: '414px',
            height: '250px',
        }
    },
    toolMainNameAndFullModel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    toolBigTitleStyle: {
        fontWeight: myFontWeights.Weight700Bold,
        color: myColors.DarkBlueOuterSpace,
        fontSize: myFontSizes.TextFontSize32,
        paddingLeft: '10px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '0px',
            fontSize: myFontSizes.TextFontSize40,
        }
    },
    modelTextStyle: {
        marginTop: '12px',
        fontSize: myFontSizes.TextFontSize16,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight500,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize24,
        }
    },
    hideOnMobile: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    contactUsButtonsStyle: {
        marginTop: '40px',
        height: '125px',
        width: '414px',
    },
}));

function ElectricTableInfoSection(props) {
    const classes = useStyles();

    return (
        <div className={`${props.className} ${classes.toolInfoContainer}`}>

            <div className={classes.rightSideInfoInnerTextContainer}>
                <div className={classes.toolMainNameAndFullModel}>
                    <Typography
                        className={`${classes.toolBigTitleStyle}`}
                        variant="h1"
                        align="right">
                        {props.electricTableData.nameStartWithRental}
                    </Typography>

                    <Typography className={`${classes.modelTextStyle}`}>
                        {props.electricTableData.fullModel}
                    </Typography>
                </div>

                <ElectricTablePriceAndPriceListLink electricTableData={props.electricTableData} className={classes.hideOnMobile} />
            </div>

            <ElectricTableContactUsButtons electricTableData={props.electricTableData} className={`${classes.contactUsButtonsStyle} ${classes.hideOnMobile}`} />

        </div>
    );
}

export default ElectricTableInfoSection;