import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    tabsContentContainer: {
        marginTop: '52px',
    },
    minHeight427Style:{
        minHeight: '427px',
    },
    minHeight200Style:{
        minHeight: '200px',
    },
    tabContentStyleHidden: {
        display: 'none',
    },
    tabContentStyle: {
        display: 'block',
    }
}));

function TabsContent(props) {
    const classes = useStyles();
    const { tabsData, selectedTab } = props;

    //adjust the height of the specs box: 
    //In tool page it is shorter then on category page
    let minHeight = null;
    if (!props.isToolTabContent) {
        minHeight = classes.minHeight427Style;
    }else{
        minHeight = classes.minHeight200Style;
    }

    const listOfTabsContent = [];
    tabsData.map((tabDData, index) => {
        listOfTabsContent.push(
            <div
                className={selectedTab === tabDData.tabId ? `${classes.tabContentStyle} ${minHeight}` : classes.tabContentStyleHidden}
                key={index}
            >
                {tabDData.tabContent}
            </div>
        );
    });

    return (
        <div className={`${classes.tabsContentContainer} ${minHeight}`}>
            {listOfTabsContent}
        </div>
    );
}

export default TabsContent;