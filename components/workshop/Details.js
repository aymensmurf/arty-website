const Details = () => {
    return (
        <>
            <section className="container">
                <div className="flex">
                    <div className="details">
                        <div className="flex" style={{ alignItems: 'center', gap: 20 }}>
                            <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Owner" className="avatar" />
                            <h1>Woner</h1>
                        </div>
                        <h2 style={{ marginTop: 35 }}>Workshop Names</h2>
                        <h3 style={{ marginTop: 13 }}>Start : 22 Nov 2021 at 08:00</h3>
                        <h3 style={{ marginTop: 11 }}>End : 22 Nov 2021 at 18:00</h3>
                        <h4 style={{ marginTop: 31 }}>Discription</h4>
                        <p style={{ marginTop: 10 }}>consectetur adipiscing elit. Suspendisse turpis purus, molestie vitae semper dapibus, consectetur quis ligula. Aliquam nec elit odio. Aenean mauris nunc, maximus tempus tortor in, bibendum dapibus tortor</p>
                    </div>

                    <div className="participents">
                        <div>
                            <h2 style={{ color: '#222' }}>Particpents <span style={{ marginLeft: 25, color: '#80CC72' }}>10 People</span></h2>

                            <div className="participents-container" style={{ marginTop: 38 }}>
                                <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Owner" className="avatar" />
                                <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Owner" className="avatar" />
                                <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Owner" className="avatar" />
                                <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Owner" className="avatar" />
                                <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Owner" className="avatar" />
                                <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Owner" className="avatar" />
                                <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Owner" className="avatar" />
                                <img src="https://www.careergirls.org/wp-content/uploads/2018/05/Artist_1920x1080.jpg" alt="Owner" className="avatar" />

                                <div className="more">+10</div>
                            </div>
                        </div>

                        <p style={{ marginTop: 30 }}>Only 10 Places left</p>
                    </div>

                    <div className="join-arty">
                        <h1>JOIN ARTY FOR MORE</h1>

                        <div className="flex" style={{ gap: 24, marginTop: 35 }}>
                            <a>
                                <img src="/img/nav-google.png" alt="Google Play" style={{ marginRight: 10 }} />
                            </a>
                            <a>
                                <img src="/img/nav-apple.png" alt="App store" />
                            </a>
                        </div>

                        <p style={{ fontSize: 16, marginTop: 25, textAlign: 'center', color: '#fff' }}>Download the app now</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    margin-top: 30px;
                    margin-bottom: 140px;
                }

                .flex {
                    display: flex;
                    gap: 30px;
                    flex-wrap: wrap;
                }

                .details {
                    width: 47%;
                    border-radius: 25px;
                    background: #fdfdfd;
                    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
                    padding: 22px 35px;
                }

                .participents {
                    width: 30%;
                    border-radius: 25px;
                    background: #fdfdfd;
                    border: 1px solid #ed1e46;
                    padding: 46px 70px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 20px;
                }

                .join-arty {
                    width: calc(23% - 60px);
                    border-radius: 25px;
                    background: url("/img/bg-join-arty.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    padding: 70px 48px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .avatar {
                    width: 82px;
                    height: 82px;
                    border-radius: 50%;
                    object-fit: cover;
                    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
                }

                h1, h2, h3, h4, p {
                    font-family: "Poppins";
                    font-weight: 600;
                    color: #222;
                }

                h1 {
                    font-size: 32px;
                    line-height: 22px;
                }

                h2 {
                    font-size: 27px;
                    line-height: 19px;
                    color: #ed1e46;
                }

                h3 {
                    font-family: Poppins;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 22px;
                }

                h4 {
                    font-size: 22px;
                    line-height: 22px;
                }

                p {
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 25px;
                }

                .participents-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    column-gap: 30px;
                    row-gap: 20px;
                }

                .more {
                    width: 82px;
                    height: 82px;
                    background-color: #ED1E46;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    color: #fff;
                }

                .join-arty h1 {
                    font-family: Poppins;
                    font-weight: bold;
                    font-size: 46px;
                    line-height: 50px;
                    color: #fff;
                    text-align: center;
                }
            `}</style>
        </>
    )
}

export default Details;