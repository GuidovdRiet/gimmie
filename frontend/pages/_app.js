import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";

import PageLayout from "../components/PageLayout";

// Style
import theme from "../common/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ThemeProvider>
      </Container>
    );
  }
}
