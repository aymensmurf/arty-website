import React from "react";
import Artist from "../widgets/Artist";
import ArtistsSeeMoreCard from "../widgets/ArtistsSeeMoreCard";

const Artists = ({ data }) => {
    return (
        <>
            <a name="artists"></a>

            <section>
                <div className="container grid">
                    {data.map(({ _id, name, avatar, username }, i) => {
                        if (i === 3) {
                            return (
                                <React.Fragment key={_id}>
                                    <div style={{ gridColumn: '4 / 7' }}>
                                        <ArtistsSeeMoreCard />
                                    </div>


                                    <Artist
                                        name={name}
                                        avatar={avatar}
                                        username={username}
                                        scaleOnHover
                                    />
                                </React.Fragment>
                            )
                        }

                        return (
                            <Artist
                                key={_id}
                                name={name}
                                avatar={avatar}
                                username={username}
                                scaleOnHover
                            />
                        )
                    })}
                </div>
            </section>

            <style jsx>{`
                section {
                    background: #fff;
                    padding: 40px 0px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 16px;
                }
            `}</style>
        </>
    )
}

export default Artists;