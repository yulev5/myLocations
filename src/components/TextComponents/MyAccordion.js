import React from 'react';
import { AccordionSummary, Accordion, AccordionDetails, makeStyles, withStyles, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from 'next/link';
import styled from 'styled-components';
import { backgourndColorLightGreyWildSand, TextFontSize16, TextFontSize18, TextFontWeight600SemiBold } from '../Styles/MyStyles';

const StyledAccordion = styled.div`
    .MuiAccordion-root{
        // margin-right: -10px !important;
        // margin-left: -10px !important;
    }
    
    .MuiAccordion-root:before{
        /* content: none ! important; */
    }
    
    .MuiAccordion-root.Mui-expanded{
        /* margin-top: 0px !important;
        margin-bottom: 0px !important; */
    }
    
    .MuiAccordionSummary-root{
        padding: 0px;
        margin-right: 30px;
        height: 56px;
        text-align: right;

    }
    
    .MuiAccordionSummary-content.Mui-expanded{
        margin-top: 12px;
        margin-bottom: 12px;
    }
    
    .MuiAccordionSummary-root.Mui-expanded{
        min-height: 56px;
    }
    
    .MuiCollapse-container{
        margin-right: 25px;
    }
`;

const useStyles = makeStyles({
    AccordionStyle: {
        boxShadow: 'inset 0 1px 0 0 #E5E5E5',
    },
    backgourndColorLightGreyWildSand,
    AccordionHeadingStyle: {
    },
    TextFontSize18,
    TextFontWeight600SemiBold,
    AccordionDetailsStyle: {
        marginRight: '7px',
        paddingRight: '0px',
        paddingTop: '0px',
    },
    liStyle: {
        textAlign: 'right'
    },
    TextFontSize16,
    linkAccordionStyle: {
    },
    accordionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        width: '100%',
    }
});

const CustomAccordion = withStyles(() => ({
    root: {
        height: 'auto',
        marginTop: '0px',
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    expanded: {
    }
}))(Accordion);

const CustomAccordionSummary = withStyles(() => ({
    root: {
    },
    expanded: {
        height: 'auto'
    }
}))(AccordionSummary);



function MyAccordion(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function prepareListOfAccordionItems(accordionItems) {
        let listItems = accordionItems.map((item, index) => {
            if (item.isLink) {
                if (item.asLink) {
                    return (
                        <li className={`${classes.liStyle} ${classes.TextFontSize16}`} key={index}>
                            <Link passHref as={item.asLink} href={item.href}>
                                <a className={classes.linkAccordionStyle}>
                                    {item.linkText}
                                </a>
                            </Link>
                        </li>
                    );
                } else {
                    return (
                        <li className={`${classes.liStyle} ${classes.TextFontSize16}`} key={index}>
                            <Link passHref href={item.href}>
                                <a className={classes.linkAccordionStyle}>
                                    {item.linkText}
                                </a>
                            </Link>
                        </li>
                    );
                }
            }
            return <li className={`${classes.liStyle} ${classes.TextFontSize16}`} key={index}>{item}</li>
        });
        return listItems;
    }

    function PrepareAccordions() {
        let accordions = props.accordionsList.map((accordionObj, index) => (
            <StyledAccordion key={index}>
                <CustomAccordion
                    key={index}
                    className={`${classes.AccordionStyle} ${classes.backgourndColorLightGreyWildSand}`}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}>
                    <CustomAccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                    >
                        <Typography variant="h6" component="h3" className={`${classes.AccordionHeadingStyle} ${classes.TextFontSize18} ${classes.TextFontWeight600SemiBold}`}>{accordionObj.accordionTitle}</Typography>
                    </CustomAccordionSummary>
                    <AccordionDetails className={classes.AccordionDetailsStyle}>
                        <ul>
                            {prepareListOfAccordionItems(accordionObj.accordionItems)}
                        </ul>
                    </AccordionDetails>
                </CustomAccordion>
            </StyledAccordion>
        ));
        return accordions;
    }

    return (
        <div className={classes.accordionContainer}>
            {PrepareAccordions()}
        </div>
    );
}

export default MyAccordion;



//Data template - how to send data to the accordion
// let accordion1 = [
//     {
//         accordionTitle: "",
//         accordionItems: [
//             "",
//             "",
//             ""
//         ],
//     },
//     {
//         accordionTitle: "",
//         accordionItems: [
//             "",
//             "",
//             ""
//         ],
//     },
// ];



// <style jsx global>
//                 {`
//                         .MuiAccordion-root{
//                             // margin-right: -10px !important;
//                             // margin-left: -10px !important;
//                         }
//                         .MuiAccordion-root:before{
//                             content: none ! important;
//                         }
//                         .MuiAccordion-root.Mui-expanded{
//                             margin-top: 0px !important;
//                             margin-bottom: 0px !important;
//                         }


//                         .MuiAccordionSummary-root{
//                             padding: 0px !important;
//                             margin-right: 10px !important;
//                             height: 56px !important;
//                             text-align: right !important;
//                         }
//                         .MuiAccordionSummary-content.Mui-expanded{
//                             margin-top: 12px !important;
//                             margin-bottom: 12px !important;
//                         }
//                         .MuiAccordionSummary-root.Mui-expanded{
//                             min-height: 56px !important;
//                         }
//                         .MuiCollapse-container{
//                             margin-right: 25px !important;
//                         }
//                 `}
//             </style>