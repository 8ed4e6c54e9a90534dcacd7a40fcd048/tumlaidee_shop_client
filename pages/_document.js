import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }
    
    render() {
        return (
            <html>
                <Head >
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.22.0/antd.min.css' />
                    <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap" rel="stylesheet"></link>
                    {this.props.styleTags}
                </Head>
                <body className="bg-light">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}