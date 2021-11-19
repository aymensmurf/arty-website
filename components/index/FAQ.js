import React, { useState, useEffect } from 'react'
import { WORDS } from '../../utils/consts';
import Accordion from '../widgets/Accordion'

const FAQ = ({ openContact, setCommingSoon }) => {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (wordIndex > WORDS.length - 2) {
                setWordIndex(0)
            } else {
                setWordIndex(wordIndex + 1);
            }
        }, 2000);

        return () => { clearInterval(interval); };
    }, [wordIndex]);

    return (
        <>
            <a name="faq"></a>
            <section>
                <div className="container">
                    <div className="faq-container">
                        <h1>Got questions?</h1>
                        <p className="description">These are the most frequently asked questions, if you have another thing on mind <a onClick={openContact}>get in touch</a></p>

                        <div style={{ marginTop: 70 }}>
                            <Accordion
                                q="What is ARTY?"
                                a={
                                    <p>ARTY is a social network for artists, art enthusiast, and amateurs, designed to enhance connectivity between the creative arts communities and offers fast reliable online solutions to organize events and workshops.</p>
                                }
                            />
                            <Accordion
                                q="Where did ARTY came from?"
                                a={
                                    <p>ARTY is a product ideated, designed, and developed by Innovant, a Startup that combines both worlds of arts, design and the top notch software development.</p>
                                }
                            />
                            <Accordion
                                q="How can I join ARTY?"
                                a={
                                    <p>Contact us and we will send you a TestFlight link.</p>
                                }
                            />
                        </div>
                        <a name="download"></a>
                        <h1 style={{ marginTop: 70 }}>Download now</h1>
                        <div id="faq-stores" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 25 }}>
                            <img src="/img/google-play-white.svg" alt="Google play" onClick={setCommingSoon} style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} />
                            <img src="/img/app-store-white.svg" alt="App store" onClick={setCommingSoon} style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} />
                        </div>
                    </div>

                    <h1 className="slogan" style={{ overflow: 'hidden', marginTop: 180 }}>
                        Connect, aspire and inspire to do <br />
                        <span className="word-container-bottom" style={{ zIndex: 1 }}>{WORDS[wordIndex]}</span>&nbsp;
                        with Arty!
                    </h1>

                    <img src="/img/singers.svg" alt="Arty Land" className="singers" />
                </div>

            </section>

            <style jsx>{`
                section {
                    background: linear-gradient(#fff 0%, #fff 20%, #f3637f 43%, #ed1e46 60%, #f68955 100%);
                }

                .container {
                    padding: 0px 50px;
                }

                .faq-container {
                    background: url('/img/bg-faq.png');
                    background-attachment: fixed;
                    background-size: cover;
                    background-repeat: no-repeat;
                    box-shadow: inset  0px 2000px 0px 0 rgb(0, 0, 0, .2);
                    padding: 70px 250px;
                    border-radius: 25px;
                    text-align: center;
                }

                h1, p {
                    color: #fff;
                }

                h1 {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 67px;
                }

                h1.slogan {
                    font-family: "Republica";
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 60px;
                    text-align: center;
                    color: #fff;
                }

                a {
                    color: #F68955;                    
                    text-decoration: underline;
                    cursor: pointer;
                }

                .description {
                    padding: 0px 200px;
                }

                #faq-stores img{
                    width: 280px;
                    height: 84px;
                    object-fit: contain;
                    cursor: pointer;
                }

                .singers {
                    width: 100%;
                    object-fit: contain;
                    margin-top: 50px;
                    margin-bottom: -4px;
                }

                @media only screen and (max-width: 1480px){
                    .description {
                        padding: 0px 100px;
                    }
                }

                @media only screen and (max-width: 1283px){
                    .description {
                        padding: 0px 30px;
                    }
                }

                @media only screen and (max-width: 1145px){
                    .faq-container {
                        padding: 70px 100px;
                    }
                }

                @media only screen and (max-width: 829px){
                    h1.slogan {
                        font-size: 40px;
                        line-height: 50px;
                    }
                }

                @media only screen and (max-width: 730px){
                    h1 {
                        font-size: 50px;
                        line-height: 56px;
                        margin-bottom: 10px;
                    }
                }

                @media only screen and (max-width: 695px){
                    .faq-container {
                        padding: 70px 30px;
                    }

                    h1.slogan {
                        font-size: 30px;
                        line-height: 40px;
                    }
                }

                @media only screen and (max-width: 569px){
                    h1.slogan {
                        font-size: 28px;
                        line-height: 35px;
                    }
                }

                
                @media only screen and (max-width: 457px){
                    .container {
                        padding: 0px 10px;
                    }

                    .faq-container {
                        padding: 70px 10px;
                    }
                }
            `}</style>
        </>
    )
}

export default FAQ
