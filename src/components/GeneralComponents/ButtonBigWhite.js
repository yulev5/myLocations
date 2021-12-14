import { Button, ButtonBase, makeStyles } from '@material-ui/core';
import React from 'react';
import {  textColorTurquoisePelorous, TextFontSize24, TextFontWeight500 } from '../Styles/MyStyles';
import { myColors } from "../Styles/Colors";

const useStyles = makeStyles((theme) => ({
    MyButtonBaseStyle: {
        borderRadius: '28px',
        border: '2px solid #46C1C3',
    },
    textColorTurquoisePelorous,
    TextFontSize24,
    TextFontWeight500,
}));

function ButtonBigWhite(props) {
    const classes = useStyles();
    let width = props.width + "px";
    let height = props.height + "px";
    let href = props.href ? props.href : null;


    return (
        <div className={props.className}>
            <Button
                variant="outlined"
                className={`${classes.MyButtonBaseStyle} ${props.hover} ${classes.TextFontSize24} ${classes.TextFontWeight500} ${classes.textColorTurquoisePelorous}`}
                href={href}
                style={{ width: width, height: height }}
            >
                {props.text}
            </Button>
        </div>
    );
}

export default ButtonBigWhite;
