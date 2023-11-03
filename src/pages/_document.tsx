import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-512x512.png' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#85A547' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
