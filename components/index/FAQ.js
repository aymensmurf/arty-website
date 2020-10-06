import React from 'react'
import Accordion from '../widgets/Accordion'

const FAQ = ({ openContact }) => {
    return (
        <>
            <section>
                <div className="container">
                    <h1>Got questions?</h1>
                    <p>There are the most frequently asked questions if you have another thing on mind <a onClick={openContact}>get in touch</a></p>

                    <div style={{ marginTop: 70 }}>
                        <Accordion />
                        <Accordion />
                        <Accordion />
                    </div>

                    <h1 style={{ marginTop: 70 }}>Download now</h1>
                    <div id="stores" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 25 }}>
                        <img src="/img/app-store.png" alt="App store" style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} />
                        <img src="/img/google-play.png" alt="Google play" style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }} />
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

export default FAQ
