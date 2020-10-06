import { useState, useEffect } from 'react'
import Head from 'next/head'

import Init from '../components/index/Init'
import Home from '../components/index/Home'
import Features from '../components/index/Features'
import FAQ from '../components/index/FAQ'
import HomeTablet from '../components/index/HomeTablet'
import FeaturesTablet from '../components/index/FeaturesTablet'
import Layout from '../Layout/Layout'

export default function Index() {
  const [pressed, setPressed] = useState(true);
  const [counter, setCounter] = useState(0);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    handleSpaceBarPress()
  }, [])


  function handleSpaceBarPress() {
    let i = 0;

    document.addEventListener('keydown', event => {
      if (event.code === 'Space') {
        i++;
        setCounter(i)
        if (i > 30) {
          setPressed(true)
        }
      }
    })

    document.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        if (!pressed) {
          i = 0;
          setCounter(i)
        }
      }
    })
  }

  if (!pressed) {
    return (
      <>
        <Head>
          <title>JAM</title>

          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
        </Head>

        <Init counter={counter} />
      </>
    )
  }

  return (
    <Layout contact={contact} openContact={() => setContact(true)} closeContact={() => setContact(false)}>
      <div className="visible-desktop">
        <Home />
        <Features />
      </div>

      <div className="visible-tablet">
        <HomeTablet />
        <FeaturesTablet />
      </div>

      <FAQ openContact={() => setContact(true)} />
    </Layout>
  )
}
