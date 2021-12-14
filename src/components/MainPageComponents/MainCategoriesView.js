import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { textColorBlackMirage, TextFontSize24, TextFontWeight700Bold } from '../Styles/MyStyles';
import MainCategoriesSlider from './MainCategoriesSlider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MainCategoriesVerticalView from './MainCategoriesVerticalView';
import { Link } from 'react-scroll';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import { myColors } from 'components/Styles/Colors';
import { UserContext } from 'contexts/MyContext';
import { isMobileOrTablet } from 'components/Utils/Utils';

const useStyles = makeStyles((theme) => ({
    mainCategoriesHeaderStyle: {
        fontSize: myFontSizes.TextFontSize30,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize24,
            color: myColors.BlackMirage,
        }
    },
    TextFontSize24,
    textColorBlackMirage,
    TextFontWeight700Bold,
    MainCategoriesSliderStyle: {
        marginTop: '40px',
    },
    allToolsButtonContainer: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '60px'
        }
    },
    allToosButton: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
    expandIconStyle: {
        marginRight: '12px',
        width: '35px',
        height: '35px'
    },


    hideComponent: {
        display: 'none'
    },
    showComponent: {
        display: 'block'
    }
}));

function MainCategoriesView(props) {
    const classes = useStyles();
    const { onSlideView, storeOnSlideView } = useContext(UserContext);
    let isMobile = isMobileOrTablet();


    return (
        <div className={`${props.className}`}>

            <Typography
                id="categoriesToolsForRent"
                name='categoriesToolsForRent'
                className={`${classes.mainCategoriesHeaderStyle}`}>
                איזה כלי עבודה אתה צריך?
            </Typography>

            {!isMobile && onSlideView && <MainCategoriesSlider className={classes.MainCategoriesSliderStyle} />}
            {(isMobile || !onSlideView) && <MainCategoriesVerticalView />}

            <div className={classes.allToolsButtonContainer}>
                <Link to="categoriesToolsForRent" smooth={true} duration={380} offset={-200}>
                    <Button onClick={() => storeOnSlideView(!onSlideView)} className={`${classes.allToosButton} ${classes.TextFontSize24} ${classes.textColorBlackMirage} ${classes.TextFontWeight700Bold}`}>
                        {onSlideView ? "לכל כלי העבודה" : "חזור לתצוגה אופקית"}
                        {onSlideView
                            ? <ExpandMoreIcon className={classes.expandIconStyle} />
                            : <ExpandLessIcon className={classes.expandIconStyle} />
                        }
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default MainCategoriesView;