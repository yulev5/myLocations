import { makeStyles } from '@material-ui/core';
import React from 'react';
import AccordionInfoSection from './infoAccordionComponents/AccordionInfoSection';
import TabsInfoSection from './infoTabsComponenets/TabsInfoSection';

const useStyles = makeStyles((theme) => ({

}));

function ToolInfoSection({ tabsData }) {

    return (
        <>
            <TabsInfoSection tabsData={tabsData} />
            <AccordionInfoSection tabsData={tabsData} />
        </>
    );
}

export default ToolInfoSection;