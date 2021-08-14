import React from 'react'
import Head from 'next/head'

import Nav from './Nav'
import NavTablet from './NavTablet'
import Footer from './Footer'
import FooterTablet from './FooterTablet'

const Layout = ({ children, contact, commingSoon, openContact, closeContact, setCommingSoon }) => {
    return (
        <>
            <Head>
                <title>ARTY</title>

                <link rel="shortcut icon" href="/favicon.png" type="image/png" />

                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            </Head>

            <div className="visible-desktop">
                <Nav contact={contact} openContact={openContact} closeContact={closeContact} commingSoon={commingSoon} setCommingSoon={setCommingSoon} />
            </div>
            <div className="visible-tablet">
                <NavTablet contact={contact} openContact={openContact} closeContact={closeContact} commingSoon={commingSoon} setCommingSoon={setCommingSoon} />
            </div>


            {children}


            <div className="visible-desktop">
                <Footer />
            </div>
            <div className="visible-tablet">
                <FooterTablet />
            </div>

        </>
    )
}

export default Layout