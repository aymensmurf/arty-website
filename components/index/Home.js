import React, { useState, useEffect } from 'react'
import { WORDS } from '../../utils/consts';
import Skill from '../widgets/Skill';

const Home = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [isSkill1, setIsSkill1] = useState(false);
    const [isSkill2, setIsSkill2] = useState(false);
    const [isSkill3, setIsSkill3] = useState(false);
    const [isSkill4, setIsSkill4] = useState(false);
    const [isSkill5, setIsSkill5] = useState(false);

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
        <div className="visible-desktop">
            <a name="home"></a>

            <section style={{ minHeight: '100vh', background: '#000' }}>
                <div className="container" style={{ paddingTop: 200 }}>
                    <h1 style={{ overflow: 'hidden' }}>
                        Connect, aspire and inspire to do &nbsp;<br />
                        <span className="word-container-bottom" style={{ zIndex: 1, color: '#ED1E46' }}>{WORDS[wordIndex]}</span>&nbsp;
                    </h1>
                </div>

                <div style={{ borderTop: "6px solid #fff", marginTop: 50 }}></div>

                <div className="container" style={{ paddingBottom: 140 }}>
                    <div className="grid-5" style={{ marginTop: -6 }}>
                        <Skill
                            title="skill-1"
                            isActive={isSkill1}
                            setIsActive={setIsSkill1}
                        />
                        <Skill
                            title="skill-2"
                            isActive={isSkill2}
                            setIsActive={setIsSkill2}
                        />
                        <Skill
                            title="skill-3"
                            isActive={isSkill3}
                            setIsActive={setIsSkill3}
                        />
                        <Skill
                            title="skill-4"
                            isActive={isSkill4}
                            setIsActive={setIsSkill4}
                        />
                        <Skill
                            title="skill-5"
                            isActive={isSkill5}
                            setIsActive={setIsSkill5}
                        />
                    </div>
                </div>
            </section>

            <style jsx>{`
                h1 {
                    color: #fff;
                    font-size: 48px;
                    line-height: 60px;
                    text-align: center;
                    margin: 0px 200px;
                }

                .grid-5 {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    justify-content: center;
                    align-items: center;
                    align-content: center
                }
            `}</style>
        </div>
    )
}

export default Home
