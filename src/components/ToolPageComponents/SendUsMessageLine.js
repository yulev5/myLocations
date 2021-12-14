import React, { useCallback, useState } from 'react';
import { makeStyles, Tooltip, Typography } from '@material-ui/core';
import { myColors } from '../Styles/Colors';
import { hoverOpacity07 } from '../Styles/MyStyles';
import Zoom from '@material-ui/core/Zoom';
import ButtonMediumDarkerBlue from '../GeneralComponents/ButtonMediumDarkerBlue';
import FullWidthHorizontalSection from '../GeneralComponents/FullWidthHorizontalSection';
import MyInputBox from '../GeneralComponents/MyInputBox';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';

// more options for tooltips
// https://www.newline.co/@dmitryrogozhny/4-ways-to-show-tooltips-in-react-with-react-tooltip,-material-ui,-bootstrap,-or-semantic-ui--e3473190

const useStyles = makeStyles((theme) => ({
    contactUsLineStyle: {
        backgroundColor: myColors.TurquoisePelorous,
        borderBottom: `12px solid ${myColors.DarkBlueOuterSpaceDarker}`,
        height: '533px',
        [theme.breakpoints.up('md')]: {
            height: '246px',
        }
    },
    contactusContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px',
        [theme.breakpoints.up('md')]: {
            marginTop: '60px',
        }
    },
    contactUsHeaderStyle: {
        fontSize: myFontSizes.TextFontSize32,
        color: myColors.RegularWhite,
        fontWeight: myFontWeights.Weight600SemiBold,
        whiteSpace: 'pre-line',
        [theme.breakpoints.up('md')]: {
            whiteSpace: 'normal',
        }
    },
    contactDetailsFormStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '40px',
        height: '296px',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            height: 'auto',
            marginBottom: 'auto',
        }
    },
    phoneOrNameInputBoxStyle: {
        height: '56px',
        minWidth: '288px',
        width: '90vw',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
            marginLeft: '2px',
            minWidth: '0px',
            height: '44px',
            width: 'auto',
        }
    },
    bigMessageInputBoxStyle: {
        height: '56px',
        minWidth: '288px',
        width: '90vw',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
            marginRight: '0',
            marginLeft: '2px',
            minWidth: '450px',
            width: 'auto',
            height: '44px',
        }
    },
    buttonSendStyle: {
        height: '56px',
        minWidth: '288px',
        width: '90vw',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
            minWidth: '0px',
            height: '44px',
            width: '170px',
        }
    },
    hoverOpacity07,
}));

function SendUsMessageLine({ message, name, className }) {
    const classes = useStyles();
    const [contactMessage, setContactMessage] = useState("ההודעה מוכנה, נשאר רק להשלים את הפרטים שלך");
    const [input, setState] = useState({ name: '', phone: '', phoneError: '', message: message });
    const [nameToolTipOpen, setNameToolTipOpen] = useState(false);
    const [phoneToolTipOpen, setPhoneToolTipOpen] = useState(false);

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

    const validate = useCallback(() => {
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
    }, [input.name, setNameToolTipOpen, input.phone, setPhoneToolTipOpen])

    const sendButtonClicked = useCallback(async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            setContactMessage("שולח...");
            const res = await fetch('/api/SendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            });
            handleResponse(await res.status);
        }
    }, [validate, setContactMessage]);

    const handleResponse = useCallback((responseCode) => {
        if (responseCode === 200) {
            setContactMessage("תודה! ניצור איתך קשר בקרוב...");
            setState({ name: '', phone: '', phoneError: '', message: '' });
        }
        else if (responseCode === 403) {
            setState({
                ...input,
                ["phoneError"]: "מספר הטלפון לא תקין"
            });
            setPhoneToolTipOpen(true);
        }
        else if (responseCode === 400) {
            setContactMessage("קרתה תקלה, נסה שוב");
        }
    }, [setContactMessage, setPhoneToolTipOpen])


    return (
        <FullWidthHorizontalSection
            className={`${classes.contactUsLineStyle} ${className}`}>
            <div
                className={`${classes.contactusContainerStyle}`}
                name={name}>

                <Typography name='contactUsLine' className={`${classes.contactUsHeaderStyle}`}>
                    {contactMessage}
                </Typography>

                <form className={classes.contactDetailsFormStyle}>
                    <Tooltip title={"איך קוראים לך?"} open={nameToolTipOpen} TransitionComponent={Zoom} disableFocusListener disableHoverListener disableTouchListener arrow>
                        <div>
                            <MyInputBox
                                className={classes.phoneOrNameInputBoxStyle}
                                value={input.name}
                                placeholder="שם: *"
                                onFocus={hideNameToolTip}
                                onChange={handleChange}
                                type="text"
                                name="name" />
                        </div>
                    </Tooltip>

                    <Tooltip title={input.phoneError} open={phoneToolTipOpen} TransitionComponent={Zoom} disableFocusListener disableHoverListener disableTouchListener arrow>
                        <div>
                            <MyInputBox
                                className={classes.phoneOrNameInputBoxStyle}
                                value={input.phone}
                                placeholder="טלפון: *"
                                onFocus={hidePhoneToolTip}
                                onChange={handleChange}
                                type="tel"
                                name="phone" />
                        </div>
                    </Tooltip>

                    <MyInputBox
                        className={classes.bigMessageInputBoxStyle}
                        value={input.message}
                        placeholder="תוכן ההודעה"
                        onChange={handleChange}
                        name="message"
                        type="text" />

                    <ButtonMediumDarkerBlue
                        buttonStyle={classes.buttonSendStyle}
                        onClick={sendButtonClicked}
                        hover={classes.hoverOpacity07}
                        text="חזרו אלי!" />
                </form>
            </div>
        </FullWidthHorizontalSection>
    );
}

export default SendUsMessageLine;