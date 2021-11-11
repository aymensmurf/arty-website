import { useEffect } from "react"

const Download = () => {
    return (
        <>
            <section>
                <div className="phones-section">
                    <div className="phones-container">
                        <img src="/img/img-download-1.svg" alt="Arty - app - welcome screen" id="img-download-1" />
                        <img src="/img/img-download-2.svg" alt="Arty - app - home screen" id="img-download-2" />
                    </div>
                </div>

                <div className="download-section">
                    <div className="download-container container">
                        <img src="/img/logo-pink.svg" alt="Arty" className="logo" />
                        <p>Find all sort of Artist in ARTY and get to know, meet them and play music, dance, paint with them and much more.</p>

                        <div className="icons-container">
                            <img src="/img/app-store-white.svg" alt="App store" />
                            <img src="/img/google-play-white.svg" alt="Google play" />
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .phones-section {
                    background: url('/img/bg-lava.png');
                    min-height: 800px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    background-attachment: fixed;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    position: relative;
                    overflow: hidden;
                }

                .download-section {
                    background-color: #fff;
                    padding-top: 35px;
                    padding-bottom: 100px;
                    position: relative;
                    z-index: 2;
                }

                .download-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 0px 400px;
                }

                .logo {
                    width: 163px;
                    height: 74px;
                    object-fit: contain;
                }

                p {
                    font-weight: 300;
                    font-size: 22px;
                    line-height: 34px;
                    margin-top: 15px;
                }

                .icons-container {
                    display: flex;
                    gap: 42px;
                    flex-wrap: wrap;
                    margin-top: 40px;
                }

                .icons-container img {
                    width: 280px;
                    height: 84px;
                    object-fit: contain;
                    cursor: pointer;
                }

                .phones-container {
                    display: flex;
                    justify-content: center;
                    gap: 80px;
                    width: 100%;
                    position: absolute;
                    bottom: 0px;
                    z-index: 1;
                }

                .phones-container img {
                    width: 451px;
                    height: 871px;
                    object-fit: contain;
                }

                #img-download-1 {
                    position: absolute;
                    bottom: -200px;
                    right: calc(50%)
                }
                #img-download-2 {
                    position: absolute;
                    bottom: -300px;
                    left: calc(50%)
                }
            `}</style>
        </>
    )
}

export default Download;