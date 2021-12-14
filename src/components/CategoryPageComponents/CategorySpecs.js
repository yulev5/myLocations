import { makeStyles } from '@material-ui/core';
import { backgourndColorLightGreyWildSand } from '../Styles/MyStyles';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/MyContext';
import HammersTopText from './CategoryPageTexts/HammersCatPageComponents/HammersTopText';
import GeneratorsTopText from './CategoryPageTexts/GeneratorsTopText';
import DiamondDrillsTopText from './CategoryPageTexts/DiamondDrillsTopText';
import ConcreteToolsTopText from './CategoryPageTexts/ConcreteToolsTopText';
import { myColors } from 'components/Styles/Colors';
import CeramicCuttersTopText from './CategoryPageTexts/CeramicCuttersTopText';
import GroundCompactorsTopText from './CategoryPageTexts/GroundCompactorsCatPageComponents/GroundCompactorsTopText';
import WaterPumpsTopText from './CategoryPageTexts/WaterPumpsTopText';
import DrillsDriversTopText from './CategoryPageTexts/DrillsDriversTopText';
import ReciprocatingSawsTopText from './CategoryPageTexts/ReciprocatingSawsTopText';
import VacuumCleanerTopText from './CategoryPageTexts/VacuumCleanerTopText';

const useStyles = makeStyles((theme) => ({
    categorySpecsContainer: {
        width: '100%',
        boxShadow: '-3px 4px 6px #00000040',
        border: '1px solid #F6F6F6',
        borderRadius: '8px',
        opacity: '1',
        backgroundColor: myColors.LightGreyWildSand,
        [theme.breakpoints.up('md')]: {
            minHeight: '427px',
        }
    },
}));

function CategorySpecs(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    let stylesToApply = null;
    let conditionalComponent = null;
    switch (data.urlParamsCategoryID) {
        case 'hammers':
            conditionalComponent = <HammersTopText />
            break;
        case 'generators':
            conditionalComponent = <GeneratorsTopText />
            stylesToApply = classes.categorySpecsContainer;
            break;
        case 'diamond-drills':
            conditionalComponent = <DiamondDrillsTopText />
            break;
        case 'concrete-tools':
            conditionalComponent = <ConcreteToolsTopText />
            stylesToApply = classes.categorySpecsContainer;
            break;
        case 'ceramic-cutters-machines-for-rent':
            conditionalComponent = <CeramicCuttersTopText />
            break;
        case 'ground-compactors':
            conditionalComponent = <GroundCompactorsTopText />
            break;
        case 'water-pumps':
            conditionalComponent = <WaterPumpsTopText />
            break;
        case 'drills-drivers':
            conditionalComponent = <DrillsDriversTopText />
            break;
        case 'reciprocating-saws':
            conditionalComponent = <ReciprocatingSawsTopText />
            break;
        case 'vacuum-cleaner':
            conditionalComponent = <VacuumCleanerTopText />
            break;

        default: null;
    }

    if (!conditionalComponent)
        return null;

    return (
        <div className={`${props.className} ${stylesToApply}`} >
            {conditionalComponent}
        </div >
    );
}

export default CategorySpecs;