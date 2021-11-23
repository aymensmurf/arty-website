import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../Layout/Layout'
import { Init, Home, Features, FAQ, InitTablet, Download, Workshops, Artists, FeaturesTablet, HomeTablet, ArtistsTablet } from '../components/index'
import client from '../graphql';
import { GET_FEATURED_USERS } from '../graphql/queries/user';
import { GET_FEATURED_WORKSHOPS } from '../graphql/queries/workshop';

const Index = ({ artists, workshops }) => {
  const [pressed, setPressed] = useState(false);
  const [contact, setContact] = useState(false);
  const [commingSoon, setCommingSoon] = useState(false);

  const [skills, setSkills] = useState({
    skill1: {
      state: false,
      audio: typeof Audio !== "undefined" ? new Audio('/audio/skill-1.mp3') : undefined
    },
    skill2: {
      state: false,
      audio: typeof Audio !== "undefined" ? new Audio('/audio/skill-2.mp3') : undefined
    },
    skill3: {
      state: false,
      audio: typeof Audio !== "undefined" ? new Audio('/audio/skill-3.mp3') : undefined
    },
    skill4: {
      state: false,
      audio: typeof Audio !== "undefined" ? new Audio('/audio/skill-4.mp3') : undefined
    },
    skill5: {
      state: false,
      audio: typeof Audio !== "undefined" ? new Audio('/audio/skill-5.mp3') : undefined
    },
  });

  useEffect(() => {
    if (!document.referrer) {
      setPressed(false);
    } else {
      setPressed(true);
    }
  }, []);

  const handlePress = () => {
    setPressed(true);

    // Auto play guitar
    let _skills = { ...skills };
    _skills.skill3.state = true;
    _skills.skill3.audio.currentTime = 0;
    _skills.skill3.audio.loop = true;
    _skills.skill3.audio.play();
    setSkills(_skills);
  };

  const handleSkillClick = (title) => {
    const _title = title.toLowerCase().replace('-', '');
    let _skills = { ...skills };

    _skills[_title].state = !_skills[_title].state;

    _skills.skill1.audio.currentTime = 0;
    _skills.skill2.audio.currentTime = 0;
    _skills.skill3.audio.currentTime = 0;
    _skills.skill4.audio.currentTime = 0;
    _skills.skill5.audio.currentTime = 0;

    _skills.skill1.audio.loop = true;
    _skills.skill2.audio.loop = true;
    _skills.skill3.audio.loop = true;
    _skills.skill4.audio.loop = true;
    _skills.skill5.audio.loop = true;

    if (_skills[_title].state) {
      _skills[_title].audio.play();
    } else {
      _skills[_title].audio.pause();
    }

    setSkills(_skills);
  };

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
          <Init pressed={pressed} setPressedTrue={handlePress} />
        </div>

        <div className="visible-tablet">
          <InitTablet pressed={pressed} setPressedTrue={handlePress} />
        </div>
      </>
    )
  }

  return (
    <Layout
      contact={contact}
      commingSoon={commingSoon}
      openContact={() => { setCommingSoon(false); setContact(true); }}
      closeContact={() => { setContact(false); }}
      setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
    >

      <Home skills={skills} handleSkillClick={handleSkillClick} />
      <HomeTablet skills={skills} handleSkillClick={handleSkillClick} />

      <Download
        setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
      />

      {workshops.length > 0 && <Workshops data={workshops} />}

      {artists.length > 0 && <Artists data={artists} />}
      {artists.length > 0 && <ArtistsTablet data={artists} />}

      <Features />
      <FeaturesTablet />

      <FAQ
        openContact={() => { setCommingSoon(false); setContact(true); }}
        setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
      />
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const { data: usersData } = await client.query({ query: GET_FEATURED_USERS });
    const { data: workshopsData } = await client.query({ query: GET_FEATURED_WORKSHOPS });

    return {
      props: {
        artists: usersData.getFeaturedUsers || [],
        workshops: workshopsData.getFeaturedWorkshops || [],
      },
    };

  } catch (error) {
    console.error(`error`, error)
    return { props: {}, };
  }
}

export default Index;