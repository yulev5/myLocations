import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import { GetWhatsAppIcon } from 'assets/Database/DatabaseUtils';

const useStyles = makeStyles((theme) => ({
    FixBottomDiv: {
        position: 'fixed',
        bottom: '30px',
        left: '30px',
        zIndex: 9999
    },
    aWhatsappLinkButtonStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whatsAppIconStyle: {
        width: '64px',
        height: '64px',
    },
    whatsActionCallTextStyle: {
        fontWeight: '700'
    },
}));

const FixedContactButtonsDesktop = () => {
    const classes = useStyles();
    const whatsAppIcon = useMemo(() => GetWhatsAppIcon(), [GetWhatsAppIcon]);

    return (
        <div className={classes.FixBottomDiv}>
            <a className={classes.aWhatsappLinkButtonStyle} target="_blank" rel="noreferrer noopener" href="https://wa.me/972524343983?text=%D7%90%D7%A9%D7%9E%D7%97%20%D7%A9%D7%AA%D7%A6%D7%A8%D7%95%20%D7%90%D7%99%D7%AA%D7%99%20%D7%A7%D7%A9%D7%A8" >
                <img
                    className={classes.whatsAppIconStyle}
                    width="64px"
                    height="64px"
                    sizes={`64px`}
                    src={whatsAppIcon.src}
                    alt={whatsAppIcon.alt}
                    title={whatsAppIcon.title}
                />
                <div className={classes.whatsActionCallTextStyle}>שלח לנו הודעת וואטסאפ מהירה</div>
            </a>
        </div>
    );
}

export default FixedContactButtonsDesktop;