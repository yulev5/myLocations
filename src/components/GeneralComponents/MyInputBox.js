import { makeStyles } from '@material-ui/core';
import { myFontSizes } from 'components/Styles/Sizes';
import React from 'react';
import { myColors } from '../Styles/Colors';
import { myFontFamily } from '../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    inputBoxStyle: {
        fontSize: myFontSizes.TextFontSize18,
        backgroundColor: myColors.RegularWhite,
        paddingRight: '15px',
        borderRadius: '28px 28px 28px 28px',
        border: `1px solid ${myColors.DarkBlueOuterSpace}`,
        "&:focus": {
            outline: '0px'
        }
    },
}));

function MyInputBox(props) {
    const classes = useStyles();

    const inputFocused = (e) => {
        if (props.onFocus) {
            props.onFocus();
        }
        e.target.placeholder = props.placeholder;
    }

    return (
        <input
            className={`${props.className} ${classes.inputBoxStyle}`}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onFocus={inputFocused}
            onBlur={(e) => e.target.placeholder = props.placeholder}
            onChange={props.onChange}
            value={props.value}
            style={{
                fontFamily: myFontFamily.fontFamily
            }}
        >

        </input>
    );
}

export default MyInputBox;