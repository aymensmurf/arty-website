import React from 'react'

const FooterTablet = () => {
    return (
        <>
            <footer>
                <img src="/img/logo.svg" alt="Jam" style={{ width: 200, height: 87 }} />

                <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <a href="/privacy-policy">Privacy policy</a>
                    <a href="/terms-and-conditions" style={{ marginTop: 25 }}>Terms & conditions</a>
                </div>

                <div className="social-media">
                    <a href="https://www.facebook.com/arty.land" target="_blank" rel="noopener noreferrer" className="header-social-box">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/jam_music_space" target="_blank" rel="noopener noreferrer" className="header-social-box">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/artylandspace" target="_blank" rel="noopener noreferrer" className="header-social-box">
                        <i className="fab fa-linkedin" style={{ marginRight: 0 }}></i>
                    </a>
                </div>

                <p style={{ marginTop: 44 }}>© All rights reserved for ARTY 2020</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                    <p>Made with </p>
                    <img src="/img/heart.svg" alt="Love" style={{ marginRight: 5, marginLeft: 5 }} />
                </div>
            </footer>

            <style jsx>{`
                footer {
                    background-color: #151515;
                    padding: 70px 30px;
                    text-align: center;
                }

                p, a {
                    color: #fff;
                }

                a {
                    text-decoration: underline;
                }

                .social-media {
                    margin-top: 55px;
                }

                .social-media i {
                    color: #fff;
                    font-size: 40px;
                    margin-right: 32px;
                }
            `}</style>
        </>
    )
}

export default FooterTablet
