import React from "react";
import "../styles/globals.css";
import { axeAccessibilityReporter } from "../utils/axeAccessibilityReporter";

axeAccessibilityReporter();

export default function App({ Component, pageProps }) {
   return <Component {...pageProps} />;
}
