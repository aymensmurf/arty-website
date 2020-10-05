import React from 'react'

const Home = () => {
    return (
        <>
            <section style={{ minHeight: '100vh', background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)' }}>
                <div className="container">
                    <h1>Connect, meet and play music with JAM.</h1>

                    <div className="inner-container">
                        <div className="grid-5" style={{ marginTop: 40 }}>
                            <div>
                                <img className="instrument" src="/img/drum.png" alt="Drum" />
                                <img
                                    className="icon"
                                    src="/img/icons/drum-w.png"
                                    alt="Drum icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('drum-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/drum-w.png" : e.target.src = "/img/icons/drum-b.png"
                                    }} />
                            </div>
                            <div>
                                <img className="instrument" src="/img/guitar.png" alt="Guitar" />
                                <img
                                    className="icon"
                                    src="/img/icons/guitar-w.png"
                                    alt="Guitar icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('guitar-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/guitar-w.png" : e.target.src = "/img/icons/guitar-b.png"
                                    }} />
                            </div>
                            <div>
                                <img className="instrument" src="/img/vocal.png" alt="Vocal" />
                                <img
                                    className="icon"
                                    src="/img/icons/vocal-w.png"
                                    alt="Vocal icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('vocal-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/vocal-w.png" : e.target.src = "/img/icons/vocal-b.png"
                                    }} />
                            </div>
                            <div>
                                <img className="instrument" src="/img/piano.png" alt="Keyboard" />
                                <img
                                    className="icon"
                                    src="/img/icons/keyboard-w.png"
                                    alt="Keyboard icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('keyboard-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/keyboard-w.png" : e.target.src = "/img/icons/keyboard-b.png"
                                    }} />
                            </div>
                            <div>
                                <img className="instrument" src="/img/bass.png" alt="Bass" />
                                <img
                                    className="icon"
                                    src="/img/icons/bass-w.png"
                                    alt="Bass icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('bass-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/bass-w.png" : e.target.src = "/img/icons/bass-b.png"
                                    }} />
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

                <div>
                    <audio id='drum-audio' autoPlay loop muted> <source src='/audio/drum.mp3' type='audio/mp3' /> </audio>
                    <audio id='guitar-audio' autoPlay loop muted> <source src='/audio/guitar.mp3' type='audio/mp3' /> </audio>
                    <audio id='vocal-audio' autoPlay loop muted> <source src='/audio/vocal.mp3' type='audio/mp3' /> </audio>
                    <audio id='keyboard-audio' autoPlay loop muted> <source src='/audio/keyboard.mp3' type='audio/mp3' /> </audio>
                    <audio id='bass-audio' autoPlay loop muted> <source src='/audio/bass.mp3' type='audio/mp3' /> </audio>
                </div>
            </section>

            <style jsx>{`
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
