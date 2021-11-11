const Workshop = () => {
    return (
        <>
            <div className="workshop-card hi">
                <div className="glass">
                    <p className="title">Workshop Name</p>
                    <p className="artist">Owner</p>
                </div>
            </div>

            <style jsx>{`
                .workshop-card {
                    width: 94%;
                    height: 320px;
                    background: url("https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    border-radius: 25px;
                    cursor: pointer;
                    transition: all .5s ease;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                }

                .workshop-card:hover {
                    // transform: scale(1.05);
                }

                .workshop-card:hover .glass {
                    bottom: 0px;
                }

                .glass {
                    width: 100%;
                    height: 100px;
                    padding: 20px;
                    position: relative;
                    bottom: -140px;
                    z-index: 1;
                    background: inherit;
                    overflow: hidden;
                    transition: all .5s ease;
                }
                  
                .glass:before {
                    content: "";
                    position: absolute;
                    background: inherit;
                    z-index: -1;
                    top: -345px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    filter: blur(40px);
                    margin: -80px;
                    box-shadow: inset 0 0 0 200px rgba(0,0,0,0.3);
                }

                .title {
                    font-family: Poppins;
                    font-weight: 500;
                    font-size: 24px;
                    color: #fff;
                }

                .artist {
                    font-family: Poppins;
                    font-weight: normal;
                    font-size: 20px;
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default Workshop;