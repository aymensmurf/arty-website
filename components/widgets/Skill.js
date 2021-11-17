const Skill = ({ title, isActive, setIsActive }) => {
    const handleClick = () => {
        setIsActive(!isActive);

        const audioSkill1 = document.getElementById(`audio-skill-1`);
        const audioSkill2 = document.getElementById(`audio-skill-2`);
        const audioSkill3 = document.getElementById(`audio-skill-3`);
        const audioSkill4 = document.getElementById(`audio-skill-4`);
        const audioSkill5 = document.getElementById(`audio-skill-5`);

        audioSkill1.currentTime = 0;
        audioSkill2.currentTime = 0;
        audioSkill3.currentTime = 0;
        audioSkill4.currentTime = 0;
        audioSkill5.currentTime = 0;

        audioSkill1.play();
        audioSkill2.play();
        audioSkill3.play();
        audioSkill4.play();
        audioSkill5.play();
    }

    return (
        <>
            <div className="skill-container">
                <div className="stage" style={{ opacity: isActive ? 1 : .25 }}>
                    <img src="/img/skills/light-bulb.svg" alt="Light bulb" className="light-bulb" />
                    <img src={`/img/skills/${title}.svg`} alt={title} className="skill" />
                    <div className="box" style={{ opacity: isActive ? 1 : 0 }} />
                </div>

                <div className={isActive && "active-audio"} onClick={handleClick}>
                    {isActive ? (
                        <img src="/img/skills/btn-pause.svg" alt="Play" className="btn-action" />
                    ) : (
                        <img src="/img/skills/btn-play.svg" alt="Play" className="btn-action" />
                    )}
                </div>

                <div className="light-container" style={{ opacity: isActive ? 1 : 0 }}>
                    <img src="/img/skills/light.svg" alt="Light" className="light" />
                </div>

                <audio loop muted={!isActive} id={`audio-${title}`}>
                    <source src={`/audio/${title}.mp3`} type='audio/mp3' />
                </audio>
            </div>

            <style jsx>{`
                .skill-container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                }

                .stage {
                    height: 422px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                }

                .light-bulb {
                    width: 54px;
                    height: 82px;
                    object-fit: contain;
                }

                .skill {
                    object-fit: contain;
                    position: relative;
                    z-index: 2;
                }

                .box {
                    width: 176px;
                    height: 163px;
                    border-radius: 13px;
                    background: linear-gradient(#ed1e46 0%, #f68955 100%);
                    position: absolute;
                    bottom: 0;
                    z-index: 1;
                }

                .btn-action {
                    width: 48px;
                    height: 48px;
                    object-fit: contain;
                    margin-top: 40px;
                    cursor: pointer;
                }

                .light-container {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    padding-top: 4px;
                    padding-left: 6px;
                }

                .light {
                    filter: blur(22px);
                }
            `}</style>
        </>
    )
}

export default Skill;