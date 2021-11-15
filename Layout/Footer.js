import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '40px 0px', alignItems: 'center' }}>
                        <div style={{ width: '33.33%', display: 'flex', alignItems: 'center' }}>
                            <p>Made with </p>
                            <img src="/img/heart.svg" alt="Love" style={{ marginRight: 5, marginLeft: 5 }} />
                            {/* <p>by <a href="https://innovant.studio" target="_blank" rel="noopener noreferrer">InnovAnt.studio</a></p> */}
                        </div>
                        <div style={{ width: '33.33%', textAlign: 'center' }}>
                            <img src="/img/logo-white.svg" alt="Jam" style={{ width: 200, height: 87 }} />
                        </div>
                        <div style={{ width: '33.33%', textAlign: 'right' }}>
                            <div className="social-media">
                                <a href="https://www.facebook.com/the.arty.land" target="_blank" rel="noopener noreferrer" className="header-social-box">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/the.arty.land" target="_blank" rel="noopener noreferrer" className="header-social-box">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/the-arty-land" target="_blank" rel="noopener noreferrer" className="header-social-box">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://twitter.com/the_arty_land" target="_blank" rel="noopener noreferrer" className="header-social-box">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UC7am7GDTYOBjF5-eP6-vsaw" target="_blank" rel="noopener noreferrer" className="header-social-box">
                                    <i className="fab fa-youtube" style={{ marginRight: 0 }}></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <a href="/privacy-policy" style={{ marginRight: 40 }}>Privacy policy</a>
                        <a href="/terms-and-conditions">Terms & conditions</a>
                    </div>

                    <p style={{ marginTop: 30 }}>© All rights reserved for ARTY 2021</p>
                </div>
            </footer>

            <style jsx>{`
                footer {
                    background-color: #151515;
                    padding: 70px 10px;
                }

                .social-media i {
                    color: #fff;
                    font-size: 20px;
                    margin-right: 32px;
                }

                p, a {
                    color: #fff;
                }

                a {
                    text-decoration: underline;
                }
            `}</style>
        </>
    )
}

export default Footer
