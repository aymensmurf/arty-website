import React, { useEffect, useState } from 'react'
import { WORDS } from '../../utils/consts'

const InitTablet = ({ pressed, setPressedTrue }) => {
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
            <section className="init-tablet" style={{ backgroundColor: "#151515" }} onClick={setPressedTrue}>
                <img className="logo" src="/img/logo.svg" alt="Jam" />

                <div style={{ position: 'relative', marginTop: 20, overflow: 'hidden' }}>
                    <h1 style={{ backgroundColor: '#151515', position: 'relative', zIndex: 2 }}>Where everything is</h1>
                    <h1 className="word-container" style={{ zIndex: 1 }}>{WORDS[index]}</h1>
                </div>

                <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <img src="/img/press-icon.svg" alt="Click to start icon" />
                    <p style={{ marginTop: 8 }}>Click to start.</p>
                </div>

                <p style={{ position: 'relative', zIndex: 1, alignSelf: 'flex-end', textAlign: 'right' }}>Put your <br /> headphones on <br />for a better<br /> experience.</p>

                <div style={{ position: 'absolute', bottom: 30, right: -100, zIndex: 0 }}>
                    <img src="/img/headphones-icon.svg" alt="Headphones icon" />
                </div>
            </section>

            <style jsx>{`
                section {
                    min-height: 100vh;
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    padding: 30px;
                }

                .init-tablet .logo {
                    width: 142px;
                    height: 45px;
                    object-fit: contain;
                }

                h1 {
                    -webkit-text-stroke-color: #FFF;
                    -webkit-text-stroke-width: 1px;
                    color: transparent;
                    font-family: Republica;
                    font-size: 80px;
                    line-height: 100px;
                    text-align: center;
                }

                p {
                    color: #fff;
                }

                @media only screen and (max-width: 767px){
                    h1 {
                        font-size: 52px;
                        line-height: 62px;
                    }
                }

                @media only screen and (max-width: 424px){
                    h1 {
                        font-size: 36px;
                        line-height: 48px;
                    }
                }
            `}</style>
        </>
    )
}

export default InitTablet
