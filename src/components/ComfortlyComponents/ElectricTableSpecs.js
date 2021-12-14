import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import TabsInfoSection from '../CategoryPageComponents/CategoryPageTexts/infoTabsComponenets/TabsInfoSection';
import { UserContext } from '../../contexts/MyContext';
import { GetToolSpecsDataAsTabsData } from '../../assets/Database/DatabaseUtils';
import { myColors } from 'components/Styles/Colors';
import AccordionInfoSection from 'components/CategoryPageComponents/CategoryPageTexts/infoAccordionComponents/AccordionInfoSection';

const useStyles = makeStyles((theme) => ({
    categorySpecsContainer: {
        width: '100%',
        boxShadow: '-3px 4px 6px #00000040',
        border: '1px solid #F6F6F6',
        borderRadius: '8px',
        opacity: '1',
        backgroundColor: myColors.LightGreyWildSand
    },
}));

function ElectricTableSpecs(props) {
    const classes = useStyles();

    let tabsData = GetToolSpecsDataAsTabsData(props.electricTableData);

    return (
        <div className={`${props.className} ${classes.categorySpecsContainer}`}>
            {/* On Desktop: */}
            <TabsInfoSection isToolTabContent={true} tabsData={tabsData} />
            {/* On Mobile: */}
            <AccordionInfoSection tabsData={tabsData} />
        </div>
    );
}

export default ElectricTableSpecs;