import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/MyContext';
import HeaderUnderLine from '../GeneralComponents/HeaderUnderLine';
import ToolsSlider from './ToolsSlider';

const useStyles = makeStyles((theme) => ({
    HeaderAndUnderlineStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '64px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px',
        }
    },
    otherToolsHeaderTextStyle: {
        color: myColors.TurquoisePelorous,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize24,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize32,
        }
    },
    HeaderUnderLineStyle: {
        backgroundColor: myColors.TurquoisePelorous,
        width: '182px',
        height: '8px',
        marginTop: '8px',
        [theme.breakpoints.up('md')]: {
            marginTop: '12px',
        }
    },
    toolsSliderStyle: {
        marginTop: '40px'
    }
}));

function OtherToolsSameCatPromoLine(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    const moreMaleFemale = data.currentCategoryData.Gender === "m" ? "נוספים" : "נוספות";
    const otherToolsHeaderText = data.currentCategoryData.HebrewName + " " + moreMaleFemale + " להשכרה";

    return (
        <>
            {
                //If we have only 1 item in this category - don't show the Other Tools in this category line
                data.currentCategoryTools.length === 1
                    ? null
                    : (<>
                        <div className={classes.HeaderAndUnderlineStyle}>
                            <Typography variant="h3" className={`${classes.otherToolsHeaderTextStyle}`}>
                                {otherToolsHeaderText}
                            </Typography>
                            <HeaderUnderLine className={`${classes.HeaderUnderLineStyle}`} />
                        </div>
                        <ToolsSlider
                            className={classes.toolsSliderStyle}
                            removeCurrentTool={true} />
                    </>)
            }
        </>
    );
}

export default OtherToolsSameCatPromoLine;