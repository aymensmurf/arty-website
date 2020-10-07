import React, { useEffect } from 'react'

const Features = () => {
    useEffect(() => {
        const feature1 = document.getElementById("feature-1");
        const feature2 = document.getElementById("feature-2");
        const feature3 = document.getElementById("feature-3");

        feature1.style.backgroundColor = 'transparent'
        feature2.style.backgroundColor = 'transparent'
        feature3.style.backgroundColor = 'transparent'

        feature1.addEventListener("mouseenter", e => {
            document.getElementById("feature-img").src = "/img/features/feature-1.png"
            e.target.style.backgroundColor = '#EAEAEA'
            feature2.style.backgroundColor = 'transparent'
            feature3.style.backgroundColor = 'transparent'
        })
        feature2.addEventListener("mouseenter", e => {
            document.getElementById("feature-img").src = "/img/features/feature-2.png"
            e.target.style.backgroundColor = '#EAEAEA'
            feature1.style.backgroundColor = 'transparent'
            feature3.style.backgroundColor = 'transparent'
        })
        feature3.addEventListener("mouseenter", e => {
            document.getElementById("feature-img").src = "/img/features/feature-3.png"
            e.target.style.backgroundColor = '#EAEAEA'
            feature1.style.backgroundColor = 'transparent'
            feature2.style.backgroundColor = 'transparent'
        })
    }, [])

    return (
        <>
            <a name="features"></a>
            <section style={{ backgroundColor: '##F7F7F7' }}>
                <div className="container" style={{ padding: 100, display: 'flex' }}>
                    <div style={{ width: '40%', paddingRight: 20, display: 'flex', alignItems: 'center' }}>
                        <img src="/img/features/feature-1.png" alt="Mockup" id="feature-img" style={{ width: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ width: '60%' }}>
                        <div style={{ padding: '22px 40px' }}>
                            <p>JAM</p>
                            <h1>Host & participate in JAMS & workshops.</h1>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <Item
                                    id='1'
                                    icon='sprite'
                                    title='Connect, play music and have fun'
                                    content='Don’t miss the opportunity to meet musicians around you. Get JAM and start your own musical adventure.'
                                />
                                <Item
                                    id='2'
                                    icon='grinning-face'
                                    title='JAM session'
                                    content='You are looking for a JAM session but it’s difficult to create or join!. JAM gives you the option to find a JAM session and more than that you can create your own by simple steps. So don’t miss the fun.'
                                />
                                <Item
                                    id='3'
                                    icon='collision'
                                    title='Workshop'
                                    content='If you have the skill to teach music to people and you want to share it with the world it’s your opportunity to start your own musical workshop on JAM.'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                h1 {
                    font-size: 50px;
                    line-height: 60px;
                    margin-top: 10px;
                }

                @media only screen and (max-width: 1439px){
                    h1 {
                        font-size: 30px;
                        line-height: 40px;
                    }
                }
            `}</style>
        </>
    )
}

export default Features

const Item = ({ id, icon, title, content }) => {
    return (
        <div className="feature-item" id={`feature-${id}`} style={{ display: 'flex', padding: '22px 40px' }}>
            <div>
                <img src={'/img/' + icon + '.png'} alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>

            <style jsx>{`
                .feature-item {
                    transition: all 500ms ease;
                }

                h2 {
                    font-size: 30px;
                }

                p {
                    margin-top: 8px;
                }

                img {
                    margin-right: 14px; 
                }
                
                @media only screen and (max-width: 1439px){
                    h2 {
                        font-size: 24px;
                        line-height: 30px;
                    }

                    img {
                        width: 40px;
                        height: 40px;
                        object-fit: contain;
                    }
                }
            `}</style>
        </div>
    )
}
