import { ButtonBase, makeStyles } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import { backgourndColorDarkBlueOuterSpaceDarker, textColorRegularWhite, TextFontSize18, TextFontWeight400Normal } from '../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    MyButtonBaseStyle: {
        borderRadius: '28px',
        backgroundColor: myColors.DarkBlueOuterSpaceDarker,
        color:myColors.RegularWhite,
        fontSize:myFontSizes.TextFontSize18,
        fontWeight:myFontWeights.Weight400Normal,
    },
}));

function ButtonMediumDarkerBlue(props) {
    const classes = useStyles();
    let width = props.width + "px";
    let height = props.height + "px";

    return (
        <div className={props.className}>
            <ButtonBase
                className={`${props.buttonStyle} ${props.hover} ${classes.MyButtonBaseStyle}`}
                style={{ width: width, height: height }}
                onClick={props.onClick}
            >
                {props.text}
            </ButtonBase>
        </div>
    );
}

export default ButtonMediumDarkerBlue;
