import React, { useEffect, useState, Suspense, useContext } from "react";
import { Typography, Card, Box, CardMedia } from "@material-ui/core";
import { RemoveNotAllowedChars } from "../../src/components/Utils/Utils";
import { makeStyles } from "@material-ui/styles";
import { GAEvent, GAEventCat, GAEventAction } from "../../src/components/Utils/Tracking";
import MainComponentContainer from "../../src/components/ContainerComponents/MainComponentContainer";
import RentOrBuyAPowerTool from "../../src/assets/Articles/rent-or-buy-a-power-tool";
import ToolRentalFindNearestLocation from "../../src/assets/Articles/tool-rental-find-the-nearest-location";
import TheDifferencesBetweenDrillsDemolitionHammerRotaryHammer from "../../src/assets/Articles/the-differences-between-drills-demolition-hammer-rotary-hammer";
import MyBreadCrumbs from "components/GeneralComponents/MyBreadCrumbs";
import { UserContext } from "contexts/MyContext";
import { GetAllCatagoriesFromMongo, SortOptions } from "components/Utils/mongodb";
import { AddCategoriesListToData } from "assets/Database/DatabaseUtils";

let ArticleObjToShow = null;

const useStyles = makeStyles({
    MainImageStyle: {
        height: '180px',
        width: '100%',
        marginBottom: '5px',
    },
    CardMediaStyle: {
        width: '100%',
        height: '100%',
    },
    MainTextBoxStyle: {
        margin: '0 10px',
        lineHeight: '150%',
    },
    HeaderH1Style: {
        fontWeight: 'bold',
        fontSize: '1.3em'
    },
    SubtitleStyle: {
        margin: '19px 0 13px 0',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '1em',
        textAlign: 'right',
        lineHeight: '130%',
    },
    ContentStyle: {
        textAlign: 'right',
    }
});


function setArticleToShow(articleName, data) {
    let articleObj = {};

    switch (articleName) {
        case "rent-or-buy-a-power-tool":
            articleObj.articleID = 'rent-or-buy-a-power-tool';
            articleObj.ArticleComponent = <RentOrBuyAPowerTool />
            articleObj.articleName = "6 יתרונות בהשכרה של כלי עבודה";
            break;

        case "tool-rental-find-the-nearest-location":
            articleObj.articleID = 'tool-rental-find-the-nearest-location';
            articleObj.ArticleComponent = < ToolRentalFindNearestLocation />;
            articleObj.articleName = "השכרת כלי עבודה - המיקום הקרוב ביותר";
            break;

        case "the-differences-between-drills-demolition-hammer-rotary-hammer":
            articleObj.articleID = 'the-differences-between-drills-demolition-hammer-rotary-hammer';
            articleObj.ArticleComponent = < TheDifferencesBetweenDrillsDemolitionHammerRotaryHammer />;
            articleObj.articleName = "מקדחה - פטישון - פטיש חציבה - מה ההבדלים ואיזה כלי אתה צריך?";
            break;
    }

    if (articleObj.articleID) {
        data.articleID = articleObj.articleID;
        data.articleName = articleObj.articleName;
        data.subfolderName = 'articles';
    }

    return articleObj;
}

export async function getStaticProps(context) {
    const categories = await GetAllCatagoriesFromMongo(SortOptions.popularity);
    return {
        props: {
            categories: categories,
            articleName: context.params.articleName
        },
        revalidate: 1,
    }
}

function ArticlePage(props) {
    const classes = useStyles();
    const { categories, articleName } = props;
    const { data, storeData } = useContext(UserContext);
    ArticleObjToShow = setArticleToShow(articleName, data)

    AddCategoriesListToData(categories, data);

    useEffect(() => {
        GAEvent(GAEventCat.ARTICLE_PAGE, GAEventAction.PAGE_VIEWED);
        if (ArticleObjToShow.articleID) {
            storeData(data);
        }
    });

    return (
        <MainComponentContainer>
            <MyBreadCrumbs />
            {ArticleObjToShow.ArticleComponent}
        </MainComponentContainer>
    )
}

export default ArticlePage;

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { articleName: 'rent-or-buy-a-power-tool' } },
            { params: { articleName: 'tool-rental-find-the-nearest-location' } },
            { params: { articleName: 'the-differences-between-drills-demolition-hammer-rotary-hammer' } },
        ],
        fallback: false // fallback is set to false because we already know the slugs ahead of time
    }
}