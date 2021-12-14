import React, { useContext, useEffect } from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { GAEventCat, GAEventAction, GAEvent } from "../../../src/components/Utils/Tracking";
import Head from "next/head";
import MainComponentContainer from "../../../src/components/ContainerComponents/MainComponentContainer";
import MyBreadCrumbs from "../../../src/components/GeneralComponents/MyBreadCrumbs";
import { UserContext } from "../../../src/contexts/MyContext";
import HeroAndCatShortDesc from "../../../src/components/GeneralComponents/HeroAndCatShortDesc";
import ToolsSectionInCategoryPage from "../../../src/components/CategoryPageComponents/ToolsSectionInCategoryPage";
import ContactUsLine from "../../../src/components/GeneralComponents/ContactUsLine";
import CategorySpecs from "../../../src/components/CategoryPageComponents/CategorySpecs";
import OtherCategoriesPromoLine from "../../../src/components/CategoryPageComponents/OtherCategoriesPromoLine";
import BackToHomePageOrContactUsButtonsLine from "../../../src/components/GeneralComponents/BackToHomePageOrContactUsButtonsLine";
import ContactUsButtonsCatPageMobile from "components/CategoryPageComponents/ContactUsButtonsCatPageMobile";
import { GetAllCatagoriesFromMongo, GetAllToolsFromMongo } from "components/Utils/mongodb";
import { AddCategoriesAndToolsListToData, AddCurrentCategoryDataToDataBycategoryID, GetStaticPathsAllCategories, ResetSavedToolUrlParams, AddCurrentCategoryTools, SortToolsListByDefaultSetValue } from "assets/Database/DatabaseUtils";
import { ogTags } from "assets/SharedTexts";

const useStyles = makeStyles((theme) => ({
    categoryPageMainContainerStyle: {
        paddingRight: '0px',
        paddingLeft: '0px',
    },
    categorySpecsStyle: {
        marginTop: '48px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px'
        }
    },
    ContactUsLineStyle: {
        marginTop: '48px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px'
        }
    },
    BackToHomePageOrContactUsButtonsLine: {
        marginTop: '80px',
        marginBottom: '80px',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    contactUsButtonsInCatPageStyle: {
        display: 'block',
        margin: '30px 0 40px',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    singleContactUsButtonStyle: {
        height: '44px',
        width: '44px',
    }
}));

export async function getStaticProps(context) {
    const tools = await GetAllToolsFromMongo();
    const categories = await GetAllCatagoriesFromMongo();

    return {
        props: {
            tools: tools,
            categories: categories,
            categoryID: context.params.categoryID
        },
        revalidate: 1,
    }
}

function CategoryPage({ categories, tools, categoryID }) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    ResetSavedToolUrlParams(data);
    AddCategoriesAndToolsListToData(categories, tools, data);
    AddCurrentCategoryDataToDataBycategoryID(categoryID, data);
    AddCurrentCategoryTools(data);
    SortToolsListByDefaultSetValue(data.currentCategoryData, data.currentCategoryTools)

    useEffect(() => {
        GAEvent(GAEventCat.CATEGORY_PAGE, GAEventAction.PAGE_VIEWED);
        storeData(data);
    }, [])

    return (
        <MainComponentContainer>
            <Head>
                {data.currentCategoryData && (
                    <>
                        <title>{data.currentCategoryData.pageTitle}</title>
                        <meta name="description" content={data.currentCategoryData.metaDescription} />
                        <meta name="keywords" content={data.currentCategoryData.metaKeywords} />

                        <meta property="og:title" content={data.currentCategoryData.pageTitle} key="ogtitle" />
                        <meta property="og:description" content={data.currentCategoryData.metaDescription} key="ogdesc" />
                        <meta property="og:site_name" content={ogTags.siteName} key="ogsitename" />
                        <meta property="og:url" content={`https://power-tools.co.il/rentals/${categoryID}`} />
                        <meta property="og:locale" content="he_IL" />
                        <meta property="og:type" content="website" />

                        <meta property="og:image" content={`https://power-tools.co.il${data.currentCategoryData.images[0].src}`} />
                        <meta property="og:image:width" content={data.currentCategoryData.images[0].width} />
                        <meta property="og:image:height" content={data.currentCategoryData.images[0].height} />
                        <meta property="og:image:alt" content={data.currentCategoryData.images[0].alt} />
                    </>
                )}
            </Head>

            <Container className={classes.categoryPageMainContainerStyle}>
                <MyBreadCrumbs />
                <HeroAndCatShortDesc />
                <ToolsSectionInCategoryPage />
                <ContactUsLine className={classes.ContactUsLineStyle} />
                <CategorySpecs className={classes.categorySpecsStyle} />
                <OtherCategoriesPromoLine />
                <BackToHomePageOrContactUsButtonsLine className={classes.BackToHomePageOrContactUsButtonsLine} />
                <ContactUsButtonsCatPageMobile className={classes.contactUsButtonsInCatPageStyle} />
            </Container>
        </MainComponentContainer>
    );
}

export default CategoryPage;

export const getStaticPaths = async () => {
    return GetStaticPathsAllCategories();
}