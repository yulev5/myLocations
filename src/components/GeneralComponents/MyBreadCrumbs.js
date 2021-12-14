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


let secondBreadCrumb;
let thirdBreadCrumb;
function GetSecondAndThirdBreadCrumbs(data, classes) {

    if (data.currentCategoryData && !data.generalPageBreadCrumb) {
        let secondLevelHrefLink = `/rentals/[categoryID]`;
        let secondLevelAsLink = `/rentals/${data.currentCategoryData.urlPostFix}`;
        let secondLevelLinkText = data.currentCategoryData.HebrewName;
        secondBreadCrumb = (
            <li className={classes.listItemStyle} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href={secondLevelHrefLink} as={secondLevelAsLink} passHref>
                    <a itemScope itemType="https://schema.org/WebPage" itemProp="item" itemID={secondLevelAsLink} className={`${classes.linkStyle}`}>
                        <span itemProp="name" className={classes.spanLinkTextStyel}>
                            {secondLevelLinkText}
                        </span>
                    </a>
                </Link>
                <meta itemProp="position" content="2" />
            </li>
        );

        if (data.currentTool) {
            let thirdLevelHrefLink = '/rentals/[categoryID]/[toolID]';
            let thirdLevelAsLink = `/rentals/${data.currentCategoryData.urlPostFix}/${data.currentTool.urlPostFix}`;
            let thirdLevelLinkText = data.currentTool.nameStartWithRental;

            thirdBreadCrumb = (
                <>
                    {/* <div className={classes.listItemStyle}>
                        <NavigateBeforeIcon style={{ fill: '#00000080' }} fontSize="small" />
                    </div> */}
                    <Typography className={classes.SlashStyle}>
                        {` / `}
                    </Typography>
                    <li className={classes.listItemStyle} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <Link href={thirdLevelHrefLink} as={thirdLevelAsLink} passHref>
                            <a itemScope itemType="https://schema.org/WebPage" itemProp="item" itemID={thirdLevelAsLink} className={`${classes.linkStyle}`}>
                                <span itemProp="name" className={classes.spanLinkTextStyel}>
                                    {thirdLevelLinkText}
                                </span>
                            </a>
                        </Link>
                        <meta itemProp="position" content="3" />
                    </li>
                </>
            )
        }
    }
    else if (data.articleID) {

        secondBreadCrumb = (
            <div>
                <CustomTypography style={{ cursor: 'context-menu' }}>מידע חשוב</CustomTypography>
            </div>
        )

        let thirdLevelHrefLink = `/${data.subfolderName}/[articleName]`;
        let thirdLevelAsLink = `/${data.subfolderName}/${data.articleID}`;
        let thirdLevelLinkText = data.articleName;
        thirdBreadCrumb = (
            <>
                {/* <div className={classes.listItemStyle}>
                    <NavigateBeforeIcon style={{ fill: '#00000080' }} fontSize="small" />
                </div> */}
                <Typography className={classes.SlashStyle}>
                    {` / `}
                </Typography>
                <li className={classes.listItemStyle} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href={thirdLevelHrefLink} as={thirdLevelAsLink} passHref>
                        <a itemScope itemType="https://schema.org/WebPage" itemProp="item" itemID={thirdLevelAsLink} className={`${classes.linkStyle}`}>
                            <span itemProp="name" className={classes.spanLinkTextStyel}>
                                {thirdLevelLinkText}
                            </span>
                        </a>
                    </Link>
                    <meta itemProp="position" content="2" />
                </li>
            </>
        )
    }
    else if (data.generalPageBreadCrumb) {
        let secondLevelLinkText = data.generalPageBreadCrumb;
        let secondLevelHrefLink = `/${data.urlPostFix}`;

        secondBreadCrumb = (
            <li className={classes.listItemStyle} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href={secondLevelHrefLink} passHref>
                    <a itemScope itemType="https://schema.org/WebPage" itemProp="item" itemID={secondLevelHrefLink} className={`${classes.linkStyle}`}>
                        <span itemProp="name" className={classes.spanLinkTextStyel}>
                            {secondLevelLinkText}
                        </span>
                    </a>
                </Link>
                <meta itemProp="position" content="2" />
            </li>
        )
    }

}

function MyBreadCrumbs(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    secondBreadCrumb = null;
    thirdBreadCrumb = null;

    const firstLevelLink = "/";
    const firstLevelLinkText = "השכרת כלי עבודה";

    GetSecondAndThirdBreadCrumbs(data, classes);

    return (
        <div className={classes.BreadcrumbsContainerStyle}>
            <nav className={`breadcrumb ${classes.breadcrumbsNavStyle}`} role="navigation">
                <ol className={classes.olBreadcrumbsStyle} itemScope itemType="https://schema.org/BreadcrumbList">
                    <li className={classes.listItemStyle} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <Link href={firstLevelLink} passHref>
                            <a itemScope itemType="https://schema.org/WebPage" itemProp="item" itemID={firstLevelLink} className={`${classes.linkStyle}`}>
                                <span itemProp="name" className={classes.spanLinkTextStyel}>
                                    {firstLevelLinkText}
                                </span>
                            </a>
                        </Link>
                        <meta itemProp="position" content="1" />
                    </li>
                    <Typography className={`${classes.SlashStyle}`}>
                        {` / `}
                    </Typography>

                    {secondBreadCrumb}

                    {thirdBreadCrumb}
                </ol>
            </nav>
        </div>
    );
}

export default MyBreadCrumbs;