import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { createCustomTheme } from "../theme";

function MyApp({ Component, pageProps }) {
  const theme = createCustomTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
