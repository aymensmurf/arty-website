import React, { useState, useEffect } from 'react'
import { WORDS } from '../../utils/consts';

const Home = () => {
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
            <a name="home"></a>
            <section style={{ minHeight: '100vh', background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)' }}>
                <div className="home-overlay"></div>
                <div className="container">
                    <h1 style={{ overflow: 'hidden' }}>Connect, aspire and inspire to do <span className="word-container-bottom" style={{ zIndex: 1, color: '#000' }}>{WORDS[index]}</span> with Arty!</h1>

                    <div className="inner-container">
                        <div className="grid-5" style={{ marginTop: 40 }}>
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
                                <img className="instrument" src="/img/photo.png" alt="Photography" />
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
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: -80 }}>
                            <img id="arrow-l" src="/img/arrow-left.svg" alt="Arrow left" />
                            <img id="arrow-r" src="/img/arrow-right.svg" alt="Arrow right" />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                            <p>Filter by art themes and instrument and find people <br />who share your passion. <br /><br /> Click on an art theme to start playing.</p>
                            <p style={{ textAlign: 'right' }}>Find all sort of artists in ARTY and <br /> get to know, meet and<br />perform with them.</p>
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
                    width: 87px;
                    height: 87px;
                    object-fit: contain;
                    cursor: pointer;
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
