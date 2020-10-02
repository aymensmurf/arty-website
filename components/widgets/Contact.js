import React from 'react'

const Contact = ({ show, handleClose }) => {
    return (
        <>

            <div className="contact-container">
                <div className="contact-overlay" />
                <div className="contact-inner-block">
                    <div style={{ position: 'relative', zIndex: 102, padding: '50px 140px' }}>
                        <div onClick={() => handleClose()} style={{ cursor: 'pointer', pointerEvents: 'all' }}>
                            <p>Close</p>
                        </div>
                        <div style={{ marginTop: 175, marginBottom: 175, textAlign: "center" }}>
                            <p style={{ fontSize: 25 }}>Share your experience with us</p>
                            <h1>Contact@jam.net</h1>
                        </div>
                    </div>

                    <div>
                        <iframe src="https://giphy.com/embed/xT9IgASB1eJiKuZ7fa" width="320" height="240" frameBorder="0" className="giphy-embed" allowFullScreen style={{ position: 'absolute', top: '4%', left: '22%' }}></iframe>
                        <iframe src="https://giphy.com/embed/EixHusPDkJT5S" width="280" height="180" frameBorder="0" className="giphy-embed" allowFullScreen style={{ position: 'absolute', top: '66%', left: '74%' }}></iframe>
                    </div>

                    <div className="stars">
                        <img src="/img/star.svg" alt="Star" style={{ position: 'absolute', top: '15%', left: '6%', width: 66, height: 66 }} />
                        <img src="/img/star.svg" alt="Star" style={{ position: 'absolute', top: '55%', left: '16%', width: 31, height: 31 }} />
                        <img src="/img/star.svg" alt="Star" style={{ position: 'absolute', top: '65%', left: '30%', width: 107, height: 107 }} />
                        <img src="/img/star.svg" alt="Star" style={{ position: 'absolute', top: '23%', left: '80%', width: 51, height: 51 }} />
                        <img src="/img/star.svg" alt="Star" style={{ position: 'absolute', top: '9%', left: '92%', width: 42, height: 42 }} />
                        <img src="/img/star.svg" alt="Star" style={{ position: 'absolute', top: '60%', left: '88%', width: 68, height: 68 }} />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-container {
                    pointer-events: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 100;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;
                    align-content: center;
                }

                .contact-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #d0d8e8;
                    visibility: inherit;
                    opacity: ${show ? '1' : '0'};
                    transition: opacity 300ms ease;
                }

                .contact-inner-block {
                    position: relative;
                    width: 80%;
                    height: ${show ? '620px' : '0px'};
                    margin: 0 auto;
                    background-color: #151515;
                    overflow: hidden;
                    transition: height 600ms ease;
                }

                p {
                    color: #fff;
                }

                h1 {
                    font-size: 67px;
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default Contact
