import Masonry from 'react-masonry-css'
import Artist from "../widgets/Artist";

const AllArtists = ({ data }) => {
    return (
        <>
            <section className="container" style={{ marginTop: 100 }}>
                <Masonry breakpointCols={{ default: 4, 1023: 3, 767: 2, 600: 1 }} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {data.map(({ _id, name, avatar, username }, i) => (
                        <div key={_id} style={{ marginBottom: 20 }}>
                            {(i === 1) && <h2 className="visible-desktop">Arty</h2>}
                            {(i === 3) && <h2 className="visible-desktop">Artists</h2>}
                            <Artist
                                name={name}
                                avatar={avatar}
                                username={username}
                                scaleOnHover
                            />
                        </div>
                    ))}
                </Masonry>
            </section>

            <style jsx>{`
                .container {
                    max-width: 1096px;
                }

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