import { Accordion, AccordionDetails, AccordionSummary, makeStyles, withStyles } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components'

const StyledDiv = styled.div`
    .MuiAccordion-root:before{
        content: none;
    }
    .MuiAccordion-root.Mui-expanded{
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .MuiAccordionSummary-content.Mui-expanded{
        margin-top: 12px;
        margin-bottom: 12px;
    }
    .MuiAccordionSummary-root.Mui-expanded{
        /* min-height: 43px; */
    }
    .MuiCollapse-container{
        margin-right: 17px;
    }
    .MuiPaper-elevation1{
        box-shadow:none;
    }
    .MuiAccordionDetails-root{
        padding: 0px;
    }
    .MuiIconButton-root{
        margin-left: 14px;
    }
    .MuiAccordionSummary-content{
        flex-grow: 0
    }
`;

const useStyles = makeStyles((theme) => ({
    accordionDisplayOnMobileStyle: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    expandIconStyle: {
        width: '38px',
        height: '38px',
        color: myColors.DarkBlueOuterSpace
    }
}));

const CustomAccordion = withStyles(() => ({
    root: {
        height: 'auto',
        marginTop: '0px',
        paddingTop: '5px',
        paddingBottom: '5px',
        backgroundColor: myColors.LightGreyWildSand,
        fontSize: myFontSizes.TextFontSize24,
        fontWeight: myFontWeights.Weight800ExtraBold,
    },
    expanded: {
    }
}))(Accordion);

const CustomAccordionSummary = withStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '0px',
        marginRight: '30px',
        height: '50px',
        textAlign: 'right',
        color: myColors.DarkBlueOuterSpace,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    expanded: {

    }
}))(AccordionSummary);

const CustomAccordionDetails = withStyles(() => ({

}));

function AccordionInfoSection(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const listOfAccordionContent = [];
    props.tabsData.map((tabDData, index) => {
        listOfAccordionContent.push(
            <CustomAccordion
                // tabId={tabDData.tabId}
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}>
                <CustomAccordionSummary
                    aria-controls={`panel${index}bh-content`}
                    id={`panel${index}bh-header`}
                    expandIcon={<ExpandMoreIcon className={classes.expandIconStyle} />}>

                    {tabDData.tabTitle}
                </CustomAccordionSummary>
                <AccordionDetails>
                    {tabDData.tabContent}
                </AccordionDetails>
            </CustomAccordion>
        );
    });

    React.useEffect(() => {
        let i = 0;
        for (let singleAccordion of listOfAccordionContent) {
            if (singleAccordion.props.tabId === "toolVideos") {
                setExpanded(`panel${i}`)
                break;
            }
            i++;
        }
    }, []);

    return (
        <StyledDiv className={classes.accordionDisplayOnMobileStyle}>
            {listOfAccordionContent}
        </StyledDiv>
    );
}

export default AccordionInfoSection;