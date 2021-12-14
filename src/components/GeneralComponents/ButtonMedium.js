import { ButtonBase, makeStyles } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import { backgourndColorTurquoisePelorous, textColorSuperLightGreyWhite, TextFontSize18, TextFontWeight500 } from '../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    MyButtonBaseStyle: {
        borderRadius: '28px',
        backgroundColor: myColors.TurquoisePelorous,
        fontSize: myFontSizes.TextFontSize18,
        fontWeight: myFontWeights.Weight500,
        color: myColors.SuperLightGreyWhite
    },
}));

function ButtonMedium(props) {
    const classes = useStyles();
    // let width = props.width + "px";
    // let height = props.height + "px";
    let href = props.href ? props.href : null;

    return (
        <div className={props.className}>
            <ButtonBase
                href={href}
                className={`${props.buttonStyle} ${classes.MyButtonBaseStyle} ${props.hover}`}
            >
                {props.text}
            </ButtonBase>
        </div>
    );
}

export default ButtonMedium;
