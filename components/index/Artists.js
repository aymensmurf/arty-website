import Artist from "../widgets/Artist";
import ArtistsSeeMoreCard from "../widgets/ArtistsSeeMoreCard";

const Artists = () => {
    return (
        <>
            <section>
                <div className="container artists-container">
                    <Artist />
                    <Artist />
                    <div className="see-more-card">
                        <ArtistsSeeMoreCard />
                    </div>
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                </div>
            </section>

            <style jsx>{`
                section {
                    background: #f0f0f0;
                    padding-top: 90px;
                    padding-bottom: 66px;
                }

                .artists-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    align-items: center;
                    gap: 30px;
                }

                .see-more-card {
                    grid-column: 3 / 5;
                }
            `}</style>
        </>
    )
}

export default Artists;