const ArtistsSeeMoreCard = () => {
    return (
        <>
            <div className="artists-card">
                <h2>Artists</h2>
                <p className="description">consectetur adipiscing elit. Cras ac ante quis est consequat tristique sed ac purus. Quisque semper sem cursus velit vulputate aliquam</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 25, marginTop: 14 }}>
                    <div style={{ width: 150, height: 3, backgroundColor: '#fff' }} />
                    <p className="see-more">see more</p>
                </div>
            </div>

            <style jsx>{`
                .artists-card {
                    width: 100%;
                    height: 320px;
                    background: url("/img/bg-artist-card.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    padding: 44px 96px;
                    border-radius: 25px;
                    cursor: pointer;
                    transition: all .5s ease;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .artists-card:hover {
                    box-shadow: inset  0px 320px 0px 0 rgb(0, 0, 0, .2);
                }

                h2 {
                    font-family: Poppins;
                    font-weight: 600;
                    font-size: 68px;
                    line-height: 52px;
                    color: #fff;
                }

                .description {
                    font-family: Poppins;
                    font-weight: 300;
                    font-size: 22px;
                    line-height: 25px;
                    color: #fff;
                    margin-top: 10px;
                }

                .see-more {
                    font-family: Poppins;
                    font-weight: 600;
                    font-size: 28px;
                    line-height: 52px;
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default ArtistsSeeMoreCard;