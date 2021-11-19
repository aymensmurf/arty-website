import React from 'react';
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <i className="fas fa-chevron-circle-right" style={{ fontSize: 25, color: '#707070', position: 'absolute', top: '38%', right: 10, zIndex: 3 }}></i>
        </div>
    )
}

const PrevArrow = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <i className="fas fa-chevron-circle-left" style={{ fontSize: 25, color: '#707070', position: 'absolute', top: '38%', left: 10, zIndex: 3 }}></i>
        </div>
    )
}



const settings = {
    center: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};


const FeaturesTablet = () => {
    return (
        <div className="visible-tablet">
            <a name="features-t"></a>
            <section style={{ backgroundColor: '##F7F7F7', padding: '70px 0px', textAlign: 'center' }}>
                <p>ARTY</p>
                <h1>Host & participate in ARTY & workshops.</h1>

                <div style={{ position: 'relative' }}>
                    <Slider {...settings}>
                        <Item
                            id='1'
                            pic='feature-1'
                            title='Connect, meet, play, sign, draw, dance and have fun!'
                            content='Don’t miss the opportunity to meet artists around you. Get ARTY and start your own spectacle.'
                        />
                        <Item
                            id='2'
                            pic='feature-2'
                            title='ARTY Workshops'
                            content='If you are looking for an art workshop but it’s difficult to find, create or join! ARTY offers you the opportunity to have an interactive workshop, physically or online a by simple steps and friendly design!'
                        />
                        <Item
                            id='3'
                            pic='feature-3'
                            title='Workshop'
                            content='For ethusiatstic artists who have the skill to teach, tutor or train art to people and want to share it with the world, ARTY is the solution to start your own workshops now.'
                        />
                    </Slider>



                </div>
            </section>

            <style jsx>{`
                p {
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 22px;
                    color: #151515;
                }

                h1 {
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 48px;
                    line-height: 50px;
                    margin-top: 10px;
                    color: #0f0f0f;
                }

                @media only screen and (max-width: 767px){
                    h1 {
                        font-size: 28px;
                        line-height: 32px;
                    } 
                }

                @media only screen and (max-width: 424px){
                    h1 {
                        font-size: 24px;
                        line-height: 30px;
                    }
                }
            `}</style>
        </div>
    )
}

export default FeaturesTablet

const Item = ({ id, pic, title, content }) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30, padding: '0px 30px' }}>
                <img className="feature-pic" src={'/img/features/' + pic + '.png'} alt={title} />
                <h2>{title}</h2>
                <p>{content}</p>
            </div>

            <style jsx>{`
                h2 {
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 24px;
                    color: #0f0f0f;
                }

                p {
                    font-family: "Poppins";
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 20px;
                    color: #151515;
                    margin-top: 8px;
                }

                .icon {
                    width: 45px;
                    height: 45px;
                    object-fit: contain;
                }

                .feature-pic {
                    width: 60%;
                    object-fit: contain;
                    margin-top: 40px;
                    margin-bottom: 80px;
                }

                @media only screen and (max-width: 767px){
                    h2 {
                        font-size: 20px;
                        line-height: 26px;
                    } 
                }

                @media only screen and (max-width: 424px){
                    h2 {
                        font-size: 20px;
                        line-height: 20px;
                    }

                    p {
                        font-size: 14px;
                    }

                    .feature-pic {
                        width: 90%;
                    }
                }
            `}</style>
        </>
    )
}

