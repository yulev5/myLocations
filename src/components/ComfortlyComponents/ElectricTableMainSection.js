import { makeStyles } from '@material-ui/core';
import React from 'react';
import ElectricTableContactUsButtonsCatPageMobile from './ElectricTableContactUsButtonsCatPageMobile';
import ElectricTableInfoSection from './ElectricTableInfoSection';
import ElectricTablePicturesSection from './ElectricTablePicturesSection';
import ElectricTablePriceAndPriceListLink from './ElectricTablePriceAndPriceListLink';

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginRight: '36px',
            flexDirection: 'row',
            marginRight: '32px',
            width: '1025px',
            height: '408px',
            marginLeft: '23px',
        }
    },
    toolInfoSectionStyle: {
        marginRight: '36px',
        [theme.breakpoints.up('md')]: {
            marginRight: '0px',
            marginLeft: '134px',
        }
    },
    contactUsButtonsStyle: {
        marginTop: '30px',
    },
    hideOnDesktop: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    priceAndContactCompoenentMobileView: {
        marginTop: '330px',
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
        }
    }
}));

function ElectricTableMainSection(props) {
    const classes = useStyles();

    return (
        <>
            <div className={`${props.className} ${classes.containerStyle}`}>
                <ElectricTableInfoSection electricTableData={props.electricTableData} className={classes.toolInfoSectionStyle} />
                <ElectricTablePicturesSection electricTableData={props.electricTableData}/>
            </div>

            <div className={classes.priceAndContactCompoenentMobileView}>
                <ElectricTablePriceAndPriceListLink electricTableData={props.electricTableData} className={`${classes.hideOnDesktop}`} />
                <ElectricTableContactUsButtonsCatPageMobile electricTableData={props.electricTableData} className={`${classes.contactUsButtonsStyle} ${classes.hideOnDesktop}`} />
            </div>
        </>
    );
}

export default ElectricTableMainSection;