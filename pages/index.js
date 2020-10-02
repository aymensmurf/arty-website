import { useState, useEffect } from 'react'
import Head from 'next/head'

import Init from '../components/index/Init'
import Home from '../components/index/Home'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import Features from '../components/index/Features'
import FAQ from '../components/index/FAQ'

export default function Index() {
  const [pressed, setPressed] = useState(false);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    handleSpaceBarPress()
  }, [])


  function handleSpaceBarPress() {
    let i = 0;

    document.addEventListener('keydown', event => {
      if (event.code === 'Space') {
        i++;
        setCounter(i)
        console.log('i', i)
        if (i > 30) {
          setPressed(true)
          console.log("***OK***")
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

  return (
    <>
      <Head>
        <title>JAM</title>

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
      </Head>

      {
        !pressed ?
          <>
            <Init counter={counter} />
          </>
          :
          <>
            <Nav />
            <Home />
            <Features />
            <FAQ />
            <Footer />
          </>
      }
    </>
  )
}
