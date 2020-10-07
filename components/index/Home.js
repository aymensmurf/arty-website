import React, { useState } from 'react'
import { Bass, Drum, Guitar, Keyboard, Vocal } from '../widgets/Instrments.js'

const Home = () => {
    const [isDrum, setIsDrum] = useState(false);
    const [isGuitar, setIsGuitar] = useState(false);
    const [isVocal, setIsVocal] = useState(false);
    const [isKeyboard, setIsKeyboard] = useState(false);
    const [isBass, setIsBass] = useState(false);

    return (
        <>
            <a name="home"></a>
            <section style={{ minHeight: '100vh', background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)' }}>
                <div className="home-overlay"></div>
                <div className="container">
                    <h1>Connect, meet and play music with JAM.</h1>

                    <div className="inner-container">
                        <div className="grid-5" style={{ marginTop: 40 }}>
                            <div className="inst-container" onClick={() => setIsDrum(!isDrum)}>
                                <img className="instrument" src="/img/drum.png" alt="Drum" />
                                <img className="icon" src={`/img/icons/drum-${isDrum ? 'b' : 'w'}.png`} alt="Drum icon" />
                                <audio autoPlay loop muted={!isDrum}> <source src='/audio/drum.mp3' type='audio/mp3' /> </audio>
                            </div>

                            <div className="inst-container" onClick={() => setIsGuitar(!isGuitar)}>
                                <img className="instrument" src="/img/guitar.png" alt="Guitar" />
                                <img className="icon" src={`/img/icons/guitar-${isGuitar ? 'b' : 'w'}.png`} alt="Guitar icon" />
                                <audio autoPlay loop muted={!isGuitar}> <source src='/audio/guitar.mp3' type='audio/mp3' /> </audio>
                            </div>

                            <div className="inst-container" onClick={() => setIsVocal(!isVocal)}>
                                <img className="instrument" src="/img/vocal.png" alt="Vocal" />
                                <img className="icon" src={`/img/icons/vocal-${isVocal ? 'b' : 'w'}.png`} alt="Vocal icon" />
                                <audio autoPlay loop muted={!isVocal}> <source src='/audio/vocal.mp3' type='audio/mp3' /> </audio>
                            </div>

                            <div className="inst-container" onClick={() => setIsKeyboard(!isKeyboard)}>
                                <img className="instrument" src="/img/keyboard.png" alt="Keyboard" />
                                <img className="icon" src={`/img/icons/keyboard-${isKeyboard ? 'b' : 'w'}.png`} alt="Keyboard icon" />
                                <audio autoPlay loop muted={!isKeyboard}> <source src='/audio/keyboard.mp3' type='audio/mp3' /> </audio>
                            </div>

                            <div className="inst-container" onClick={() => setIsBass(!isBass)}>
                                <img className="instrument" src="/img/bass.png" alt="Bass" />
                                <img className="icon" src={`/img/icons/bass-${isBass ? 'b' : 'w'}.png`} alt="Bass icon" />
                                <audio autoPlay loop muted={!isBass}> <source src='/audio/bass.mp3' type='audio/mp3' /> </audio>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: -80 }}>
                            <img id="arrow-l" src="/img/arrow-left.svg" alt="Arrow left" />
                            <img id="arrow-r" src="/img/arrow-right.svg" alt="Arrow right" />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                            <p>Filter by instrument and find people <br /> sharing with you your passion. <br /><br /> Click on an instrument to start playing.</p>
                            <p style={{ textAlign: 'right' }}>Find all sort of musicians in JAM and <br /> get to know, meet them and play <br /> music with them too.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .home-overlay{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100vw;
                    background-color: white;
                    z-index: 100;
                    transition: all 2000ms ease 5s;
                    pointer-events: none;
                }

                .home-overlay {
                    background-color: transparent;
                }

                .container {
                    padding-top: 200px;
                    padding-bottom: 200px;
                }

                h1 {
                    color: #fff;
                    font-size: 67px;
                    line-height: 80px;
                    text-align: center;
                    margin: 0px 200px;
                }

                p {
                    color: #fff;
                }

                .inner-container {
                    margin: 0px 100px;
                }

                .grid-5 {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    justify-content: center;
                    align-items: center;
                    align-content: center
                }

                .grid-5 > div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .instrument, .icon {
                    cursor: pointer;
                }

                .icon {
                    width: 87px;
                    height: 87px;
                    object-fit: contain;
                    margin-top: 10px;
                }

                @media only screen and (max-width: 1550px){
                    .inner-container {
                        margin: 0px 60px;
                    }
                }

                @media only screen and (max-width: 1439px){
                    .container {
                        padding-top: 170px;
                        padding-bottom: 100px;
                    }

                    h1 {
                        font-size: 46px;
                    }

                    .instrument {
                        width: 200px;
                        height: 196px;
                        object-fit: contain;
                    }

                    .icon {
                        width: 68px;
                        height: 68px;
                    }

                    .inner-container {
                        margin: 0px 20px;
                    }

                    #arrow-l {
                        width: 60px;
                        height: 70px;
                        object-fit: contain;
                    }

                    #arrow-r {
                        width: 76px;
                        height: 105px;
                        object-fit: contain;
                    }
                }
            `}</style>
        </>
    )
}

export default Home
