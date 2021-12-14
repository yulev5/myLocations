import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    linkStyle: {
        color: myColors.RegularWhite,
        fontSize: myFontSizes.TextFontSize16,
        fontWeight: myFontWeights.Weight500,
        [theme.breakpoints.up('md')]: {
            // display: 'inline-block',
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
}));

function FooterLink(props) {
    const classes = useStyles();

    return (
        props.externalLink ?
            <a href={props.externalLink} target="_blank">
                <Typography className={`${props.className} ${classes.linkStyle}`} component="div" >
                    {props.text}
                </Typography>
            </a>
            :
            props.href ?
                <Link href={props.href} as={props.asLink} passHref>
                    <a>
                        <Typography className={`${props.className} ${classes.linkStyle}`} component="div" >
                            {props.text}
                        </Typography>
                    </a>
                </Link>
                :
                <Typography className={`${props.className} ${classes.linkStyle}`} component="div" >
                    {props.text}
                </Typography>
    );
}

export default FooterLink;