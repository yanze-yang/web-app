import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import { ThemeProvider } from "@aws-amplify/ui-react";

// import awsconfig from "./aws-exports";
// import studioTheme from "./ui-components/studioTheme";

// Amplify.configure(awsconfig);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
