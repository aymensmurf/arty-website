import { useState } from 'react'
import Cookies from '../widgets/Cookies';

const Init = ({ counter }) => {
    return (
        <>
            <section style={{ backgroundColor: "#151515" }}>
                <div className="container">
                    <img src="/img/logo.svg" alt="Jam" style={{ width: 180, height: 57 }} />

                    <div style={{ position: 'relative' }}>
                        <h1>Where everything is music.</h1>
                        {/* <div className='w' style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: `${counter * 15}%`, background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)' }} /> */}
                        {/* {
                            counter > 10 ?
                                <div className='w' style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: `${(counter - 10) * 4}%`, background: '#151515' }} />
                                : null
                        } */}
                    </div>


                    <div style={{ textAlign: 'center' }}>
                        <img src="/img/keyboard.svg" alt="Keyboard" style={{ width: 56, height: 51 }} />
                        <h5>Hold space to start.</h5>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div style={{ width: '33.33%', display: 'flex', justifyContent: 'flex-start' }}>
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
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div style={{ width: '33.33%', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ padding: 24, border: '1px solid #fff', borderRadius: '50%', width: 210, height: 210, textAlign: 'center', overflow: 'hidden' }}>
                                <img src="/img/audio.svg" alt="Audio" style={{ width: 47, height: 47 }} />
                                <p>Put your headphones on for a better experience.</p>
                            </div>
                        </div>

                        <div style={{ width: '33.33%', display: 'flex', justifyContent: 'flex-end' }}>
                            <p><a href="#" style={{ textDecoration: 'underline' }}>Privacy policy</a></p>
                        </div>
                    </div>

                </div>

                <Cookies />
                {
                    <div className="w" style={{ position: 'absolute', bottom: 0, right: 0, background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)', width: `100vw`, height: `${(counter) * 6.2}vh` }}></div>
                }
            </section>


            <style jsx>{`
                section {
                    min-height: 100vh;
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .container{
                    height: 100%;
                    padding: 40px 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                }

                h1 {
                    -webkit-text-stroke-color: #FFF;
                    -webkit-text-stroke-width: 1px;
                    color: transparent;
                    font-family: Republica;
                    font-size: 121px;
                    line-height: 147px;
                    text-align: center;
                }

                h5 {
                    color: #fff;
                    font-size: 27px;
                }

                p {
                    color: #fff;
                    margin-top: 10px;
                }

                .social-media i {
                    color: #fff;
                    font-size: 20px;
                    margin-right: 32px;
                }
            `}</style>
        </>
    )
}

export default Init
