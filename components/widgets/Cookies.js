import React, { useState } from 'react'

const Cookies = () => {
    const [cookies, setCookies] = useState(true)
    return (
        <>
            {
                cookies ?
                    <div style={{ background: 'rgb(237,30,70)', background: 'linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%)', position: 'relative', zIndex: 99 }}>
                        <div className="cookies container">
                            <div style={{ display: 'flex', width: '25%' }}>
                                <img src="/img/cookies.png" alt="Cookies" style={{ marginRight: 24 }} />
                                <h4>Cookies.</h4>
                            </div>

                            <div style={{ width: '50%' }}>
                                <p style={{ color: '#fff' }}>This site uses cookies to improve your user experience and allows you to control what you want to activate.</p>
                            </div>

                            <div style={{ display: 'flex', width: '25%' }}>
                                <button onClick={() => setCookies(false)}> Accept everything  </button>
                            </div>
                        </div>
                    </div> : null
            }


            <style jsx>{`
                .cookies {
                    width: 100%;
                    padding: 30px 0px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                button {
                    background-color: #151515;
                    color: #FFFFFF;
                    font-size: 25px;
                    padding: 7px;
                    width: 100%;
                    border: none;   
                    cursor: pointer;
                }

                button:focus {
                    outline: none;
                }

                h4 {
                    font-size: 39px;
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default Cookies
