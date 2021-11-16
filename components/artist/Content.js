import { useState } from "react";
import Medias from "./Medias";
import MoreArtists from "./MoreArtists";
import Workshops from "./Workshops";

const Content = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <>
            <section className="container">
                <div className="content">
                    <div className="avatar-container">
                        <div className="circle">
                            <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Artist Name" className="avatar" />
                        </div>
                    </div>

                    <h1>Artist Name</h1>
                    <p>@UserName</p>
                    <div className="media">
                        <img src="/img/spotify.svg" alt="Spotify" />
                        <img src="/img/youtube.svg" alt="YouTube" />
                    </div>

                    <div className="tabs">
                        <div className="tab" onClick={() => setTabIndex(0)}>
                            <h2 className={tabIndex === 0 && 'active'}>Media</h2>
                        </div>
                        <div className="tab" onClick={() => setTabIndex(1)} style={{ borderLeft: '1px solid #a1a1a1', borderRight: '1px solid #a1a1a1' }}>
                            <h2 className={tabIndex === 1 && 'active'}>Workshops</h2>
                        </div>
                        <div className="tab" onClick={() => setTabIndex(2)}>
                            <h2 className={tabIndex === 2 && 'active'}>About</h2>
                        </div>
                    </div>

                    <div className="tab-content" style={{ width: '100%' }}>
                        {
                            (tabIndex === 0) ? (
                                <Medias />
                            ) : (tabIndex === 1) ? (
                                <Workshops />
                            ) : (
                                <h1>About</h1>
                            )
                        }
                    </div>
                </div>

                <MoreArtists />
            </section>


            <style jsx>{`
                .content {
                    border-radius: 50px;
                    background: #f6f6f6;
                    padding: 0px 130px 92px 130px;
                    margin-top: 120px;
                    margin-bottom: 40px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .avatar-container {
                    width: 100%;
                    position: absolute;
                    top: -85px;
                    left: 0px;
                    display: flex;
                    justify-content: center;
                }

                .circle {
                    width: 170px;
                    height: 170px;
                    background: linear-gradient(#fff 0%, #d1d1d1 100%);
                    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.16));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .avatar {
                    width: 150px;
                    height: 150px;
                    object-fit: cover;
                    filter: drop-shadow(0px 15px 25px rgba(46, 43, 43, 0.25));
                    border-radius: 50%;
                }

                h1 {
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 32px;
                    letter-spacing: -0.02em;
                    color: #08080;
                    margin-top: 97px;
                }

                p {
                    font-family: "Poppins";
                    font-weight: 300;
                    font-size: 18px;
                    letter-spacing: -0.02em;
                    color: #9c9c9c;
                }

                .media {
                    display: flex;
                    gap: 15px;
                    cursor: pointer;
                    margin-top: 20px;
                }

                .tabs {
                    display: flex;
                    margin-top: 22px;
                    margin-bottom: 52px;
                }

                .tab {
                    padding: 4px 16px;
                    cursor: pointer;
                }

                h2 {
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 18px;
                    letter-spacing: -0.02em;
                    color: #bebebe;
                }

                h2.active {
                    color: #ed1e46; 
                }
            `}</style>
        </>
    )
}

export default Content;