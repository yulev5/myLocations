import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/MyContext';
import ContactUsButtons from './ContactUsButtons';
import ToolPriceAndPriceListLink from './ToolPriceAndPriceListLink';

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

function ToolInfoSection(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    return (
        <div className={`${props.className} ${classes.toolInfoContainer}`}>

            <div className={classes.rightSideInfoInnerTextContainer}>
                <div className={classes.toolMainNameAndFullModel}>
                    <Typography
                        className={`${classes.toolBigTitleStyle}`}
                        variant="h1"
                        align="right">
                        {data.currentTool.nameStartWithRental}
                    </Typography>

                    <Typography className={`${classes.modelTextStyle}`}>
                        {data.currentTool.fullModel}
                    </Typography>
                </div>

                <ToolPriceAndPriceListLink className={classes.hideOnMobile} />
            </div>

            <ContactUsButtons className={`${classes.contactUsButtonsStyle} ${classes.hideOnMobile}`} />

        </div>
    );
}

export default ToolInfoSection;