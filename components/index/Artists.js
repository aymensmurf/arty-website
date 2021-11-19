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
                                    <div className="special-card">
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

                .special-card {
                    grid-column: 4 / 7;
                }

                @media only screen and (max-width: 1360px) {
                    .grid {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .special-card {
                        grid-column: 2 / 4;
                        grid-row: 1 / 1;
                    }
                }

                @media only screen and (max-width: 840px) {
                    .grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .special-card {
                        grid-column: 1 / 3;
                    }
                }

                @media only screen and (max-width: 570px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }

                    .special-card {
                        grid-column: 1 / 2;
                    }
                }
            `}</style>
        </>
    )
}

export default Artists;