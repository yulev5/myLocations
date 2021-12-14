import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="he" style={{ overflowX: 'hidden' }}>
                <Head>
                    <meta charSet="utf-8" />
                    {/* <link rel="preconnect"
                        href="https://fonts.gstatic.com" />
                    <link rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap" />
                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap"
                        media="print" onLoad="this.media='all'" />
                    <noscript>
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap"
                        />
                    </noscript> */}
                    <link rel="icon" type="image/x-icon" href="/images/logoColor.svg" />
                </Head>
                <body dir="rtl">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}


MyDocument.getInitialProps = async (ctx) => {

    const styledComponentsSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => props => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />))
        })
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <React.Fragment>
                    {initialProps.styles}
                    {materialSheets.getStyleElement()}
                    {styledComponentsSheet.getStyleElement()}
                </React.Fragment>
            )
        }
    } finally {
        styledComponentsSheet.seal()
    }


    //Before adding styled-componenets
    //------------------------------------
    // const sheets = new ServerStyleSheets();
    // const originalRenderPage = ctx.renderPage;

    // ctx.renderPage = () =>
    //     originalRenderPage({
    //         enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    //     });

    // const initialProps = await Document.getInitialProps(ctx);

    // return {
    //     ...initialProps,
    //     // Styles fragment is rendered after the app and page rendering finish.
    //     styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    // };
};


// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).


    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.