const Media = ({ isFullWidth }) => {
    return (
        <>
            <a href="/workshops/thisid">
                <div className="workshop-card">
                    <div className="glass">
                        <p className="title">Workshop Name</p>
                        <p className="artist">22/07/2022</p>
                    </div>
                </div>
            </a>

            <style jsx>{`
                .workshop-card {
                    height: 320px;
                    background: url("https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all .5s ease;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                    width: ${isFullWidth ? '100%' : '94%'};
                }

                .workshop-card:hover .glass {
                    bottom: 0px;
                }

                .glass {
                    width: 100%;
                    height: 63px;
                    padding: 20px;
                    position: relative;
                    bottom: -140px;
                    z-index: 1;
                    background: inherit;
                    overflow: hidden;
                    transition: all .5s ease;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
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
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 16px;
                    color: #fff;
                }

                .artist {
                    font-family: "Poppins";
                    font-weight: normal;
                    font-size: 12px;
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default Media;