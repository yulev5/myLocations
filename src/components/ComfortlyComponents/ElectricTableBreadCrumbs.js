import React, { useContext } from 'react';
import Link from 'next/link';
import { Typography, withStyles, makeStyles } from '@material-ui/core';
import { UserContext } from '../../contexts/MyContext';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';


const useStyles = makeStyles((theme) => ({
    BreadcrumbsContainerStyle: {
        display: 'flex',
        paddingTop: '10px',
        paddingBottom: '10px',
        height: '100%',
        marginLeft: '-10px',
        marginRight: '37px',
        marginTop: '-36px',
        [theme.breakpoints.up('md')]: {
            marginRight: '-4px',
            marginTop: 'initial',
        }
    },
    breadcrumbsNavStyle: {
        overflowX: 'scroll',
        '-webkit-box-orient': 'vertical',
        '-ms-overflow-style': 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    olBreadcrumbsStyle: {
        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none',
    },
    listItemStyle: {
        display: 'flex',
        alignItems: 'center',
    },
    SlashStyle: {
        whiteSpace: 'pre',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight500,
        fontSize: myFontSizes.TextFontSize12,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize16,
        }
    },
    linkStyle: {
        height: '100%',
        textDecoration: 'none',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight500,
        fontSize: myFontSizes.TextFontSize12,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize16,
        }
    },

    DividerStyle: {
        marginTop: '10px',
        marginRight: '-20px',
        marginLeft: '-10px',
    },
    spanLinkTextStyel: {
        whiteSpace: 'nowrap'
    },
}));


const CustomTypography = withStyles((theme) => ({
    root: {
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        height: '100%',
        textDecoration: 'none',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight500,
        fontSize: myFontSizes.TextFontSize12,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize16,
        }
    }
}))(Typography);


function ElectricTableBreadCrumbs(props) {
    const classes = useStyles();

    const firstLevelLink = "/";
    const firstLevelLinkText = "השכרת כלי עבודה";

    return (
        <div className={classes.BreadcrumbsContainerStyle}>
            <nav className={`breadcrumb ${classes.breadcrumbsNavStyle}`} role="navigation">
                <ol className={classes.olBreadcrumbsStyle} itemScope itemType="https://schema.org/BreadcrumbList">
                    <li className={classes.listItemStyle} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <Link href={firstLevelLink} passHref>
                            <a className={`${classes.linkStyle}`} itemProp="item"><span className={classes.spanLinkTextStyel} itemProp="name">{firstLevelLinkText}</span></a>
                        </Link>
                        <meta itemProp="position" content="1" />
                    </li>
                    <Typography className={`${classes.SlashStyle}`}>
                        {` / `}
                    </Typography>

                    <li className={classes.listItemStyle} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <Link href="/comfortly" passHref>
                            <a className={`${classes.linkStyle}`} itemProp="item" ><span className={classes.spanLinkTextStyel} itemProp="name">שולחן עמידה ארגונומי חשמלי</span></a>
                        </Link>
                        <meta itemProp="position" content="2" />
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default ElectricTableBreadCrumbs;