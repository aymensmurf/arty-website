import React from 'react'
import Accordion from '../widgets/Accordion'

const FAQ = () => {
    return (
        <>
            <section>
                <div className="container" style={{ padding: '70px 250px', textAlign: 'center' }}>
                    <h1>Got questions?</h1>
                    <p style={{ marginBottom: 70 }}>There are the most frequently asked questions if you have another thing on mind <a href="#">get in touch</a></p>

                    <Accordion />
                    <Accordion />
                    <Accordion />

                    <h1 style={{ marginTop: 70 }}>Download now</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 14 }}>
                        <img src="/img/app-store.png" alt="App store" style={{ marginRight: 25 }} />
                        <img src="/img/google-play.png" alt="Google play" />
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    background: linear-gradient(27deg, #F05990 0%, #9F6CA7 100%);
                }

                h1 {
                    font-size: 67px;
                    color: #fff;
                }

                a {
                    color: #fff;
                    text-decoration: underline;
                }
            `}</style>
        </>
    )
}

export default FAQ
