import Artist from "../widgets/Artist";
import ArtistCard from "./ArtistCard";

const Featured = () => {
    return (
        <>
            <section className="container">
                <div className="grid">
                    <div style={{ gridColumn: '1 / 3' }}>
                        <ArtistCard />
                    </div>
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                </div>
            </section>

            <style jsx>{`
                section {
                    padding: 125px 0px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 30px;
                }
            `}</style>
        </>
    )
}

export default Featured;