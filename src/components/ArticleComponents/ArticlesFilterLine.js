import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { backgourndColorDarkBlueOuterSpace, textColorDarkBlueOuterSpace, textColorLightGreyWildSand, TextFontSize18, TextFontWeight600SemiBold } from '../Styles/MyStyles';
import SearchIcon from '@material-ui/icons/Search';
import { myColors } from 'components/Styles/Colors';

const useStyles = makeStyles((theme) => ({
    filterLineStyle: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '64px',
            borderRadius: '32px',
            backgroundColor: myColors.TurquoisePelorous,
        }
    },
    backgourndColorDarkBlueOuterSpace,
    sortingOptionsContainer: {
        display: 'flex',
        marginRight: '36px'
    },
    optionTypographyStyle: {
        marginLeft: '47px',
        cursor: 'pointer'
    },
    textColorDarkBlueOuterSpace,
    TextFontWeight600SemiBold,
    TextFontSize18,
    textColorLightGreyWildSand,
    searchButtonDivStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        height: '48px',
        width: '48px',
        marginLeft: '12px',
        cursor: 'pointer'
    },
    searchIconStyle: {
        color: 'white'
    },
}));

function ArticlesFilterLine(props) {
    const classes = useStyles();

    return (
        <div className={`${props.className} ${classes.filterLineStyle}`}>
            <div className={classes.sortingOptionsContainer}>
                <Typography className={`${classes.optionTypographyStyle} ${classes.textColorLightGreyWildSand} ${classes.TextFontWeight600SemiBold} ${classes.TextFontSize18}`}>
                    הנקראים ביותר
                </Typography>
                <Typography className={`${classes.optionTypographyStyle} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight600SemiBold} ${classes.TextFontSize18}`}>
                    מהחדש לישן
                </Typography>
                <Typography className={`${classes.optionTypographyStyle} ${classes.textColorDarkBlueOuterSpace} ${classes.TextFontWeight600SemiBold} ${classes.TextFontSize18}`}>
                    לפי סדר האלף-בית
                </Typography>
            </div>

            <div className={`${classes.searchButtonDivStyle} ${classes.backgourndColorDarkBlueOuterSpace}`}>
                <SearchIcon className={`${classes.searchIconStyle}`} fontSize="large" />
            </div>
        </div>
    );
}

export default ArticlesFilterLine;