import React, { useContext, useMemo } from "react";
import MainComponentContainer from 'components/ContainerComponents/MainComponentContainer';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from "react";
import { GAEvent, GAEventCat, GAEventAction } from "components/Utils/Tracking";
import { AddCategoriesAndToolsListToData, AddCurrentTool, AddCurrentCategoryTools, AddCurrentCategoryDataToDataBycategoryID, getProductSchemaForTool, SaveUrlParamsCaregoryAndTool, SortToolsListByDefaultSetValue, GetStaticPathsAllCategoriesAndTools } from "assets/Database/DatabaseUtils";
import Head from 'next/head';
import MyBreadCrumbs from "components/GeneralComponents/MyBreadCrumbs";
import { UserContext } from "contexts/MyContext";
import ToolMainSection from "components/ToolPageComponents/ToolMainSection";
import SendUsMessageLine from "components/ToolPageComponents/SendUsMessageLine";
import ToolSpecs from "components/ToolPageComponents/ToolSpecs";
import OtherToolsSameCatPromoLine from "components/ToolPageComponents/OtherToolsSameCatPromoLine";
import ContactUsButtons from "components/ToolPageComponents/ContactUsButtons";
import ContactUsButtonsCatPageMobile from "components/CategoryPageComponents/ContactUsButtonsCatPageMobile";
import { GetAllCatagoriesFromMongo, GetAllToolsFromMongo } from "components/Utils/mongodb";
import { ogTags } from "assets/SharedTexts";
import { isMobileOrTablet } from 'components/Utils/Utils';

const useStyles = makeStyles((theme) => ({
    toolMainSectionStyle: {
        marginTop: '44px',
        [theme.breakpoints.up('md')]: {
            marginTop: '25px',
        }
    },
    toolSpecsStyle: {
        marginTop: '48px',
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
}));


export async function getStaticProps(context) {
    let tools = await GetAllToolsFromMongo();
    tools = tools.filter(tool => tool.category.includes(context.params.categoryID));
    const categories = await GetAllCatagoriesFromMongo();

    return {
        props: {
            tools: tools,
            categories: categories,

            categoryID: context.params.categoryID,//V
            toolID: context.params.toolID//V
        },
        revalidate: 1,
    }
}


function ToolPage({ categories, tools, categoryID, toolID }) {

    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const isMobile = isMobileOrTablet();

    SaveUrlParamsCaregoryAndTool(categoryID, toolID, data);//V

    AddCategoriesAndToolsListToData(categories, tools, data);
    AddCurrentCategoryDataToDataBycategoryID(categoryID, data);
    AddCurrentCategoryTools(data);
    AddCurrentTool(data);
    SortToolsListByDefaultSetValue(data.currentCategoryData, data.currentCategoryTools)

    const productSchema = useMemo(() => getProductSchemaForTool(data),[data, data.currentTool, data.currentTool.id])

    useEffect(() => {
        GAEvent(GAEventCat.TOOL_PAGE, GAEventAction.PAGE_VIEWED);
        storeData(data);
    }, []);

    return (
        <MainComponentContainer>
            <Head>
                <title>{data.currentTool.pageTitle}</title>
                <meta name="description" content={data.currentTool.metaDescription} />
                <meta name="keywords" content={data.currentTool.metaKeywords} />

                <meta property="og:type" content="og:product" />

                <meta property="product:price:currency" content="ILS" />
                <meta property="product:price:amount" content={data.currentTool.UpTo24Hours} />

                <meta property="og:title" content={data.currentTool.pageTitle} key="ogtitle" />
                <meta property="og:description" content={data.currentTool.metaDescription} key="ogdesc" />
                <meta property="og:site_name" content={ogTags.siteName} key="ogsitename" />
                <meta property="og:url" content={`https://power-tools.co.il/rentals/${categoryID}/${data.currentTool.urlPostFix}`} />
                <meta property="og:locale" content="he_IL" />

                <meta property="og:image" content={`https://power-tools.co.il${data.currentTool.images[0].src}`} />
                <meta property="og:image:width" content={data.currentTool.images[0].width} />
                <meta property="og:image:height" content={data.currentTool.images[0].height} />
                <meta property="og:image:alt" content={data.currentTool.images[0].alt} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                />
            </Head>

            <MyBreadCrumbs />
            <ToolMainSection className={classes.toolMainSectionStyle} />
            <ToolSpecs className={classes.toolSpecsStyle} />
            <OtherToolsSameCatPromoLine />
            {isMobile && <ContactUsButtonsCatPageMobile className={classes.contactUsButtonsStyle} />}
            {!isMobile && <ContactUsButtons className={classes.contactUsButtonsStyle} />}
            <SendUsMessageLine
                name="sendUsMessageLine"
                className={classes.sendUsMessageLineStyle}
                message={`אני מתעניין ב- ${data.currentTool.nameStartWithRental}. בבקשה חזרו אלי`} />

        </MainComponentContainer>
    );
}

export default ToolPage;

export const getStaticPaths = async () => {
    return GetStaticPathsAllCategoriesAndTools();
}