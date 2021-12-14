import React, { useContext } from 'react';
// import HammersTopText from './HammersTopText';
// import GeneratorsTopText from './GeneratorsTopText';
// import DiamondDrillsTopText from './DiamondDrillsTopText';
// import ConcreteToolsTopText from './ConcreteToolsTopText';
import { UserContext } from '../../../contexts/MyContext';

function AdaptiveCategoryPageText(props) {
    const { data, storeData } = useContext(UserContext);
    
    
    let conditionalComponent = function () {
        switch (data.urlParamsCategoryID) {
            // case 'hammers':
            //     return <HammersTopText />
            // case 'generators':
            //     return <GeneratorsTopText />
            // case 'diamond-drills':
            //     return <DiamondDrillsTopText />
            // case 'concrete-tools':
            //     return <ConcreteToolsTopText />

            default:
                return null
        }
    }

    return (
        conditionalComponent()
    );
}

export default AdaptiveCategoryPageText;