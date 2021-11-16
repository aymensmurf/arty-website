import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../Layout/Layout'
import { Init, Home, Features, FAQ, InitTablet, Download, Workshops, Artists } from '../components/index'
import client from '../graphql';
import { GET_FEATURED_USERS } from '../graphql/queries/user';

const Index = ({ artists }) => {
  const [pressed, setPressed] = useState(false);
  const [contact, setContact] = useState(false);
  const [commingSoon, setCommingSoon] = useState(false);

  useEffect(() => {
    if (!document.referrer) {
      setPressed(false);
    } else {
      setPressed(true);
    }
  }, []);

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

  console.log(`artists`, artists)

  return (
    <Layout
      contact={contact}
      commingSoon={commingSoon}
      openContact={() => { setCommingSoon(false); setContact(true); }}
      closeContact={() => { setContact(false); }}
      setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
    >

      <Home />
      <Download
        setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
      />
      <Workshops />
      <Artists data={artists} />
      <Features />
      <FAQ
        openContact={() => { setCommingSoon(false); setContact(true); }}
        setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
      />
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const { data } = await client.query({ query: GET_FEATURED_USERS });

    if (data.getFeaturedUsers) {
      return {
        props: {
          artists: data.getFeaturedUsers
        },
      };
    }

    return { props: {}, };
  } catch (error) {
    console.log(`error`, error)
    return { props: {}, };
  }
}

export default Index;