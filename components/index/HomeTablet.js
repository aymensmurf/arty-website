import React, { useState } from 'react'
import Slider from "react-slick"

import { Bass, Drum, Guitar, Keyboard, Vocal } from '../widgets/Instrments.js'

const HomeTablet = () => {
    const settings = {
        // dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.26,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [isDrum, setIsDrum] = useState(false);
    const [isGuitar, setIsGuitar] = useState(false);
    const [isVocal, setIsVocal] = useState(false);
    const [isKeyboard, setIsKeyboard] = useState(false);
    const [isBass, setIsBass] = useState(false);

    return (
        <>
            <a name="home-t"></a>
            <section style={{ minHeight: '100vh', background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)' }}>
                <div style={{ paddingTop: 170, paddingBottom: 100 }}>
                    <div style={{ padding: '0px 30px' }}>
                        <h1>Connect, meet and play music with JAM.</h1>
                    </div>

                    <div style={{ marginTop: 60 }}>
                        <Slider {...settings}>
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
                        </Slider>
                    </div>

                    <div style={{ padding: '0px 30px', marginTop: 60 }}>
                        <p>Play your music and navigate our website to get more about JAM.</p>

                        <div id="stores" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 25 }}>
                            <img src="/img/app-store.png" alt="App store" style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} />
                            <img src="/img/google-play.png" alt="Google play" style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} />
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                h1 {
                    color: #fff;
                    font-size: 48px;
                    line-height: 56px;
                    text-align: center;
                }

                p {
                    color: #fff;
                    font-size: 20px;
                    line-height: 25px;
                    text-align: center;
                }

                .inst-container {
                    display: flex !important;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    outline: none;
                }
                
                .instrument {
                    width: 270px;
                    height: 265px;
                    object-fit: contain;
                    outline: none;
                }

                .icon {
                    width: 68px;
                    height: 68px;
                    outline: none;
                }

                @media only screen and (max-width: 767px){
                    h1 {
                        font-size: 36px;
                        line-height: 48px;
                    }

                    .instrument {
                        width: 210px;
                        height: 206px;
                    }

                    #stores img:nth-child(1){
                        width: 200px;
                        height: 66px;
                        object-fit: contain;
                    }

                    #stores img:nth-child(2){
                        width: 200px;
                        height: 66px;
                        object-fit: contain;
                    }
                }

                @media only screen and (max-width: 424px){
                    h1 {
                        font-size: 26px;
                        line-height: 38px;
                    }
                }
            `}</style>
        </>
    )
}

export default HomeTablet
