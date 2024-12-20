import type { ReactElement, ReactNode } from 'react';
import type { NextPage} from 'next';
import type { AppProps } from 'next/app';
import "../app/globals.css";
import { vollkorn } from "@/app/fonts";
import styles from './app.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return ( 
  <main className={`${vollkorn.className} ${styles.main}`}>
    {getLayout(<Component {...pageProps} />)}
  </main>)
}
