import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { backgourndColorDarkBlueOuterSpace, TextFontSize20, TextFontWeight600SemiBold, TextFontWeight800ExrtaBold } from '../../../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    tabsHeaderButtonsLine: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '50px',
        marginTop: '40px',
        marginRight: '40px',
        marginLeft: '40px',
    },
    outerTabHeaderStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        cursor: 'pointer',
    },
    backgourndColorDarkBlueOuterSpace,
    outerTabHeaderStyleHovered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '28px',
        height: '50px',
        cursor: 'pointer',
    },
    tabTextButtonStyle: {
        display: 'inline-block',
        height: '100%',
        lineHeight: '50px',
        paddingRight: '24px',
        paddingLeft: '24px',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': 'none',
        '-webkit-user-select': 'none',
        '-webkit-touch-callout': 'none',
    },
    tabTextButtonStyleHovered: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        height: '100%',
        lineHeight: '50px',
        paddingRight: '24px',
        paddingLeft: '24px',
        fontWeight: '600 !important',
        color: '#E5E5EA',
        userSelect: 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': 'none',
        '-webkit-user-select': 'none',
        '-webkit-touch-callout': 'none',

    },
    TextFontSize20,
    TextFontWeight600SemiBold,
    TextFontWeight800ExrtaBold,
    tabSeparatorStyle: {
        lineHeight: '50px',
        userSelect: 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': 'none',
        '-webkit-user-select': 'none',
        '-webkit-touch-callout': 'none',
    }
}));

function TabsButtonsLine({ tabsData, selectedTab, setSelectedTab }) {
    const classes = useStyles();
    const [hoveredTabHeader, setHoveredTabHeader] = useState("");

    function handleHover(hoveredTabHeader) {
        setHoveredTabHeader(hoveredTabHeader);
    }

    let listOfTabsHeaders = [];
    for (let i = 0; i < tabsData.length; i++) {

        let fontWeight = selectedTab === tabsData[i].tabId ? classes.TextFontWeight800ExrtaBold : classes.TextFontWeight600SemiBold;
        let tabHeaderContainerStyle = hoveredTabHeader === i && selectedTab != tabsData[i].tabId ? `${classes.outerTabHeaderStyleHovered} ${classes.backgourndColorDarkBlueOuterSpace}` : classes.outerTabHeaderStyle;
        let tabTextButtonStyle = hoveredTabHeader === i && selectedTab != tabsData[i].tabId ? classes.tabTextButtonStyleHovered : classes.tabTextButtonStyle;


        listOfTabsHeaders.push(
            <div
                key={i}
                name='headerContainer'
                className={tabHeaderContainerStyle}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => handleHover("")}
                onClick={() => setSelectedTab(tabsData[i].tabId)}>
                <Typography
                    component="h3"
                    className={`${tabTextButtonStyle} ${classes.TextFontSize20} ${fontWeight}`}>
                    {tabsData[i].tabTitle}
                </Typography>
            </div>
        );

        if (i < tabsData.length - 1) {
            listOfTabsHeaders.push(
                <Typography
                    key={"separator-" + i}
                    className={`${classes.tabSeparatorStyle} ${classes.TextFontSize20} ${classes.TextFontWeight600SemiBold}`}>
                    |
            </Typography>
            );
        }
    }

    React.useEffect(() => {
        document.querySelectorAll('div[name="headerContainer"]').forEach(el => {
            const { width } = el.getBoundingClientRect();
            el.style.width = `${width + 40}px`;
        });
    }, []);

    return (
        <div className={classes.tabsHeaderButtonsLine}>
            {listOfTabsHeaders}
        </div>
    );
}

export default TabsButtonsLine;