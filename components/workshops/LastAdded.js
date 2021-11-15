import Slider from "react-slick";
import Workshop from "../widgets/Workshop";

const LastAdded = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <>
            <section className="container">
                <h1>Welcome to ARTY Workshops</h1>

                <div className="grid" style={{ marginTop: 92 }}>
                    <div className="last-added-card">
                        <div>
                            <h3>Last added</h3>
                            <h2>Workshop's</h2>
                        </div>

                        <h4>Scroll for more</h4>
                    </div>

                    <div style={{ zIndex: 1, position: 'relative', display: 'block' }}>
                        <Slider {...settings}>
                            <Workshop />
                            <Workshop />
                            <Workshop />
                            <Workshop />
                            <Workshop />
                        </Slider>
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    padding: 125px 0px 100px;
                }

                h1 {
                    font-family: "Republica";
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 52px;
                    color: #ed1e46;
                    text-align: center;
                }

                .grid {
                    display: grid;
                    grid-template-columns: minmax(400px, min-content) calc(100vw - 463px);
                    align-items: center;
                    gap: 40px;
                }

                .last-added-card {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background: url('/img/bg-last-added.png');
                    background-attachment: cover;
                    background-repeat: no-repeat;
                    padding: 30px 30px 20px;
                    border-radius: 25px;
                }

                h4, h3, h2 {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 38px;
                    line-height: 42px;
                    color: #fff;
                }

                h2 {
                    font-size: 48px;
                }

                h4 {
                    font-size: 22px;
                    margin-top: 34px;
                }
            `}</style>
        </>
    )
}

export default LastAdded;