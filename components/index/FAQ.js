import React from 'react'
import Accordion from '../widgets/Accordion'

const FAQ = ({ openContact, setCommingSoon }) => {
    return (
        <>
            <a name="faq"></a>
            <section>
                <div className="container">
                    <h1>Got questions?</h1>
                    <p>There are the most frequently asked questions if you have another thing on mind <a onClick={openContact}>get in touch</a></p>

                    <div style={{ marginTop: 70 }}>
                        <Accordion
                            q="What is Jam?"
                            a={
                                <p>
                                    Jam is a social network for musicians, music enthusiast, and individuals who are interested in music. Jam provides a centered platform to enhance connectivity between the musical community and fast reliable online way to organize jam sessions and musical workshops.
                                </p>
                            }
                        />
                        <Accordion
                            q="Where did Jam came from?"
                            a={
                                <p>
                                    Jam is a product ideated, designed, and developed by Innovant, a Startup that combines both worlds of music, design, Art, and the top notch software development.
                                </p>
                            }
                        />
                        <Accordion
                            q="How can I join Jam?"
                            a={
                                <>
                                    <p>You can join us by downloading Jam app through <a href="https://play.google.com/store/apps/details?id=com.innovant.jam" target="_blank" rel="noopener noreferrer"> Google Play</a>.</p>
                                    <p style={{marginTop: 8}}>For the iPhone users out there, contact us and we will send you a TestFlight link.</p>
                                </>
                            }
                        />
                    </div>

                    <a name="download"></a>
                    <h1 style={{ marginTop: 70 }}>Download now</h1>
                    <div id="faq-stores" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 25 }}>
                        <a>
                            <img src="/img/app-store.png" alt="App store" onClick={setCommingSoon} style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.innovant.jam" target="_blank" rel="noopener noreferrer">
                            <img src="/img/google-play.png" alt="Google play" style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} />
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    background: linear-gradient(27deg, #F05990 0%, #9F6CA7 100%);
                }

                .container {
                    padding: 70px 250px;
                    text-align: center;
                }

                h1 {
                    font-size: 67px;
                    color: #fff;
                }

                a {
                    color: #fff;
                    text-decoration: underline;
                    cursor: pointer;
                }

                #faq-stores img{
                    cursor: pointer;
                }

                @media only screen and (max-width: 1439px){
                    h1 {
                        font-size: 46px;
                    }

                    img {
                        width: 260px;
                        height: 85px;
                        object-fit: contain;
                    }
                }

                @media only screen and (max-width: 1023px){
                    .container {
                        padding: 70px 30px;
                        text-align: center;
                    }
                }

                @media only screen and (max-width: 767px){
                    h1 {
                        font-size: 36px;
                        line-height: 48px;
                    }

                    #faq-stores img:nth-child(1){
                        width: 200px;
                        height: 66px;
                        object-fit: contain;
                    }

                    #faq-stores img:nth-child(2){
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

export default FAQ
