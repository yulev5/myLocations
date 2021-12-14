import { makeStyles } from '@material-ui/core';
import React from 'react';
import { GetArrowDownIcon } from '../../assets/Database/DatabaseUtils';

//${theme.transitions.easing.ease}
const useStyles = makeStyles((theme) => ({
    arrowDownStyle: {
        width: '36px',
        height: '54px',
        animation: `$bounce 1.8s`,
        animationIterationCount: 'infinite'
    },
    "@keyframes bounce": {
        "0%, 25%, 50%, 75%, 100%": {
            transform: 'translateY(0)'
        },
        "40%": {
            transform: 'translateY(-60px)'
        },
        "60%": {
            transform: 'translateY(-18px)'
        }
    }
}));

function JumpingArrowDown(props) {
    let classes = useStyles();
    let arrowDownIcon = GetArrowDownIcon();

    return (
        <div className={`${props.className}`}>
            <img
                className={classes.arrowDownStyle}
                width="36px"
                height="54px"
                sizes={`36px`}
                src={arrowDownIcon.src}
                alt={arrowDownIcon.alt}
                title={arrowDownIcon.title}
            >
            </img>
        </div>
    );
}

export default JumpingArrowDown;