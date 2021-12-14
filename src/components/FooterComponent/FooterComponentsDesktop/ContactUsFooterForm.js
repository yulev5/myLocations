import { makeStyles, Tooltip, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import MyInputBox from '../../GeneralComponents/MyInputBox';
import { myColors } from '../../Styles/Colors';
import { hoverOpacity07, textColorRegularWhite, TextFontSize32, TextFontWeight600SemiBold } from '../../Styles/MyStyles';
import ButtonMediumDarkerBlue from "../../GeneralComponents/ButtonMediumDarkerBlue";
import Zoom from '@material-ui/core/Zoom';
import FooterHeader from './FooterHeader';

// more options for tooltips
// https://www.newline.co/@dmitryrogozhny/4-ways-to-show-tooltips-in-react-with-react-tooltip,-material-ui,-bootstrap,-or-semantic-ui--e3473190

const useStyles = makeStyles((theme) => ({
    contactusContainerStyle: {
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    TextFontSize32,
    textColorRegularWhite,
    TextFontWeight600SemiBold,
    contactDetailsFormStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        justifyContent: 'space-between'
    },
    headerStyle: {
        textAlign: 'center'
    },
    hoverOpacity07,
    inputBoxStyle: {
        marginBottom: '10px'
    },
    myInputBoxStyle: {
        width: '240px',
        height: '44px',
    },
    buttonSendStyle: {
        width: '240px',
        height: '44px',
    }
}));

function ContactUsFooterForm(props) {
    const classes = useStyles();
    const [contactMessage, setContactMessage] = useState("תנו לנו לחזור אליכם");
    const [input, setState] = useState({ name: '', phone: '', phoneError: '' });
    const [nameToolTipOpen, setNameToolTipOpen] = React.useState(false);
    const [phoneToolTipOpen, setPhoneToolTipOpen] = React.useState(false);

    const hideNameToolTip = () => {
        if (nameToolTipOpen) {
            setNameToolTipOpen(false);
        }
    }

    const hidePhoneToolTip = () => {
        if (phoneToolTipOpen) {
            setPhoneToolTipOpen(false);
        }
    }


    const handleChange = event => {
        const { name, value } = event.target;
        setState({
            ...input,
            [name]: value
        });
    }

    const validate = () => {
        if (!input.name) {
            setNameToolTipOpen(true);
            return false;
        }
        if (!input.phone) {
            setState({
                ...input,
                ["phoneError"]: "מה מספר הטלפון שלך?"
            });
            setPhoneToolTipOpen(true);
            return false;
        }

        if (!input.phone.match("^\\+?(972\\-?)?0?(([23489]{1}\\-?\\d{7})|[5]{1}\\d{1}\\-?\\d{7})$")) {
            setState({
                ...input,
                ["phoneError"]: "מספר הטלפון לא תקין"
            });
            setPhoneToolTipOpen(true);
            return false;
        }

        return true;
    }

    const sendButtonClicked = async e => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            setContactMessage("שולח...");
            const res = await fetch('/api/SendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            });
            handleResponse(await res.status);
        }
    }

    const handleResponse = (responseCode) => {
        if(responseCode === 200){
            setContactMessage("ניצור איתך קשר בקרוב...");
            setState({ name: '', phone: '', phoneError: '' });
        }
        else if(responseCode === 403){
            setState({
                ...input,
                ["phoneError"]: "מספר הטלפון לא תקין"
            });
            setPhoneToolTipOpen(true);
        }
        else if (responseCode === 400){
            setContactMessage("קרתה תקלה, נסה שוב");
        }
    }


    return (
        <div className={`${classes.contactusContainerStyle} ${props.className}`}>

            <div>
                <FooterHeader text={contactMessage} className={classes.headerStyle} />

                <form className={classes.contactDetailsFormStyle}>
                    <Tooltip title={"איך קוראים לך?"} open={nameToolTipOpen} TransitionComponent={Zoom} disableFocusListener disableHoverListener disableTouchListener arrow>
                        <div className={classes.inputBoxStyle}>
                            <MyInputBox
                                className={classes.myInputBoxStyle}
                                value={input.name}
                                placeholder="שם:"
                                onFocus={hideNameToolTip}
                                onChange={handleChange}
                                type="text"
                                name="name"
                            />
                        </div>
                    </Tooltip>

                    <Tooltip title={input.phoneError} open={phoneToolTipOpen} TransitionComponent={Zoom} disableFocusListener disableHoverListener disableTouchListener arrow>
                        <div>
                            <MyInputBox
                                className={classes.myInputBoxStyle}
                                value={input.phone}
                                placeholder="טלפון:"
                                onFocus={hidePhoneToolTip}
                                onChange={handleChange}
                                type="tel"
                                name="phone" />
                        </div>
                    </Tooltip>
                </form>
            </div>

            <ButtonMediumDarkerBlue
                buttonStyle={classes.buttonSendStyle}
                onClick={sendButtonClicked}
                hover={classes.hoverOpacity07}
                text="צור קשר" />
        </div>
    );
}

export default ContactUsFooterForm;