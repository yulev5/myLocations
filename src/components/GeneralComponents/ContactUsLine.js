import { makeStyles, Tooltip, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import FullWidthHorizontalSection from './FullWidthHorizontalSection';
import MyInputBox from './MyInputBox';
import { myColors } from '../Styles/Colors';
import { hoverOpacity07 } from '../Styles/MyStyles';
import ButtonMediumDarkerBlue from "./ButtonMediumDarkerBlue";
import Zoom from '@material-ui/core/Zoom';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';

// more options for tooltips
// https://www.newline.co/@dmitryrogozhny/4-ways-to-show-tooltips-in-react-with-react-tooltip,-material-ui,-bootstrap,-or-semantic-ui--e3473190

const useStyles = makeStyles((theme) => ({
    contactUsLineStyle: {
        height: '443px',
        borderBottom: `12px solid ${myColors.DarkBlueOuterSpaceDarker}`,
        backgroundColor: myColors.TurquoisePelorous,
        [theme.breakpoints.up('md')]: {
            height: '216px',
        }
    },
    contactusContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '14px',
        [theme.breakpoints.up('md')]: {
            marginTop: '30px',
        }
    },
    contactUsHeaderStyle: {
        fontSize: myFontSizes.TextFontSize26,
        color: myColors.RegularWhite,
        fontWeight: myFontWeights.Weight700Bold,
        whiteSpace: 'pre-line',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize28,
            fontWeight: myFontWeights.Weight600SemiBold,
            whiteSpace: 'normal',
        }
    },
    contactDetailsFormStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '20px',
        height: '296px',
        [theme.breakpoints.up('md')]: {
            marginTop: '40px',
            flexDirection: 'row',
            height: 'auto',
            marginBottom: 'auto',
        }
    },
    hoverOpacity07,
    myInputBoxStyle: {
        height: '54px',
        width: '288px',
        [theme.breakpoints.up('md')]: {
            height: '44px',
            width: '280px',
        }
    },
    buttonMediumDarkerBlueStyle: {
        width: '288px',
        height: '56px',
        [theme.breakpoints.up('md')]: {
            height: '44px',
            width: '180px',
        }
    }
}));

function ContactUsLine(props) {
    const classes = useStyles();
    const [contactMessage, setContactMessage] = useState
        (`יש לך שאלה?
    רוצה להתייעץ איתנו?`);
    const [input, setState] = useState({ name: '', phone: '', phoneError: '', email: '' })
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
            setContactMessage("תודה! ניצור איתך קשר בקרוב...");
            setState({ name: '', phone: '', phoneError: '', email: '' });
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
        <FullWidthHorizontalSection className={`${classes.contactUsLineStyle} ${props.className}`}>
            <div name="sendUsMessageLine" className={`${classes.contactusContainerStyle}`}>

                <Typography name='contactUsLine' className={`${classes.contactUsHeaderStyle}`}>
                    {contactMessage}
                </Typography>

                <form className={classes.contactDetailsFormStyle}>
                    <Tooltip
                        title={"איך קוראים לך?"}
                        open={nameToolTipOpen}
                        TransitionComponent={Zoom}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        arrow>
                        <div>
                            <MyInputBox
                                className={classes.myInputBoxStyle}
                                value={input.name}
                                placeholder="שם: *"
                                onFocus={hideNameToolTip}
                                onChange={handleChange}
                                type="text"
                                name="name" />
                        </div>
                    </Tooltip>

                    <Tooltip
                        title={input.phoneError}
                        open={phoneToolTipOpen}
                        TransitionComponent={Zoom}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        arrow>
                        <div>
                            <MyInputBox
                                className={classes.myInputBoxStyle}
                                value={input.phone}
                                placeholder="טלפון: *"
                                onFocus={hidePhoneToolTip}
                                onChange={handleChange}
                                type="tel"
                                name="phone" />
                        </div>
                    </Tooltip>

                    <div>
                        <MyInputBox
                            className={classes.myInputBoxStyle}
                            value={input.email}
                            placeholder="אימייל (לא חובה):"
                            onChange={handleChange}
                            name="email"
                            type="email" />
                    </div>

                    <ButtonMediumDarkerBlue
                        buttonStyle={classes.buttonMediumDarkerBlueStyle}
                        onClick={sendButtonClicked}
                        hover={classes.hoverOpacity07}
                        text="צור קשר" />
                </form>
            </div>
        </FullWidthHorizontalSection>
    );
}

export default ContactUsLine;