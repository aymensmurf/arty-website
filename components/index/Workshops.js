import Slider from "react-slick";
import Workshop from "../widgets/Workshop";

const Workshops = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <>
            <section>
                <div className="container">
                    <h2>Workshop</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, fuga fugiat voluptatem quae necessitatibus, dignissimos dolore ex nostrum</p>
                    <h3>Last added workshops</h3>
                </div>

                <div style={{ paddingLeft: 140, marginTop: 50 }}>
                    <Slider {...settings}>
                        <Workshop />
                        <Workshop />
                        <Workshop />
                        <Workshop />
                        <Workshop />
                        <Workshop />
                        <Workshop />
                    </Slider>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 70 }}>
                    <div className="btn-view-all">
                        View All
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    background: #f6f6f6;
                    padding-top: 50px;
                    padding-bottom: 84px;
                }

                h2 {
                    font-family: Poppins;
                    font-weight: 600;
                    font-size: 48px;
                    line-height: 52px;
                    text-align: center;
                    color: #151515;
                }

                p {
                    font-family: Poppins;
                    font-weight: 300;
                    font-size: 22px;
                    line-height: 25px;
                    text-align: center;
                    color: #606060;
                    margin-top: 13px;
                    padding: 0px 300px;
                }

                h3 {
                    font-family: Poppins;
                    font-weight: normal;
                    font-size: 28px;
                    line-height: 52px;
                    color: #606060;
                    margin-top: 76px;
                }

                .btn-view-all {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px 76px;
                    background: linear-gradient(#ed1e1e 0%, #f68955 100%);
                    font-family: Poppins;
                    font-weight: 500;
                    font-size: 28px;
                    color: #fff;
                    border-radius: 37.5px;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}

export default Workshops;