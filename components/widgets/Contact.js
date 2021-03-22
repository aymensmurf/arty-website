import React from 'react'

const Contact = ({ show, commingSoon, handleClose }) => {
    return (
        <>

            <div id="contact-container">
                <div id="contact-overlay" />
                <div id="contact-inner-block">
                    <div id="contact-text-container">
                        <div onClick={() => handleClose()} style={{ cursor: 'pointer', pointerEvents: 'all', outline: 'none' }}>
                            <p>Close</p>
                        </div>
                        <div id="contact-text">
                            <p style={{ fontSize: 25 }}>{commingSoon ? 'A beta version is here' : 'Share your experience with us'}</p>
                            {commingSoon && <p style={{ fontSize: 25 }}>Contact us and we will send you a TestFlight link</p>}
                            <h1>hi@jammusic.space</h1>
                        </div>
                    </div>

                    <div>
                        <iframe id="gif-1" src={`https://giphy.com/embed/${commingSoon ? 'bAplZhiLAsNnG' : 'xT9IgASB1eJiKuZ7fa'}`} frameBorder="0" className="giphy-embed"></iframe>
                        <iframe id="gif-2" src={`https://giphy.com/embed/${commingSoon ? 'AhjXalGPAfJg4' : 'EixHusPDkJT5S'}`} frameBorder="0" className="giphy-embed"></iframe>
                    </div>

                    <div className="stars">
                        <img src="/img/star.png" alt="Star" />
                        <img src="/img/star.png" alt="Star" />
                        <img src="/img/star.png" alt="Star" />
                        <img src="/img/star.png" alt="Star" />
                        <img src="/img/star.png" alt="Star" />
                        <img src="/img/star.png" alt="Star" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                #contact-container {
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

                #contact-overlay {
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

                #contact-inner-block {
                    position: relative;
                    width: 80%;
                    height: ${show ? '620px' : '0px'};
                    margin: 0 auto;
                    background-color: #151515;
                    overflow: hidden;
                    transition: height 600ms ease;
                }

                #contact-text-container {
                    position: relative; 
                    z-index: 102; 
                    padding: 50px 140px;
                }

                #contact-text {
                    margin-top: 175px; 
                    margin-bottom: 175px; 
                    text-align: center;
                }
                
                h1 {
                    font-size: 67px;
                    color: #fff;
                }

                p {
                    color: #fff;
                }

                #gif-1 {
                    position: absolute; 
                    top: 4%; 
                    left: 22%;
                    width: 320px;
                    height: 240px;
                }

                #gif-1 {
                    position: absolute; 
                    top: 4%; 
                    left: 22%;
                    width: 320px;
                    height: 240px;
                }

                #gif-2 {
                    position: absolute; 
                    top: 66%; 
                    left: 74%;
                    width: 280px;
                    height: 180px;
                }

                .stars img {
                    position: absolute;
                }

                .stars img:nth-child(1) {
                    top: 15%;
                    left: 6%;
                    width: 66px;
                    height: 66px;
                }
                
                .stars img:nth-child(2) {
                    top: 55%;
                    left: 16%;
                    width: 31px;
                    height: 31px;
                }
                
                .stars img:nth-child(3) {
                    top: 65%;
                    left: 30%;
                    width: 107px;
                    height: 107px;
                }
                
                .stars img:nth-child(4) {
                    top: 23%;
                    left: 80%;
                    width: 51px;
                    height: 51px;
                }
                
                .stars img:nth-child(5) {
                    top: 9%;
                    left: 92%;
                    width: 42px;
                    height: 42px;
                }
                
                .stars img:nth-child(6) {
                    top: 60%;
                    left: 88%;
                    width: 68px;
                    height: 68px;
                }

                @media only screen and (max-width: 1439px){
                    #contact-text-container {
                        padding: 50px 40px;
                    }

                    #gif-1 {
                        top: 6%; 
                        left: 10%;
                        width: 300px;
                        height: 220px;
                    }

                    #gif-2 {
                        top: 66%; 
                        left: 60%;
                        width: 280px;
                        height: 180px;
                    }
                }

                @media only screen and (max-width: 1023px){
                    h1 {
                        font-size: 44px;
                    }

                    #gif-1 {
                        top: 6%; 
                        left: 40%;
                        width: 300px;
                        height: 220px;
                    }

                    #gif-2 {
                        top: 66%; 
                        left: 4%;
                        width: 280px;
                        height: 180px;
                    }

                    .stars img:nth-child(3) {
                        top: 68%;
                        left: 50%;
                        width: 107px;
                        height: 107px;
                    }
                }

                @media only screen and (max-width: 767px){
                    #contact-inner-block {
                        height: ${show ? '420px' : '0px'};
                    }

                    #contact-text-container {
                        padding: 30px 20px;
                    }

                    #contact-text {
                        margin-top: 100px; 
                        margin-bottom: 100px;
                    }

                    h1 {
                        font-size: 20px;
                    }

                    p {
                        font-size: 14px !important;
                    }

                    #gif-1 {
                        top: 50%; 
                        left: 8%;
                        width: 260px;
                        height: 160px;
                    }

                    #gif-2 {
                        display: none;
                    }

                    .stars img:nth-child(1) {
                        width: 41px;
                        height: 41px;
                    }

                    .stars img:nth-child(2) {
                        width: 30px;
                        height: 30px;
                    }

                    .stars img:nth-child(3) {
                        display: none;
                    }

                    .stars img:nth-child(4) {
                        top: 23%;
                        left: 60%;
                        width: 36px;
                        height: 36px;
                    }

                    .stars img:nth-child(5) {
                        top: 9%;
                        left: 82%;
                    }

                    .stars img:nth-child(6) {
                        top: 60%;
                        left: 74%;
                        width: 48px;
                        height: 48px;
                    }
                    
                }
            `}</style>
        </>
    )
}

export default Contact
