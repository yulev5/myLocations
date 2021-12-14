import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { TextFontSize18, textColorDarkBlueOuterSpace } from '../../Styles/MyStyles';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes } from 'components/Styles/Sizes';

const useStyles = makeStyles((theme) => ({
    textTabContentStyle: {
        textAlign: 'right',
        whiteSpace: 'pre-line',
        color: myColors.DarkBlueOuterSpace,
        fontSize: myFontSizes.TextFontSize18,
        marginRight: '20px',
        marginLeft: '20px',
        [theme.breakpoints.up('md')]: {
            marginRight: '40px',
            marginLeft: '40px',
        }
    },
}));

function TextTabContent(props) {
    const classes = useStyles();

    return (
        <Typography className={`${classes.textTabContentStyle}`}>
            {props.content}
        </Typography>
    );
}

export default TextTabContent;