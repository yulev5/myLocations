import { makeStyles } from '@material-ui/core';
import React from 'react';
import { GetWhatsAppIcon } from 'assets/Database/DatabaseUtils';
import PowerToolsLogoDesktop from '../../GeneralComponents/PowerToolsLogoDesktop';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import { myColors } from 'components/Styles/Colors';

const useStyles = makeStyles((theme) => ({
    containerDivStyle: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        height: '100%',
    },
    aWhatsappLinkButtonStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '21px',
    },
    whatsAppIconStyle: {
        width: '24px',
        height: '24px',
    },
    separatorStyle: {
        height: '24px',
        lineHeight: '24px',
        marginLeft: '16px',
        marginRight: '16px',
        fontSize: myFontSizes.TextFontSize18,
    },
    separatorSpanStyle: {
        display: 'block',
        verticalAlign: 'middle',
        lineHeight: '19px',
    },
    phoneDivStyle: {
        color: myColors.LightGreyWildSand,
        fontSize: myFontSizes.TextFontSize20,
        fontWeight: myFontWeights.Weight500,
        height: '24px',
        lineHeight: '24px',
    },
    phoneDivSpanStyle: {
        display: 'block',
        verticalAlign: 'middle',
        lineHeight: '20px',
    },
}));

function HeaderLogoAndPhone(props) {
    const classes = useStyles();
    const whatsAppIcon = GetWhatsAppIcon();

    return (
        <div className={classes.containerDivStyle}>
            <PowerToolsLogoDesktop />

            <a target="_blank" rel="noreferrer noopener" href="https://wa.me/972524343983?text=%D7%90%D7%A9%D7%9E%D7%97%20%D7%A9%D7%AA%D7%A6%D7%A8%D7%95%20%D7%90%D7%99%D7%AA%D7%99%20%D7%A7%D7%A9%D7%A8"
                className={classes.aWhatsappLinkButtonStyle}>
                <img
                    className={classes.whatsAppIconStyle}
                    width="24px"
                    height="24px"
                    src={whatsAppIcon.src}
                    alt={whatsAppIcon.alt}
                    title={whatsAppIcon.title}
                />
            </a>

            <div className={`${classes.separatorStyle}`} >
                <span className={`${classes.separatorSpanStyle}`}>
                    |
                </span>
            </div>

            <a target="_blank" href="tel:052-4343983" rel="noreferrer noopener">
                <div className={`${classes.phoneDivStyle}`}>
                    <span className={classes.phoneDivSpanStyle}>
                        052-4343983
                    </span>
                </div>
            </a>
        </div>
    );
}

export default HeaderLogoAndPhone;