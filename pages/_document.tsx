import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="css/mui.min.css" rel="stylesheet" />
          <script type='text/javascript' src='lib/mui.min.js'/>
          <script type='text/javascript'>
            mui.init()
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument