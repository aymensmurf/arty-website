import { useState } from 'react'

const Init = ({ counter }) => {
    const [cookies, setCookies] = useState(true);

    return (
        <>
            <section style={{ backgroundColor: "#151515" }}>
                <div className="container">
                    <img src="/img/logo.svg" alt="Jam" style={{ width: 180, height: 57 }} />

                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <h1>Where everything is music.</h1>
                        <div className='w' style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: `${counter * 15}%`, background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)' }} />
                        {
                            counter > 10 ?
                                <div className='w' style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: `${(counter - 10) * 5}%`, background: '#151515' }} />
                                : null
                        }
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

                    {
                        cookies ?
                            <div className="cookies">
                                <div style={{ display: 'flex' }}>
                                    <img src="/img/cookies.png" alt="Cookies" style={{ marginRight: 10 }} />
                                    <h4>Cookies.</h4>
                                </div>

                                <p>This site uses cookies to improve your user experience and allows you to control what you want to activate.</p>

                                <button onClick={() => setCookies(false)}> Accept everything  </button>
                            </div>
                            : null
                    }

                </div>
                {
                    counter > 15 ?
                        <div className="w" style={{ position: 'absolute', bottom: 0, right: 0, background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)', width: `100vw`, height: `${(counter - 15) * 10}vh` }}></div>
                        : null
                }
            </section>


            <style jsx>{`
                .container{
                    background-color: #151515;
                    height: 100vh;
                    width: 100%;
                    padding-top: 40px;
                    padding-bottom: 40px;
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

                h4 {
                    font-family: Republica;
                    font-size: 39px;
                    color: #fff;
                }

                h5 {
                    color: #fff;
                    font-size: 27px;
                }

                p {
                    color: #fff;
                    margin-top: 10px;
                }

                button {
                    background-color: #151515;
                    color: #FFFFFF;
                    font-size: 25px;
                    padding: 7px;
                    width: 100%;
                    border: none;
                    margin-top: 15px;
                    cursor: pointer;
                }

                button:focus {
                    outline: none;
                }

                .social-media i {
                    color: #fff;
                    font-size: 20px;
                    margin-right: 32px;
                }

                .cookies {
                    background: rgb(237,30,70);
                    background: linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%);
                    width: 507px;
                    // height: 374px;
                    position: absolute;
                    bottom: 40px;
                    right: 0px;
                    padding: 50px;
                }
            `}</style>
        </>
    )
}

export default Init
