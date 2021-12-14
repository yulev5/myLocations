import { makeStyles } from '@material-ui/core';
import React, { useContext, useMemo } from 'react';
import TabsInfoSection from '../CategoryPageComponents/CategoryPageTexts/infoTabsComponenets/TabsInfoSection';
import { UserContext } from '../../contexts/MyContext';
import { GetToolSpecsDataAsTabsData } from '../../assets/Database/DatabaseUtils';
import { myColors } from 'components/Styles/Colors';
import AccordionInfoSection from 'components/CategoryPageComponents/CategoryPageTexts/infoAccordionComponents/AccordionInfoSection';
import { isMobileOrTablet } from 'components/Utils/Utils';

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

function ToolSpecs({ className }) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const isMobile = isMobileOrTablet();
    const tabsData = useMemo(() => GetToolSpecsDataAsTabsData(data.currentTool), [data.currentTool, data.currentTool.id])

    return (
        <div className={`${className} ${classes.categorySpecsContainer}`}>
            {/* On Desktop: */}
            {!isMobile && <TabsInfoSection isToolTabContent={true} tabsData={tabsData} />}
            {/* On Mobile: */}
            {isMobile && <AccordionInfoSection tabsData={tabsData} />}
        </div>
    );
}

export default ToolSpecs;