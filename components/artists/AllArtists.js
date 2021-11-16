import Masonry from 'react-masonry-css'
import Artist from "../widgets/Artist";

const AllArtists = () => {
    return (
        <>
            <section className="container" style={{ marginTop: 100 }}>
                <Masonry
                    breakpointCols={4}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    <div style={{ marginBottom: 20 }}>
                        <Artist />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <h2>Arty</h2>
                        <Artist />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <Artist />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <h2>Artists</h2>
                        <Artist />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <Artist />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <Artist />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <Artist />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <Artist />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <Artist />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <Artist />
                    </div>
                </Masonry>
            </section>

            <style jsx>{`
                h2 {
                    font-family: "Republica";
                    font-weight: normal;
                    font-size: 41px;
                    line-height: 41px;
                    text-align: center;
                    color: #ed1e46;
                    text-transform: uppercase;
                    margin-bottom: 48px;
                }
            `}</style>
        </>
    )
}

export default AllArtists;