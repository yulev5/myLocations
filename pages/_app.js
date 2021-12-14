import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { OnDevEnv, OnProdEnv } from "../src/components/Utils/Utils";
import '../src/styles/reset.css';
import UserContextProvider from '../src/contexts/MyContext';
// import { hotjar } from 'react-hotjar';

if (OnProdEnv())
    require('swiper/swiper-bundle.min.css');
else
    require('swiper/swiper-bundle.css');


export default function MyApp(props) {
    const { Component, pageProps } = props;
    // const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        };
        // hotjar.initialize('2419948', '6');
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>השכרת כלי עבודה - Power-Tools.co.il</title>
                <meta name="author" content="Yuval Levy"></meta>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" /> */}
                <meta name='viewport' content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <UserContextProvider>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </UserContextProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};