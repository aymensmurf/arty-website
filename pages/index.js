import { useState } from 'react'
import Head from 'next/head'
import Layout from '../Layout/Layout'
import { Init, Home, Features, FAQ, InitTablet, Download, Workshops, Artists } from '../components/index'

export default function Index() {
  const [pressed, setPressed] = useState(false);
  const [contact, setContact] = useState(false);
  const [commingSoon, setCommingSoon] = useState(false);

  if (!pressed) {
    return (
      <>
        <Head>
          <title>ARTY</title>

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

      <Home />
      <Download />
      <Workshops />
      <Artists />
      <Features />
      <FAQ
        openContact={() => { setCommingSoon(false); setContact(true); }}
        setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
      />
    </Layout>
  )
}
