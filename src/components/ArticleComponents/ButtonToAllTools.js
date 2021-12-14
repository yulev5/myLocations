import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from 'next/link';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import { myColors } from 'components/Styles/Colors';

const useStyles = makeStyles((theme) => ({
    allToolsButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
        [theme.breakpoints.up('md')]: {
            marginTop: '60px',
        }
    },
    allToosButton: {
        [theme.breakpoints.up('md')]: {
            paddingRight: '10px',
            paddingLeft: '10px',
        }
    },
    expandIconStyle: {
        marginRight: '4px',
        [theme.breakpoints.up('md')]: {
            marginRight: '12px',
        }
    },
    TypographyLinkStyle: {
        height:'100%',
        lineHeight: '54px',
        letterSpacing: '0px',
        fontSize:myFontSizes.TextFontSize24,
        color:myColors.DarkBlueOuterSpace,
        fontWeight:myFontWeights.Weight700Bold,
    },
}));

function ButtonToAllTools(props) {
    const classes = useStyles();

    let buttonTextChangeCatView = "צפה בקטלוג כלי עבודה להשכרה";
    let href = {pathname:"/", query:{scrollTo:"categoriesToolsForRent"}};
    
    return (
        <div className={classes.allToolsButtonContainer}>
            <Button className={`${classes.allToosButton}`}>
                <Link href={href} passHref>
                    <a>
                        <Typography className={`${classes.TypographyLinkStyle}`}>
                            {buttonTextChangeCatView}
                        </Typography>
                    </a>
                </Link>
                <ExpandMoreIcon style={{ fontSize: 70 }} className={classes.expandIconStyle} />
            </Button>
        </div>
    );
}

export default ButtonToAllTools;