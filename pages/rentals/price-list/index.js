import MainComponentContainer from 'components/ContainerComponents/MainComponentContainer';
import React, { useContext, useEffect } from 'react';
import Head from "next/head";
import MyBreadCrumbs from 'components/GeneralComponents/MyBreadCrumbs';
import ToolSelection from 'components/PriceListComponenets/FirstStepComponents/ToolSelection';
import { UserContext } from 'contexts/MyContext';
import { GetAllCatagoriesFromMongo, SortOptions } from 'components/Utils/mongodb';
import { AddCategoriesListToData } from 'assets/Database/DatabaseUtils';

export async function getStaticProps(context) {
    const categories = await GetAllCatagoriesFromMongo(SortOptions.popularity);
    return {
        props: {
            categories: categories,
        },
        revalidate: 1,
    }
}

function priceList(props) {
    const { data, storeData } = useContext(UserContext);
    const { categories } = props;

    AddCategoriesListToData(categories, data);

    data.generalPageBreadCrumb = "מחירון השכרת כלי עבודה";
    data.urlPostFix = "rentals/price-list/";

    useEffect(() => {
        storeData(data);
    }, [])

    return (
        <MainComponentContainer>
            <Head>
                <title>מחירון השכרת כלי עבודה | 2021 | מחירון השכרת ציוד וכלי בניין</title>
                <meta name="description" content="מחירון השכרת כלי עבודה חדש - 2021 - בחר את כלי העבודה ובדוק את מחיר ההשכרה שלו. קטלוג מלא עם כל המידע על כלי הבנייה, הציוד והכלים להשכרה" />
                <meta name="keywords" content="מחירון השכרת כלי עבודה, השכרת כלי עבודה מחיר, מחיר השכרת פטיש חציבה, מחיר השכרת מקדחת יהלום, השכרת כלי בניין מחיר, מחירון השכרת ציוד לבנייה" />
            </Head>

            <MyBreadCrumbs />
            <ToolSelection categories={props.categories} />
        </MainComponentContainer>
    );
}

export default priceList;