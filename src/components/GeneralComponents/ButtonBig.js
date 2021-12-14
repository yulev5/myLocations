import { ButtonBase, makeStyles } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    MyButtonBaseStyle: {
        borderRadius: '28px',
        backgroundColor: myColors.TurquoisePelorous,
        fontWeight: myFontWeights.Weight500,
        color: myColors.SuperLightGreyWhite,
        fontSize: myFontSizes.TextFontSize18,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize24,
        }
    },
}));

function ButtonBig(props) {
    const classes = useStyles();
    let href = props.href ? props.href : null;

    return (
        <div className={props.containerClassName}>
            <ButtonBase
                href={href}
                className={`${props.buttonClassName} ${props.hover} ${classes.MyButtonBaseStyle}`}
            >
                {props.text}
            </ButtonBase>
        </div>
    );
}

export default ButtonBig;
