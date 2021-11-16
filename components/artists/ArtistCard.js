const ArtistCard = () => {
    return (
        <>
            <div className="artists-card">
                <h2>Arty artists</h2>
                <p className="description">consectetur adipiscing elit. Cras ac ante quis est consequat tristique sed ac purus. Quisque semper sem cursus velit vulputate aliquam</p>
            </div>

            <style jsx>{`
                .artists-card {
                    width: 100%;
                    height: 100%;
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

                h2 {
                    font-family: Poppins;
                    font-weight: 600;
                    font-size: 51px;
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
            `}</style>
        </>
    )
}

export default ArtistCard;