import React from 'react'

const Home = () => {
    return (
        <>
            <section style={{ minHeight: '100vh', background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)' }}>
                <div className="container" style={{ paddingTop: 200, paddingBottom: 200 }}>
                    <h1>Connect, meet and play music with JAM.</h1>

                    <div style={{ margin: '0px 100px' }}>
                        <div className="grid-5" style={{ marginTop: 40 }}>
                            <img src="/img/drum.png" alt="Drum" />
                            <img src="/img/guitar.png" alt="Guitar" />
                            <img src="/img/vocal.png" alt="Vocal" />
                            <img src="/img/piano.png" alt="Keyboard" />
                            <img src="/img/bass.png" alt="Bass" />
                        </div>

                        <div className="grid-5 icons" style={{ marginTop: 10 }}>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="/img/icons/drum-w.png"
                                    alt="Drum icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('drum-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/drum-w.png" : e.target.src = "/img/icons/drum-b.png"
                                    }} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="/img/icons/guitar-w.png"
                                    alt="Guitar icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('guitar-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/guitar-w.png" : e.target.src = "/img/icons/guitar-b.png"
                                    }} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="/img/icons/vocal-w.png"
                                    alt="Vocal icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('vocal-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/vocal-w.png" : e.target.src = "/img/icons/vocal-b.png"
                                    }} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="/img/icons/keyboard-w.png"
                                    alt="Keyboard icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('keyboard-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/keyboard-w.png" : e.target.src = "/img/icons/keyboard-b.png"
                                    }} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="/img/icons/bass-w.png"
                                    alt="Bass icon"
                                    onClick={(e) => {
                                        const audioElm = document.getElementById('bass-audio')
                                        audioElm.muted = !audioElm.muted;
                                        (audioElm.muted) ? e.target.src = "/img/icons/bass-w.png" : e.target.src = "/img/icons/bass-b.png"
                                    }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: -90 }}>
                            <img src="/img/arrow-left.svg" alt="Arrow left" />
                            <img src="/img/arrow-right.svg" alt="Arrow right" />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                            <p>Filter by instrument and find people <br /> sharing with you your passion. <br /><br /> Click on an instrument to start playing.</p>
                            <p>Find all sort of musicians in JAM and <br /> get to know, meet them and play <br /> music with them too.</p>
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

                .grid-5 {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    justify-content: center;
                    align-items: center;
                    align-content: center
                }

                .icons img {
                    width: 87px;
                    height: 87px;
                    object-fit: contain;
                }
            `}</style>
        </>
    )
}

export default Home
