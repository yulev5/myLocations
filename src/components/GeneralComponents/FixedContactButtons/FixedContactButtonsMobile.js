import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import { GetBluePhoneIcon, GetWhatsAppIcon } from 'assets/Database/DatabaseUtils';

const useStyles = makeStyles((theme) => ({
    FixBottomDiv: {
        position: 'fixed',
        bottom: '25px',
        left: '15px',
        zIndex: 9999
    },
    FixBottomDivScrolledBottom: {
        position: 'fixed',
        top: '110px',
        left: '15px',
        zIndex: 9999
    },
    aWhatsappLinkButtonStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whatsAppIconStyle: {
        width: '40px',
        height: '40px',
    },
    bluePhoneIconStyle: {
        marginTop: '24px',
        width: '40px',
        height: '40px',
    }
}));

const FixedContactButtonsMobile = ({ isScrolledToBottom }) => {
    const classes = useStyles();
    const whatsAppIcon = useMemo(() => GetWhatsAppIcon(), [GetWhatsAppIcon]);
    const bluePhoneIcon = useMemo(() => GetBluePhoneIcon(), [GetBluePhoneIcon]);
    const bottomOrNotStyle = useMemo(() => isScrolledToBottom ? classes.FixBottomDivScrolledBottom : classes.FixBottomDiv, [isScrolledToBottom])

    return (
        <div className={bottomOrNotStyle}>

            <a className={classes.aWhatsappLinkButtonStyle} target="_blank" rel="noreferrer noopener" href="https://wa.me/972524343983?text=%D7%90%D7%A9%D7%9E%D7%97%20%D7%A9%D7%AA%D7%A6%D7%A8%D7%95%20%D7%90%D7%99%D7%AA%D7%99%20%D7%A7%D7%A9%D7%A8" >
                <img
                    className={classes.whatsAppIconStyle}
                    width="40px"
                    height="40px"
                    sizes={`40px`}
                    src={whatsAppIcon.src}
                    alt={whatsAppIcon.alt}
                    title={whatsAppIcon.title}
                />
            </a>


            <a target="_blank" href="tel:052-4343983" rel="noreferrer noopener">
                <div>
                    <img
                        className={classes.bluePhoneIconStyle}
                        src={bluePhoneIcon.src}
                        alt={bluePhoneIcon.alt}
                        title={bluePhoneIcon.title}
                    />
                </div>
            </a>
        </div>
    );
}

export default FixedContactButtonsMobile;