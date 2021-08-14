import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import { WORDS } from '../../utils/consts.js';

import { Bass, Drum, Guitar, Keyboard, Vocal } from '../widgets/Instrments.js'

const HomeTablet = ({ setCommingSoon }) => {
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


    const [isMusic, setIsMusic] = useState(false);
    const [isPaint, setIsPaint] = useState(false);
    const [isPhoto, setIsPhoto] = useState(false);
    const [isDance, setIsDance] = useState(false);
    const [isTheatre, setIsTheatre] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index > WORDS.length - 2) {
                setIndex(0)
            } else {
                setIndex(index + 1);
            }
        }, 2000);

        return () => { clearInterval(interval); };
    }, [index]);

    return (
        <>
            <a name="home-t"></a>
            <section style={{ minHeight: '100vh', background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)' }}>
                <div style={{ paddingTop: 170, paddingBottom: 100 }}>
                    <div style={{ padding: '0px 30px' }}>
                        <h1 style={{ overflow: 'hidden' }}>Connect, aspire and inspire to do <span className="word-container-bottom" style={{ zIndex: 1, color: '#000' }}>{WORDS[index]}</span> with Arty!</h1>
                    </div>

                    <div style={{ marginTop: 60 }}>
                        <Slider {...settings}>
                            <div className="inst-container" onClick={() => setIsMusic(!isMusic)}>
                                <img className="instrument" src="/img/music.png" alt="Music" />
                                <img className={`icon ${isMusic ? 'active' : ''}`} src={`/img/icons/music-${isMusic ? 'b' : 'w'}.svg`} alt="Music icon" />
                                {/* <audio autoPlay loop muted={!isMusic}> <source src='/audio/drum.mp3' type='audio/mp3' /> </audio> */}
                            </div>

                            <div className="inst-container" onClick={() => setIsPaint(!isPaint)}>
                                <img className="instrument" src="/img/paint.png" alt="Paint" />
                                <img className={`icon ${isPaint ? 'active' : ''}`} src={`/img/icons/paint-${isPaint ? 'b' : 'w'}.svg`} alt="Paint icon" />
                                {/* <audio autoPlay loop muted={!isPaint}> <source src='/audio/guitar.mp3' type='audio/mp3' /> </audio> */}
                            </div>

                            <div className="inst-container" onClick={() => setIsPhoto(!isPhoto)}>
                                <img className="instrument" src="/img/photo.png" alt="Photo" />
                                <img className={`icon ${isPhoto ? 'active' : ''}`} src={`/img/icons/photo-${isPhoto ? 'b' : 'w'}.svg`} alt="Photo icon" />
                                {/* <audio autoPlay loop muted={!isPhoto}> <source src='/audio/vocal.mp3' type='audio/mp3' /> </audio> */}
                            </div>

                            <div className="inst-container" onClick={() => setIsDance(!isDance)}>
                                <img className="instrument" src="/img/dance.png" alt="Dance" />
                                <img className={`icon ${isDance ? 'active' : ''}`} src={`/img/icons/dance-${isDance ? 'b' : 'w'}.svg`} alt="Dance icon" />
                                {/* <audio autoPlay loop muted={!isDance}> <source src='/audio/keyboard.mp3' type='audio/mp3' /> </audio> */}
                            </div>

                            <div className="inst-container" onClick={() => setIsTheatre(!isTheatre)}>
                                <img className="instrument" src="/img/theatre.png" alt="Theatre" />
                                <img className={`icon ${isTheatre ? 'active' : ''}`} src={`/img/icons/theatre-${isTheatre ? 'b' : 'w'}.svg`} alt="Theatre icon" />
                                {/* <audio autoPlay loop muted={!isTheatre}> <source src='/audio/bass.mp3' type='audio/mp3' /> </audio> */}
                            </div>
                        </Slider>
                    </div>

                    <div style={{ padding: '0px 30px', marginTop: 60 }}>
                        <p>Play, sing, draw, dance and perform by navigating our workshopsin ARTY.</p>

                        <div id="stores" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 25 }}>
                            <a>
                                <img src="/img/google-play.png" alt="Google play" style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} onClick={setCommingSoon} />
                            </a>
                            <a>
                                <img src="/img/app-store.png" alt="App store" style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} onClick={setCommingSoon} />
                            </a>
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
                    width: 264px;
                    height: 264px;
                    object-fit: contain;
                    transition: all 600ms ease;
                }

                .instrument:hover {
                    transform: scale(1.02);
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
