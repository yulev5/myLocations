import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head />
                <body style={{ backgroundColor: '#f5f5f5' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument


MyDocument.getInitialProps = async (ctx) => {

    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;


    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};
