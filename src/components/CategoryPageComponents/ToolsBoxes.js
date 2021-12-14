import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../contexts/MyContext';
import { ToolBox } from './ToolBox';

const useStyles = makeStyles((theme) => ({
    CoupleSwipersStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '240px',
    },
}));

export function getToolsBoxes() {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    let toolsBoxes = [];

    data.currentCategoryTools.map(tool => {
        let singleToolBox = ToolBox(tool);

        toolsBoxes.push(
            <div className={classes.CoupleSwipersStyle} key={Math.floor(Math.random() * 9999)}>
                {singleToolBox}
            </div>
        )
    });

    return toolsBoxes;
}