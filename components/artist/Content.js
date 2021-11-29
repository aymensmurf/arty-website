import { useState, useEffect } from "react";
import { getImageUri } from "../../utils/funcs";
import Medias from "./Medias";
import Workshops from "./Workshops";
import About from "./About";
import SocialMedia from "./SocialMedia";

const Content = ({ data }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const { architectures, calligraphy, dances, genres, handcrafts, instruments, literatures, paintings, paintingtools, photographies, photographytools, sandarts, sculptures, skills, theatres } = data;
        const _skills = architectures.concat(calligraphy, dances, genres, handcrafts, instruments, literatures, paintings, paintingtools, photographies, photographytools, sandarts, sculptures, skills, theatres);

        setSkills(_skills);
    }, []);

    return (
        <>
            <section className="container">
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                    <div className="circle">
                        <img src={getImageUri(data.avatar)} alt={data.name} className="avatar" />
                    </div>

                    <h1>{data.name}</h1>
                    <p>@{data.username}</p>
                    <div className="below-620" style={{ marginTop: 15 }}>
                        <SocialMedia spotify={data.spotify} youtube={data.youtube} soundcloud={data.soundcloud} />
                    </div>
                </div>

                <div className="tab-header">
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
                    <div className="above-620">
                        <SocialMedia spotify={data.spotify} youtube={data.youtube} soundcloud={data.soundcloud} />
                    </div>
                </div>

                <div className="tab-body">
                    {
                        (tabIndex === 0) ? (
                            data.media && data.media.length > 0 ?
                                <Medias data={data.media} />
                                :
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src="/img/404-media.svg" alt="No media found" />
                                </div>
                        ) : (tabIndex === 1) ? (
                            data.workshops && data.workshops.length > 0 ?
                                <Workshops data={data.workshops} />
                                :
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src="/img/404-workshops.svg" alt="No workshops found" />
                                </div>
                        ) : (
                            <About description={data.description} skills={skills} />
                        )
                    }
                </div>
            </section>


            <style jsx>{`
                section {
                    padding-top: 50px;
                }

                .content {
                    border-radius: 50px;
                    background: #f6f6f6;
                    margin-top: 120px;
                    margin-bottom: 40px;
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
                    margin-top: 10px;
                }

                p {
                    font-family: "Poppins";
                    font-weight: 300;
                    font-size: 18px;
                    color: #9c9c9c;
                }

                .tab-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 50px;
                    background-color: #F2F2F2;
                    padding: 24px 138px;
                    margin-top: 25px;
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
                }

                .tabs {
                    display: flex;
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

                .tab-body {
                    width: 100%;
                    max-height: 760px;
                    overflow-y: auto;
                    padding: 50px 138px;
                    background-color: #F5F5F5;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    margin-bottom: 74px;
                }

                .above-620 {
                    display: block;
                }

                .below-620 {
                    display: none;
                    clear: both;
                }

                @media only screen and (max-width: 1439px){
                    .tab-header, .tab-body {
                        padding: 24px 40px;
                    }
                }

                @media only screen and (max-width: 620px){
                    .above-620 {
                        display: none;
                        clear: both;
                    }
    
                    .below-620 {
                        display: block;
                    }
                }

                @media only screen and (max-width: 448px){
                    .tab-header, .tab-body {
                        padding: 24px 20px;
                    }

                    .tab {
                        padding: 4px 10px;
                    }
    
                    h2 {
                        font-size: 15px;
                    }
                }
            `}</style>
        </>
    )
}

export default Content;