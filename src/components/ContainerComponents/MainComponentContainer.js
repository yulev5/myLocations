import React, { useState } from 'react';
import { initGA } from '../Utils/Tracking';
import { useEffect } from 'react';
import { PrintEnvToConsole } from "../Utils/Utils";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FixedContactButtons from 'components/GeneralComponents/FixedContactButtons/FixedContactButtons';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import Footer from 'components/FooterComponent/FooterComponentsDesktop/Footer';
import ToastSnackbar from './ToastSnackbar';

let GAInitialized = false;

const useStyles = makeStyles((theme) => ({
    ContainerStyle: {
        marginTop: '108px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginTop: '160px',
        },
    },
}));


function MainComponentContainer(props) {
    const classes = useStyles();
    const [isScrolledToBottom, setScrolledToBottom] = useState(false);

    if (!GAInitialized) {
        initGA('UA-25385483-2');
        GAInitialized = true;
    }

    useEffect(() => {
        PrintEnvToConsole();

        const handleScroll = e => {
            const totalHeightMinusScrolledFromTop = e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop;
            if (totalHeightMinusScrolledFromTop <= 900) {
                setScrolledToBottom(true);
            } else {
                setScrolledToBottom(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    return (
        <>
            <NavigationBar />
            <Container className={classes.ContainerStyle}>
                {props.children}
                <FixedContactButtons isScrolledToBottom={isScrolledToBottom} />
            </Container>
            <Footer />
            {/* <ToastSnackbar /> */}
        </>
    );
}

export default MainComponentContainer;