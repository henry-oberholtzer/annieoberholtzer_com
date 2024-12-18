import type { Metadata } from "next";
import type { ReactElement, ReactNode } from 'react';
import type { NextPage} from 'next';
import type { AppProps } from 'next/app';
import "../app/globals.css";
import { vollkorn } from "@/app/fonts";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



export default function App({ Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return ( 
  <main className={vollkorn.className}>
    {getLayout(<Component {...pageProps} />)}
  </main>)
}
