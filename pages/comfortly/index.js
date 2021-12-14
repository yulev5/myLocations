import React, { useContext } from "react";
import MainComponentContainer from 'components/ContainerComponents/MainComponentContainer';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from "react";
import { AddCategoriesAndToolsListToData } from "assets/Database/DatabaseUtils";
import Head from 'next/head';
import { UserContext } from "contexts/MyContext";
import { GetAllCatagoriesFromMongo, GetAllToolsFromMongo, GetElectricTableFromMongo } from "components/Utils/mongodb";
import { ogTags } from "assets/SharedTexts";
import ElectricTableMainSection from "components/ComfortlyComponents/ElectricTableMainSection";
import ElectricTableBreadCrumbs from "components/ComfortlyComponents/ElectricTableBreadCrumbs";
import ElectricTableSpecs from "components/ComfortlyComponents/ElectricTableSpecs";

const useStyles = makeStyles((theme) => ({
    toolMainSectionStyle: {
        marginTop: '44px',
        [theme.breakpoints.up('md')]: {
            marginTop: '25px',
        }
    },
    toolSpecsStyle: {
        marginTop: '48px',
        marginBottom: '40px',
        [theme.breakpoints.up('md')]: {
            marginTop: '40px'
        }
    },
    contactUsButtonsStyle: {
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: '40px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px',
        }
    },
    sendUsMessageLineStyle: {
        marginTop: '40px'
    },
    hideOnDesktop: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    hideOnMobile: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
}));


export async function getStaticProps(context) {
    const electricTableData = await GetElectricTableFromMongo();
    const tools = await GetAllToolsFromMongo();
    const categories = await GetAllCatagoriesFromMongo();

    return {
        props: {
            electricTableData: electricTableData,
            tools: tools,
            categories: categories,
        },
        revalidate: 1,
    }
}


function ToolPage(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    let { categories, tools, electricTableData } = props;

    AddCategoriesAndToolsListToData(categories, tools, data);
    electricTableData = electricTableData[0]

    useEffect(() => {
        storeData(data);
        // GAEvent(GAEventCat.TOOL_PAGE, GAEventAction.PAGE_VIEWED);
    }, []);

    return (
        <MainComponentContainer>
            <Head>
                <title>{electricTableData.pageTitle}</title>
                <meta name="description" content={electricTableData.metaDescription} />
                <meta name="keywords" content={electricTableData.metaKeywords} />

                <meta property="og:type" content="og:product" />

                <meta property="product:price:currency" content="ILS" />
                <meta property="product:price:amount" content={electricTableData.UpTo24Hours} />

                <meta property="og:title" content={electricTableData.pageTitle} key="ogtitle" />
                <meta property="og:description" content={electricTableData.metaDescription} key="ogdesc" />
                <meta property="og:site_name" content={ogTags.siteName} key="ogsitename" />
                <meta property="og:url" content={`https://power-tools.co.il/rentals/comfortly/${electricTableData.urlPostFix}`} />
                <meta property="og:locale" content="he_IL" />

                <meta property="og:image" content={`https://power-tools.co.il${electricTableData.images[0].ogSrc}`} />
                <meta property="og:image:width" content={electricTableData.images[0].width} />
                <meta property="og:image:height" content={electricTableData.images[0].height} />
                <meta property="og:image:alt" content={electricTableData.images[0].alt} />

            </Head>

            <ElectricTableBreadCrumbs />
            <ElectricTableMainSection electricTableData={electricTableData} className={classes.toolMainSectionStyle} />
            <ElectricTableSpecs electricTableData={electricTableData} className={classes.toolSpecsStyle} />

        </MainComponentContainer>
    );
}

export default ToolPage;