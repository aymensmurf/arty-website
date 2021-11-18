import Pill from "../widgets/Pill";

const About = ({ description, skills }) => {
    return (
        <>
            <div>
                {description && (
                    <>
                        <h3>About the Artist</h3>
                        <p>{description}</p>
                    </>
                )}

                {skills.length > 0 && (
                    <>
                        <h3 style={{ marginTop: 31 }}>Skills</h3>
                        <div className="skills">
                            {skills.map((elm, i) => (
                                <Pill key={i} title={elm} isActive />
                            ))}
                        </div>
                    </>
                )}

            </div>

            <style jsx>{`
                h3 {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 44px;
                    color: #151515;
                }

                p {
                    font-family: "Poppins";
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 25px;
                    text-align: left;
                    color: #000;
                    margin-top: 25px;
                }
                
                .skills {
                    display: flex;
                    gap: 10px;
                    margin-top: 10px;
                }
            `}</style>
        </>
    )
}

export default About;