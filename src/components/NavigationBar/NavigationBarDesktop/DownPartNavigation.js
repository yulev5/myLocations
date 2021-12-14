import { makeStyles } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBox from '../SearchBox';
import { getSuperCatNameByKey } from 'assets/Database/DatabaseUtils';
import SuperMenuOpenPart from './SuperMenuOpenPart';
import { UserContext } from 'contexts/MyContext';
import HeaderTabTitle from './HeaderTabTitle';

const useStyles = makeStyles((theme) => ({
    hoverContainer: {
        display: 'contents',
        height: '60px',
    },
    bottomToolBarStyle: {
        paddingRight: '0px',
        paddingLeft: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        height: '60px',
        minHeight: '60px',
    },
    downLeftLinksDiv: {
        display: 'flex',
        height: '60px',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: '62px',
    },
    linkDivStyle: {
        height: '100%',
        flexGrow: '1',
        textAlign: 'center',
    },
    linkDivStyleHovered: {
        backgroundColor: 'white',
        height: '100%',
    },
    expandHoverArea: {
        opacity: '0',
        backgroundColor: 'white',
        position: 'absolute',
        transition: '.2s ease',
    },
    superCategoriesMenuStyleHidden: {
        display: 'none',
    },
    superCategoriesMenuStyle: {
        display: 'inline-block',
        position: 'relative',
        marginTop: '-1px',
        right: '-20px',
        height: '340px',
        width: '1100px',
        backgroundColor: 'white',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '0px 0px 16px 16px',
        opacity: '1'
    },
    superCategoriesMenuStyleSingleCat: {
        display: 'inline-block',
        position: 'relative',
        marginTop: '-1px',
        right: '-20px',
        height: '180px',
        width: '1100px',
        backgroundColor: 'white',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '0px 0px 16px 16px',
        opacity: '1'
    },
}));

function DownPartNavigation(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const [isSuperMenuHidden, setIsSuperMenuHidden] = useState(true);
    const [hoveredButton, setHoveredButton] = useState("");

    function onMouseEnter(hoveredElement) {
        setHoveredButton(hoveredElement);
        setIsSuperMenuHidden(false);
    };

    function onMouseLeave() {
        setHoveredButton("");
        setIsSuperMenuHidden(true);
    };

    const superCategoriesKeys = ["powerTools", "construction", "saws", "technicalTools", "gardeningTools", "cleaningTools"]

    return (
        <div className={classes.hoverContainer} onMouseLeave={() => onMouseLeave()}>
            <Toolbar id="Toolbar" className={classes.bottomToolBarStyle}>
                <div onMouseEnter={() => onMouseLeave()}>
                    <SearchBox />
                </div>

                <div className={`${classes.downLeftLinksDiv}`}>
                    {superCategoriesKeys.map((superCatKey) => (
                        <div
                            key={superCatKey}
                            className={`${classes.linkDivStyle} ${hoveredButton === superCatKey ? classes.linkDivStyleHovered : classes.linkDivStyle}`}
                            onMouseEnter={() => onMouseEnter(superCatKey)}>
                            <HeaderTabTitle hovered={hoveredButton === superCatKey} linkText={getSuperCatNameByKey(superCatKey)} />
                        </div>
                    ))}
                </div>

            </Toolbar>

            {!isSuperMenuHidden &&
                <div className={classes.superCategoriesMenuStyleSingleCat}>
                    <SuperMenuOpenPart 
                    hoveredCat={hoveredButton} 
                    setIsSuperMenuHidden={setIsSuperMenuHidden}/>
                </div>
            }

        </div>
    );
}

export default DownPartNavigation;