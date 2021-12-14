import { makeStyles } from '@material-ui/core';
import React from 'react';
import { getMessageIconBlueBg, getMessageIconGreenBg, getPhoneIconBlueBg, getPhoneIconGreenBg, getWhatsappIconBlueBg, getWhatsappIconGreenBg } from '../../assets/Database/DatabaseUtils';
import { Link as ScrollLink } from 'react-scroll';
import NavigationDialog from 'components/GeneralComponents/NavigationDialog';
import IconAndTextContact from 'components/ToolPageComponents/IconAndTextContact';

const useStyles = makeStyles((theme) => ({
    contactUsButtons: {
        display: 'flex',
        width: '414px',
        justifyContent: 'space-between',
    },
}));

function ElectricTableContactUsButtons(props) {
    const classes = useStyles();

    let phoneIconGreenBg = getPhoneIconGreenBg();
    let phoneIconBlueBg = getPhoneIconBlueBg();

    let whatsappIconGreenBg = getWhatsappIconGreenBg();
    let whatsappIconBlueBg = getWhatsappIconBlueBg();

    let messageIconGreenBg = getMessageIconGreenBg();
    let messageIconBlueBg = getMessageIconBlueBg();

    let whatsappTextMessageWithToolName = `היי! אני מתעניין ב- ${props.electricTableData.nameWithoutRentalText}%0Aאשמח שתיצרו איתי קשר`;

    return (
        <div className={`${classes.contactUsButtons} ${props.className}`}>
            <IconAndTextContact
                bottomTextFirstLine="חייג אלינו"
                bottomTextSecondLine="052-4343983"
                icon={phoneIconGreenBg}
                iconHovered={phoneIconBlueBg}
                href="tel:052-4343983"
                width="64"
                height="64" />

            <IconAndTextContact
                bottomTextFirstLine="בדוק זמינות"
                bottomTextSecondLine="ב-WhatsApp"
                icon={whatsappIconGreenBg}
                iconHovered={whatsappIconBlueBg}
                href={`https://wa.me/972524343983?text=${whatsappTextMessageWithToolName}`}
                width="64"
                height="64" />

            <ScrollLink to="sendUsMessageLine" href="#sendUsMessageLine" smooth={true} duration={380} offset={-300}>
                <IconAndTextContact
                    bottomTextFirstLine="שלח הודעה"
                    icon={messageIconGreenBg}
                    iconHovered={messageIconBlueBg}
                    width="64"
                    height="64" />
            </ScrollLink>

            <NavigationDialog />
        </div>
    );
}

export default ElectricTableContactUsButtons;