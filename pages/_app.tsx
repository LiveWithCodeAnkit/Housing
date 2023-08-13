import LayOut from "@/components/LayOut";
import type { AppProps } from "next/app";
import "../styles/heder.css";
import '../styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
