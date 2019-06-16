import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import { generateFontFaceCSSString } from "../libs";
import typefaces from "../common/typefaces";
import theme from "../common/theme";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.js" />
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `${generateFontFaceCSSString(
                typefaces,
                theme.primaryFont
              )}`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
