import { useEffect, useState } from "react";
import Slider from "react-slick";
import client from "../../graphql";
import Workshop from "../widgets/Workshop";
import { GET_FEATURED_WORKSHOPS } from "../../graphql/queries/workshop";

const settings = {
    center: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true
};

const MoreWorkshops = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        getWorkshops();
    }, []);

    const getWorkshops = async () => {
        try {
            const { data } = await client.query({
                query: GET_FEATURED_WORKSHOPS,
                variables: { limit: 9 },
                fetchPolicy: 'network-only',
            });

            if (data && data.getFeaturedWorkshops && data.getFeaturedWorkshops.length > 0) {
                setWorkshops(data.getFeaturedWorkshops);
            }
        } catch (error) {
            console.error(`error`, error)
        }
    }

    console.log(`workshops`, workshops)

    if (workshops.length > 0) {
        return (
            <>
                <section className="container">
                    <h1>More Workshops</h1>

                    <div className="glass">
                        <Slider {...settings}>
                            {workshops.map(({ _id, title, slug, banner, host }) => (
                                <Workshop
                                    key={_id}
                                    title={title}
                                    banner={banner}
                                    slug={slug}
                                    host={host.username}
                                    isFullWidth={false}
                                    scaleOnHover={false}
                                />
                            ))}
                        </Slider>
                    </div>
                </section>

                <style jsx>{`
                    section {
                        background: url("/img/bg-artist-card.png");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                        border-radius: 25px;
                        padding: 50px 138px;
                        margin-bottom: 90px;
                    }

                    h1 {
                        font-family: "Poppins";
                        font-weight: 600;
                        font-size: 58px;
                        letter-spacing: -0.02em;
                        line-height: 44px;
                        text-align: center;
                        color: #fff;                     
                    }

                    .glass {
                        padding: 100px 170px;
                        position: relative;
                        z-index: 1;
                        background: inherit;
                        overflow: hidden;
                        transition: all .5s ease;
                        margin-top: 50px;
                        border-radius: 54px;
                    }

                    .glass:before {
                        content: "";
                        position: absolute;
                        background: inherit;
                        z-index: -1;
                        top: 0px;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        filter: blur(40px);
                        margin: -200px;
                        box-shadow: inset 0 0 0 30px rgba(255, 255, 255, 0.15);
                    }
                `}</style>
            </>
        )
    }

    return <></>
}

export default MoreWorkshops;