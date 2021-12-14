import { makeStyles } from '@material-ui/core';
import React from 'react';
import ToolPicturesSection from './ToolPicturesSection';
import ToolInfoSection from './ToolInfoSection';
import ToolPriceAndPriceListLink from './ToolPriceAndPriceListLink';
import ContactUsButtonsCatPageMobile from 'components/CategoryPageComponents/ContactUsButtonsCatPageMobile';

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
    priceAndContactComponentMobileView: {
        marginTop: '330px',
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
        }
    }
}));

function ToolMainSection(props) {
    const classes = useStyles();

    return (
        <>
            <div className={`${props.className} ${classes.containerStyle}`}>
                <ToolInfoSection className={classes.toolInfoSectionStyle} />
                <ToolPicturesSection />
            </div>

            <div className={classes.priceAndContactComponentMobileView}>
                <ToolPriceAndPriceListLink className={`${classes.hideOnDesktop}`} />
                <ContactUsButtonsCatPageMobile className={`${classes.contactUsButtonsStyle} ${classes.hideOnDesktop}`} />
            </div>
        </>
    );
}

export default ToolMainSection;