import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Rubik:400,600,700&display=swap"
                    />
                    <link rel="stylesheet" href="/assets/styles/styles.css" />
                </Head>
                <body>
                    <Main />
                    <div id="sidebar" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
