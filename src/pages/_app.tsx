import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/base.css";
import "../styles/components.css";
import "../styles/utilities.css";
import type { AppProps } from "next/app";
import FluidBackground from "../components/FluidBackground";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FluidBackground />
      <Component {...pageProps} />
    </>
  );
}
