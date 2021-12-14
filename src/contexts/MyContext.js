import React, { createContext, useState } from 'react';

export const UserContext = createContext();

let fetchedData = {
    categories: [],
    tools: [],
    superCategories: []
}

const UserContextProvider = (props) => {
    const [data, setData] = useState(fetchedData);
    const [currentimageSlider, setCurrentimageSlider] = useState(null);
    const [onSlideView, setOnSlideView] = useState(true);

    const storeData = data => {
        setData(data);
    }

    const storeCurrentimageSlider = currentimageSlider => {
        setCurrentimageSlider(currentimageSlider);
    }

    const storeOnSlideView = currentOnSlideView => {
        setOnSlideView(currentOnSlideView);
    }

    return (
        <UserContext.Provider value={{
            data, storeData,
            currentimageSlider, storeCurrentimageSlider,
            onSlideView, storeOnSlideView
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;