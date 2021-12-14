import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-scroll';
import { hoverDarkBlueOuterSpace } from '../Styles/MyStyles';
import ButtonBig from './ButtonBig';
import ButtonBigWhite from './ButtonBigWhite';

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    firstPageButton: {
        marginBottom: '25px',
        [theme.breakpoints.up('md')]: {
            marginBottom: '0px',
            marginLeft: '45px',
        }
    },
    hoverDarkBlueOuterSpace,
    BigButtonStyle: {
        height: '59px',
        width: '240px',
    }
}));

function BackToHomePageOrContactUsButtonsLine(props) {
    const classes = useStyles();

    return (
        <div className={props.className}>
            <div className={`${classes.containerStyle}`}>
                <ButtonBigWhite
                    href="/"
                    text="חזרה לעמוד הראשי"
                    height="59"
                    width="240"
                    hover={`${classes.hoverDarkBlueOuterSpace}`}
                    className={classes.firstPageButton} />
                <Link to="contactUsLine" smooth={true} duration={380} offset={-330}>
                    <ButtonBig buttonClassName={`${classes.BigButtonStyle}`} text="צור קשר" hover={`${classes.hoverDarkBlueOuterSpace}`} />
                </Link>
            </div>
        </div>
    );
}

export default BackToHomePageOrContactUsButtonsLine;