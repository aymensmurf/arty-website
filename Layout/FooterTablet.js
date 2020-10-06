import React from 'react'

const FooterTablet = () => {
    return (
        <>
            <footer>
                <img src="/img/logo.svg" alt="Jam" />

                <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <a href="/privacy-policy">Privacy policy</a>
                    <a href="/terms-and-conditions" style={{ marginTop: 25 }}>Terms & conditions</a>
                </div>

                <div className="social-media">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="header-social-box">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="header-social-box">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="header-social-box">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="header-social-box">
                        <i className="fab fa-linkedin" style={{ marginRight: 0 }}></i>
                    </a>
                </div>

                <p style={{ marginTop: 44 }}>© All rights reserved for JAM 2020</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                    <p>Made with </p>
                    <img src="/img/heart.svg" alt="Love" style={{ marginRight: 5, marginLeft: 5 }} />
                    <p>by <a href="https://innovant.studio" target="_blank" rel="noopener noreferrer">InnovAnt.studio</a></p>
                </div>
            </footer>

            <style jsx>{`
                footer {
                    background-color: #0F0F0F;
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
