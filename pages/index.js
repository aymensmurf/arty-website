import { useState, useEffect } from 'react'
import Head from 'next/head'

import Init from '../components/index/Init'
import Home from '../components/index/Home'
import Features from '../components/index/Features'
import FAQ from '../components/index/FAQ'
import HomeTablet from '../components/index/HomeTablet'
import FeaturesTablet from '../components/index/FeaturesTablet'
import Layout from '../Layout/Layout'
import InitTablet from '../components/index/InitTablet'

export default function Index() {
  const [pressed, setPressed] = useState(false);
  const [contact, setContact] = useState(false);
  const [commingSoon, setCommingSoon] = useState(false);

  if (!pressed) {
    return (
      <>
        <Head>
          <title>JAM</title>

          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
        </Head>

        <div className="visible-desktop">
          <Init pressed={pressed} setPressedTrue={() => setPressed(true)} />
        </div>

        <div className="visible-tablet">
          <InitTablet pressed={pressed} setPressedTrue={() => setPressed(true)} />
        </div>
      </>
    )
  }

  return (
    <Layout
      contact={contact}
      openContact={() => { setCommingSoon(false); setContact(true); }}
      closeContact={() => { setContact(false); }}
      commingSoon={commingSoon}
      setCommingSoon={() => { setCommingSoon(true); setContact(true); }}>

      <div className="visible-desktop">
        <Home />
        <Features />
      </div>

      <div className="visible-tablet">
        <HomeTablet setCommingSoon={() => { setCommingSoon(true); setContact(true); }} />
        <FeaturesTablet />
      </div>

      <FAQ
        openContact={() => { setCommingSoon(false); setContact(true); }}
        setCommingSoon={() => { setCommingSoon(true); setContact(true); }} />
    </Layout>
  )
}
