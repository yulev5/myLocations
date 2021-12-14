import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import IconAndTextContact from './IconAndTextContact';
import { getMessageIconBlueBg, getMessageIconGreenBg, getPhoneIconBlueBg, getPhoneIconGreenBg, getWhatsappIconBlueBg, getWhatsappIconGreenBg } from '../../assets/Database/DatabaseUtils';
import { Link as ScrollLink } from 'react-scroll';
import { UserContext } from '../../contexts/MyContext';
import NavigationDialog from 'components/GeneralComponents/NavigationDialog';

const useStyles = makeStyles((theme) => ({
    contactUsButtons: {
        display: 'flex',
        width: '414px',
        justifyContent: 'space-between',
    },
}));

function ContactUsButtons(props) {
    const { data, storeData } = useContext(UserContext);
    const classes = useStyles();

    let phoneIconGreenBg = getPhoneIconGreenBg();
    let phoneIconBlueBg = getPhoneIconBlueBg();

    let whatsappIconGreenBg = getWhatsappIconGreenBg();
    let whatsappIconBlueBg = getWhatsappIconBlueBg();

    let messageIconGreenBg = getMessageIconGreenBg();
    let messageIconBlueBg = getMessageIconBlueBg();

    let whatsappTextMessageWithToolName = "";
    if (data.currentTool) {
        //On tool page
        whatsappTextMessageWithToolName = `היי! אני רוצה לשכור ${data.currentTool.nameWithoutRentalText}%0Aאשמח שתיצרו איתי קשר`;
    }
    else {
        //On category page
        whatsappTextMessageWithToolName = `היי! אני מתעניין ב ${data.currentCategoryData.linkText}%0Aאשמח שתיצרו איתי קשר`;
    }

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

            {/* <IconAndTextContact
                bottomTextFirstLine="סניפים"
                icon={navigateIconGreenBg}
                iconHovered={navigateIconBlueBg}
                href="https://goo.gl/maps/ys6XccWuewcxf6Tn9"
                width="64"
                height="64" /> */}

        </div>
    );
}

export default ContactUsButtons;