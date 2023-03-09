import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useContext } from 'react'
import foto from '../public/foto.jpg'
import { Locale } from './_app'
import contentAR from '../components/locales/ar'
import contentBR from '../components/locales/br'

const Home: NextPage = () => {
  const locale = useContext(Locale)
  const conetnt = locale === "es" ? contentAR : contentBR

  return (
    <div className='landing'>
      <Head>
        <title>Duo Serendipia </title>
        <meta name='viewport' content='initial-scale-1.0, width-device-width'/>
        <meta name='description' content={conetnt.description}/>
        <link rel='shortcut icon' href='/logo.png'/>
      </Head>
      <div>
        <h1>{conetnt.title}</h1>
        <h2>{conetnt.subtitle}</h2>
        <button>{conetnt.buttonText}</button>
      </div>
      <Image src={foto} alt="foto" width={400} height={800}/>
    </div>
  )
}

export default Home
