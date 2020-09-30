import React from 'react'

const Home = () => {
    return (
        <>
            <div style={{ minHeight: '100vh', background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)' }}>
                <div className="container" style={{ paddingTop: 200, paddingBottom: 200 }}>
                    <h1>Connect, meet and play music with JAM.</h1>

                    <div style={{ margin: '0px 100px' }}>
                        <div className="grid-5" style={{ marginTop: 40 }}>
                            <img src="/img/drum.png" alt="Drum" />
                            <img src="/img/guitar.png" alt="Guitar" />
                            <img src="/img/vocal.png" alt="Vocal" />
                            <img src="/img/piano.png" alt="Paino" />
                            <img src="/img/bass.png" alt="bass" />
                        </div>

                        <div className="grid-5" style={{ marginTop: 10 }}>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/img/drum-icon.png" alt="Drum icon" />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/img/guitar-icon.png" alt="Guitar icon" />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/img/vocal-icon.png" alt="Vocal icon" />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/img/piano-icon.png" alt="Paino icon" />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/img/bass-icon.png" alt="bass icon" />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: -90 }}>
                            <img src="/img/arrow-left.svg" alt="Arrow left" />
                            <img src="/img/arrow-right.svg" alt="Arrow right" />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                            <p>Filter by instrument and find people <br/> sharing with you your passion. <br /><br/> Click on an instrument to start playing.</p>
                            <p>Find all sort of musicians in JAM and <br /> get to know, meet them and play <br /> music with them too.</p>
                        </div>
                    </div>
                </div>
            </div>

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
            `}</style>
        </>
    )
}

export default Home
