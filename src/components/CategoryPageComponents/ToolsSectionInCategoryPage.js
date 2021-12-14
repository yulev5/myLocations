import { makeStyles } from '@material-ui/core';
import { ToolBoxInCategoryPage } from 'components/ToolPageComponents/ToolBoxInCategoryPage';
import { isMobileOrTablet } from 'components/Utils/Utils';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/MyContext';

const useStyles = makeStyles((theme) => ({
    toolsBoxesContainer: {
        marginTop: '24px',
        [theme.breakpoints.up('md')]: {
            marginTop: 'initial'
        }
    },
    toolsLine: {
        display: 'flex',
        height: '40vw',
        minHeight: '200px',
        marginTop: '15px',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-start',
            height: '360px',
            minHeight: '0',
            marginTop: '40px',
        }
    },
    oneToolLineStyle: {
        justifyContent: 'center',
    },
    singleToolFirstTool: {
        marginLeft: '16px',
        [theme.breakpoints.up('md')]: {
            marginLeft: '40px'
        }
    },
    singleTool: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '40px'
        }
    }
}));

function ToolsSectionInCategoryPage() {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const tools = data.currentCategoryTools ? data.currentCategoryTools : [];

    let toolsSortedToLines = [];

    useEffect(() => {
        return () => {
            toolsSortedToLines = [];
        }
    }, [])

    if (isMobileOrTablet()) {
        let numberOfToolsLines = Math.ceil(tools.length / 2);
        for (let i = 0; i < numberOfToolsLines; i++) {
            let currIndex = (i * 2);
            let secondIndex = (i * 2) + 1;

            toolsSortedToLines.push(
                <div key={i} className={`${classes.toolsLine} ${numberOfToolsLines === 1 ? classes.oneToolLineStyle : null}`}>

                    <div className={classes.singleToolFirstTool}>
                        <ToolBoxInCategoryPage tool={tools[currIndex]} category={data.currentCategoryData} />
                    </div>

                    {tools[secondIndex] ?
                        (
                            <div className={classes.singleTool}>
                                <ToolBoxInCategoryPage tool={tools[secondIndex]} category={data.currentCategoryData} />
                            </div>
                        )
                        : null}
                </div>
            );
        }
    }
    else {
        let numberOfToolsLines = Math.ceil(tools.length / 4);
        for (let i = 0; i < numberOfToolsLines; i++) {
            let currIndex = (i * 4);
            let middleIndex = (i * 4) + 1;
            let thirdIndex = (i * 4) + 2;
            let fourthIndex = (i * 4) + 3;

            toolsSortedToLines.push(
                <div key={i} className={`${classes.toolsLine} ${numberOfToolsLines === 1 ? classes.oneToolLineStyle : null}`}>
                    <div className={classes.singleTool}>
                        <ToolBoxInCategoryPage tool={tools[currIndex]} category={data.currentCategoryData} />
                    </div>
                    {tools[middleIndex] ?
                        (
                            <div className={classes.singleTool}>
                                <ToolBoxInCategoryPage tool={tools[middleIndex]} category={data.currentCategoryData} />
                            </div>
                        )
                        : null}

                    {tools[thirdIndex] ?
                        (
                            <div className={classes.singleTool}>
                                <ToolBoxInCategoryPage tool={tools[thirdIndex]} category={data.currentCategoryData} />
                            </div>
                        )
                        : null}

                    {tools[fourthIndex] ?
                        (
                            <div className={classes.singleTool}>
                                <ToolBoxInCategoryPage tool={tools[fourthIndex]} category={data.currentCategoryData} />
                            </div>
                        )
                        : null}
                </div>
            );
        }
    }

    return (
        <div className={classes.toolsBoxesContainer}>
            {toolsSortedToLines}
        </div>
    );
}

export default ToolsSectionInCategoryPage;