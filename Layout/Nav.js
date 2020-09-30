import React from 'react'

const Nav = () => {
    return (
        <>
            <nav style={{ position: 'fixed', width: '100%' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '40px 0px', alignItems: 'center' }}>
                    <div style={{ width: '33.33%' }}>
                        <a href="#">Features</a>
                        <a href="#">FAQ</a>
                        <a href="#">Download</a>
                        <a href="#">Contact</a>
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

            <style jsx>{`
                a {
                    margin-right: 40px;
                }
            `}</style>
        </>
    )
}

export default Nav
