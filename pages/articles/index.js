import { makeStyles } from '@material-ui/core';
import Head from 'next/head';
import React, { useContext } from 'react';
import AllArticlesBoxes from '../../src/components/ArticleComponents/AllArticlesBoxes';
import ArticlesFilterLine from '../../src/components/ArticleComponents/ArticlesFilterLine';
import ButtonToAllTools from '../../src/components/ArticleComponents/ButtonToAllTools';
import MainComponentContainer from '../../src/components/ContainerComponents/MainComponentContainer';
import BackToHomePageOrContactUsButtonsLine from '../../src/components/GeneralComponents/BackToHomePageOrContactUsButtonsLine';
import ContactUsLine from '../../src/components/GeneralComponents/ContactUsLine';
import HeroAndCatShortDesc from 'components/GeneralComponents/HeroAndCatShortDesc';
import { GetAllCatagoriesFromMongo, SortOptions } from 'components/Utils/mongodb';
import { UserContext } from 'contexts/MyContext';
import { AddCategoriesListToData } from 'assets/Database/DatabaseUtils';


const useStyles = makeStyles((theme) => ({
    HeroAndCatShortDescStyle: {
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    articlesFilterLineStyle: {
        marginTop: '80px'
    },
    allArticlesBoxesStyle: {
        marginTop: '20px',
        [theme.breakpoints.up('md')]: {
            marginTop: '75px'
        }
    },
    contactUsLineStyle: {
        marginTop: '40px',
        [theme.breakpoints.up('md')]: {
            marginTop: '75px'
        }
    },
    BackToHomePageOrContactUsButtonsLine: {
        marginTop: '80px',
        marginBottom: '80px',
    }
}));

export async function getStaticProps(context) {
    const categories = await GetAllCatagoriesFromMongo(SortOptions.popularity);
    return {
        props: {
            categories: categories,
        },
        revalidate: 1,
    }
}

function index(props) {
    const classes = useStyles();
    const { categories } = props;
    const { data, storeData } = useContext(UserContext);

    AddCategoriesListToData(categories, data);
    
    return (
        <MainComponentContainer>
            <Head>
                <title>טיפים ומדריכים להשכרת כלי עבודה</title>
                <meta name="description" content="טיפים, מדריכים ועצות לפני שאתה מחליט אם לשכור כלי עבודה או לקנות אותו" />
                <meta name="keywords" content="" />
            </Head>

            <HeroAndCatShortDesc
                h1Title="טיפים ומדריכים"
                shortText="אספנו עבורכם מידע שימושי ומעניין שיכול לעזור לכם לפני השכרת כלי עבודה או מתלבטים איזה כלי יתאים לכם" 
                imageAlt="טיפים ומדריכים"
                imageTitle="המון מידע שימושי לאנשים ששוכרים כלי עבודה"
                />
            <ArticlesFilterLine className={classes.articlesFilterLineStyle} />

            <AllArticlesBoxes className={classes.allArticlesBoxesStyle} />
            <ButtonToAllTools />
            <ContactUsLine className={classes.contactUsLineStyle} />
            <BackToHomePageOrContactUsButtonsLine className={classes.BackToHomePageOrContactUsButtonsLine} />
        </MainComponentContainer>
    );
}

export default index;
