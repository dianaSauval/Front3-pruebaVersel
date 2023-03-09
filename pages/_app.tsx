import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export const Locale = React.createContext<string|undefined>("es")

export default function App({ Component, pageProps }: AppProps) {
  const router =useRouter()
  const{locale} = router

  return(
    <Locale.Provider value={locale}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </Locale.Provider>
  ) 
}
