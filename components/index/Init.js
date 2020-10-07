import { useEffect, useState } from 'react'
import Cookies from '../widgets/Cookies';

const Init = ({ pressed, setPressedTrue }) => {
    useEffect(() => {
        handleCick()
        ballFollowMouse()
    }, [])


    function handleCick() {
        const ball = document.querySelector('.ball');
        const longPress = false;

        ball
            .addEventListener('mousedown', (e) => {
                const whilePressing = setTimeout(function () {
                    setPressedTrue()
                }, 2000);

                ball.addEventListener('mouseup', () => {
                    clearTimeout(whilePressing)
                })
            });
    }

    function ballFollowMouse() {
        const init = document.querySelector('.init');
        const ball = document.querySelector('.ball');

        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        let speed = 0.2;

        function animate() {
            let distX = mouseX - ballX;
            let distY = mouseY - ballY;

            ballX = ballX + (distX * speed);
            ballY = ballY + (distY * speed);

            ball.style.left = ballX + 'px';
            ball.style.top = ballY + 'px';

            requestAnimationFrame(animate);
        }
        animate();

        init.addEventListener('mousemove', function (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        })
    }

    return (
        <>
            <section className="init" style={{ backgroundColor: "#151515" }}>
                <div className="container">
                    <img src="/img/logo.svg" alt="Jam" style={{ width: 180, height: 57 }} />

                    <div style={{ position: 'relative', marginTop: 20 }}>
                        <h1>Where everything is music.</h1>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 20 }}>
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

                <div className="ball">
                    <h4 style={{ position: 'relative', zIndex: 1 }}>Click & Hold</h4>
                    <div className="inner-ball"></div>
                </div>

                {/* <Cookies /> */}
            </section>


            <style jsx>{`
                section {
                    min-height: 100vh;
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    overflow-y: scroll;
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

                .ball {
                    width: 200px;
                    height: 200px;
                    background-color: #fff;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    mix-blend-mode: difference;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: none;
                    text-aling: center;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                .ball .inner-ball {
                    width: 200px;
                    height: 200px;
                    background-color: white;
                    border-radius: 50%;
                    position: absolute;
                    top: 50% - 100px;
                    left: 50% - 100px;
                    transition: all 3000ms ease;
                }

                .ball:active .inner-ball {
                    width: 800px;
                    height: 800px;
                    background-color: white;
                }

                .ball h4 {
                    font-size: 22px;
                }

                @media only screen and (max-width: 1439px){
                    .container {
                        padding: 40px 50px;
                    }
                }
            `}</style>
        </>
    )
}

export default Init
