import React from "react";
import Slider from "react-slick";
import Artist from "../widgets/Artist";
import ArtistsSeeMoreCard from "../widgets/ArtistsSeeMoreCard";

const settings = {
    center: true,
    infinite: true,
    slidesToShow: 2.66,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.64,
                slidesToScroll: 1
            }
        },
    ]
};

const ArtistsTablet = ({ data }) => {
    return (
        <div className="visible-tablet">
            <a name="artists"></a>

            <section>
                <div className="container" style={{ paddingRight: 15, paddingLeft: 15 }}>
                    <ArtistsSeeMoreCard />
                </div>

                <div className="container" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <div style={{ marginTop: 40 }}>
                        <Slider {...settings}>
                            {data.map(({ _id, name, avatar, username }, i) => (
                                <Artist
                                    key={_id}
                                    name={name}
                                    avatar={avatar}
                                    username={username}
                                    isFullWidth={false}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    background: #fff;
                    padding: 40px 0px;
                }
            `}</style>
        </div>
    )
}

export default ArtistsTablet;