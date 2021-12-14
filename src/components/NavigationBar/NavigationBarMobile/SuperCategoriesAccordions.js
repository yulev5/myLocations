import React, { useContext } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography, withStyles } from '@material-ui/core';
import { UserContext } from 'contexts/MyContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import OpenDrawerLinkMobile from './OpenDrawerLinkMobile';
import { getSuperCatNameByKey } from 'assets/Database/DatabaseUtils';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';

const CustomAccordion = withStyles(() => ({
    root: {
        height: 'auto',
        marginTop: '0px',
        // marginRight: '-10px !important',
        // marginLeft: '-10px !important',
        paddingTop: '5px',
        paddingBottom: '5px',
        backgroundColor: myColors.TurquoisePelorous,
    },
    expanded: {
    }
}))(Accordion);

const CustomAccordionSummary = withStyles(() => ({
    root: {
        padding: '0px !important',
        marginRight: '7px !important',
        height: '50px !important',
        textAlign: 'right !important',
        color: myColors.LightGreyWildSand,
    },
    expanded: {
        height: 'auto'
    }
}))(AccordionSummary);

const useStyles = makeStyles((theme) => ({
    accordionStyle: {
        // boxShadow: 'inset 0 1px 0 0 #263238',
    },
    AccordionDetailsStyle: {
        display: 'flex',
        flexDirection: 'column',

        paddingRight: '0px',
        paddingTop: '0px',
    },
    middleHeaderStyle: {
        margin: '0px',
        lineHeight: '50px',
        // marginTop: '18px',
    },
    heading: {
        fontWeight: myFontWeights.Weight500,
        fontSize: myFontSizes.TextFontSize18,
    },
}));

function SuperCategoriesAccordions(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const getIcon = (panel) => {
        if (expanded === panel)
            return (<RemoveIcon style={{ color: myColors.LightGreyWildSand }} />);
        else
            return (<AddIcon style={{ color: myColors.LightGreyWildSand }} />);
    }

    let listOfAccordionsForMenu = [];
    for (var key of Object.keys(data.superCategories)) {
        let index = Object.keys(data.superCategories).indexOf(key);
        //for each --super-- category 
        //create accordion with its name and subcategoreis as links
        listOfAccordionsForMenu.push(
            <CustomAccordion
                className={classes.accordionStyle}
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}>

                <CustomAccordionSummary
                    key={index}
                    expandIcon={getIcon(`panel${index}`)}
                    aria-controls={`panel${index}bh-content`}
                    id={`panel${index}bh-header`}>

                    <Typography component="h3" className={classes.heading}>
                        {getSuperCatNameByKey(data.superCategories[key].id)}
                    </Typography>
                </CustomAccordionSummary>

                <AccordionDetails className={classes.AccordionDetailsStyle}>
                    {
                        getAccordionCategoriesForThisSuper(data.superCategories[key])
                    }
                </AccordionDetails>
            </CustomAccordion>

        )
    }

    function getAccordionCategoriesForThisSuper(superCat) {
        let categoriesForThisSuper = [];
        let hrefLink = `/rentals/[categoryID]`;
        for (let i = 0; i < superCat.categories.length; i++) {
            const categoryName = superCat.categories[i]["HebrewName"];
            const urlPostFix = data.superCategories[key].categories[i].urlPostFix;
            const asLink = `/rentals/${urlPostFix}`;
            categoriesForThisSuper.push(
                <OpenDrawerLinkMobile
                    key={i}
                    toggleDrawer={props.toggleDrawer}
                    className={classes.middleHeaderStyle}
                    asLink={asLink}
                    href={hrefLink}
                    linkText={categoryName}
                    isAccordionLink={true}
                />
            )
        }
        return categoriesForThisSuper;
    }

    return (
        <>
            {listOfAccordionsForMenu}

            <style jsx global>
                {`
                        .MuiAccordion-root:before{
                            content: none ! important;
                        }
                        .MuiAccordion-root.Mui-expanded{
                            margin-top: 0px !important;
                            margin-bottom: 0px !important;
                        }


                        .MuiAccordionSummary-content.Mui-expanded{
                            margin-top: 12px !important;
                            margin-bottom: 12px !important;
                        }
                        .MuiAccordionSummary-root.Mui-expanded{
                            min-height: 43px !important;
                        }
                    
                        .MuiCollapse-container{
                            margin-right: 17px !important;
                        }

                        .MuiPaper-elevation1{
                            box-shadow:none !important;
                        }

                        .MuiAccordionDetails-root{
                            padding: 0px !important;
                        }

                        .MuiIconButton-root{
                            margin-left: 14px !important;
                            
                        }
                `}
            </style>

        </>
    );
}

export default SuperCategoriesAccordions;