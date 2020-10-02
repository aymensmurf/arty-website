import React, { useState } from 'react'
import Contact from '../components/widgets/Contact'

const Nav = () => {
    const [contact, setContact] = useState(false)
    
    return (
        <>
            <nav style={{ position: 'fixed', width: '100%' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '40px 0px', alignItems: 'center' }}>
                    <div style={{ width: '33.33%' }}>
                        <a href="#">Features</a>
                        <a href="#">FAQ</a>
                        <a href="#">Download</a>
                        <a onClick={() => setContact(true)}>Contact</a>
                    </div>
                    <div style={{ width: '33.33%', textAlign: 'center' }}>
                        <a href="/"><img src="/img/logo-black.svg" alt="Jam" /></a>
                    </div>
                    <div style={{ width: '33.33%', textAlign: 'right' }}>
                        <img src="/img/nav-google.png" alt="Google Play" style={{ marginRight: 11 }} />
                        <img src="/img/nav-apple.png" alt="App store" />
                    </div>
                </div>
            </nav>

            <Contact show={contact} handleClose={() => setContact(false)} />

            <style jsx>{`
                a {
                    margin-right: 40px;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}

export default Nav
