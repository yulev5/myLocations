import React, { useContext, useEffect } from 'react';
import Hammers from 'components/PriceListComponenets/SecondStepComponenets/CategoriesFilters/Hammers';
import DiamondDrills from 'components/PriceListComponenets/SecondStepComponenets/CategoriesFilters/DiamondDrills';

import { GetAllCatagoriesFromMongo, SortOptions } from 'components/Utils/mongodb';
import { UserContext } from 'contexts/MyContext';
import { AddCategoriesListToData, GetStaticPathsAllCategories } from 'assets/Database/DatabaseUtils';

export async function getStaticProps(context) {
    const categories = await GetAllCatagoriesFromMongo(SortOptions.popularity);

    return {
        props: {
            categories: categories,
            urlQuery: context.params.categoryID
        },
        revalidate: 1,
    }
}

function FilterSelectionPage({ urlQuery, categories }) {
    const { data, storeData } = useContext(UserContext);

    AddCategoriesListToData(categories, data);

    useEffect(() => {
        storeData(data);
    }, [])

    let filtersForCategory = null;

    switch (urlQuery) {
        case 'hammers':
            filtersForCategory = <Hammers />
            break;
        case 'diamond-drills':
            filtersForCategory = <DiamondDrills />
            break;
    }

    return (
        <>
            {filtersForCategory}
        </>
    );
}

export default FilterSelectionPage;

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { categoryID: 'hammers' } },
            { params: { categoryID: 'diamond-drills' } },
            // { params: { categoryID: 'generators' } },
            // { params: { categoryID: 'concrete-tools' } },
            // { params: { categoryID: 'ground-compactors' } },
            // { params: { categoryID: 'drills-drivers' } },
            // { params: { categoryID: 'polish-machines' } },
            // { params: { categoryID: 'vacuum-cleaner' } },
            // { params: { categoryID: 'water-pressure-cleaners' } },
            // { params: { categoryID: 'ceramic-cutters-machines-for-rent' } },
            // { params: { categoryID: 'extension-cords-for-rent' } },
            // { params: { categoryID: 'water-pumps' } },
            // { params: { categoryID: 'sanders-for-rent' } },
            // { params: { categoryID: 'jigsaws' } },
            // { params: { categoryID: 'circular-saws' } },
            // { params: { categoryID: 'reciprocating-saws' } },
            // { params: { categoryID: 'chain-saws' } },
            // { params: { categoryID: 'thermal-cameras' } }
        ],
        fallback: false // fallback is set to false because we already know the slugs ahead of time
    };
}