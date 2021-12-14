import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TabsButtonsLine from './TabsButtonsLine';
import TabsContent from './TabsContent';

const useStyles = makeStyles((theme) => ({
    categoryInfoContainer: {
        display: 'none',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            paddingBottom: '30px'
        }
    },
}));

function TabsInfoSection(props) {
    const classes = useStyles();
    let { tabsData, isToolTabContent } = props;
    const [selectedTab, setSelectedTab] = useState(tabsData[0].tabId);

    return (
        <div className={`${classes.categoryInfoContainer} ${props.className}`}>
            <TabsButtonsLine tabsData={tabsData} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <TabsContent isToolTabContent={isToolTabContent} tabsData={tabsData} selectedTab={selectedTab} />
        </div>
    );
}
export default TabsInfoSection;