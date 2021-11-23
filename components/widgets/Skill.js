const Skill = ({ title, isActive, handleClick }) => {
    return (
        <>
            <div className="skill-container" onClick={() => handleClick(title)}>
                <div className="stage" style={{ opacity: isActive ? 1 : .25 }}>
                    <img src="/img/skills/light-bulb.svg" alt="Light bulb" className="light-bulb" />
                    <img src={`/img/skills/${title}.svg`} alt={title} className="skill" />
                    <div className="box" style={{ opacity: isActive ? 1 : 0 }} />
                </div>

                <div>
                    {isActive ? (
                        <img src="/img/skills/btn-pause.svg" alt="Play" className="btn-action" />
                    ) : (
                        <img src="/img/skills/btn-play.svg" alt="Play" className="btn-action" />
                    )}
                </div>

                <div className="light-container" style={{ opacity: isActive ? 1 : 0 }}>
                    <img src="/img/skills/light.svg" alt="Light" className="light" />
                </div>
            </div>

            <style jsx>{`
                .skill-container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    cursor: pointer;
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