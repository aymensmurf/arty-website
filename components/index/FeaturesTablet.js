import React from 'react'

const FeaturesTablet = () => {
    return (
        <>
            <a name="features-t"></a>
            <section style={{ backgroundColor: '##F7F7F7', padding: '70px 20px', textAlign: 'center' }}>
                <p>JAM</p>
                <h1>Host & participate in JAMS & workshops.</h1>


                <Item
                    icon='sprite'
                    pic='feature-1'
                    title='Connect, play music and have fun'
                    content='Don’t miss the opportunity to meet musicians around you. Get JAM and start your own musical adventure.'
                />
                <Item
                    icon='grinning-face'
                    pic='feature-2'
                    title='JAM session'
                    content='You are looking for a JAM session but it’s difficult to create or join!. JAM gives you the option to find a JAM session and more than that you can create your own by simple steps. So don’t miss the fun.'
                />
                <Item
                    icon='collision'
                    pic='feature-3'
                    title='Workshop'
                    content='If you have the skill to teach music to people and you want to share it with the world it’s your opportunity to start your own musical workshop on JAM.'
                />
            </section>

            <style jsx>{`
                h1 {
                    font-size: 36px;
                    line-height: 46px;
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
        </>
    )
}

export default FeaturesTablet

const Item = ({ icon, pic, title, content }) => {
    return (
        <>
            <div style={{ marginTop: 30, padding: '0px 30px' }}>
                <img className="icon" src={'/img/' + icon + '.png'} alt={title} />
                <h2>{title}</h2>
                <p>{content}</p>
                <img className="feature-pic" src={'/img/features/' + pic + '.png'} alt={title} />
            </div>

            <style jsx>{`
                h2 {
                    font-size: 24px;
                    line-height: 30px;
                }

                h2, p {
                    margin-top: 6px;
                }

                .icon {
                    width: 45px;
                    height: 45px;
                    object-fit: contain;
                }

                .feature-pic {
                    width: 60%;
                    object-fit: contain;
                    margin-top: 20px;
                }

                @media only screen and (max-width: 767px){
                    h2 {
                        font-size: 20px;
                        line-height: 26px;
                    } 
                }

                @media only screen and (max-width: 424px){
                    h2 {
                        font-size: 18px;
                        line-height: 26px;
                    }
                }
            `}</style>
        </>
    )
}

