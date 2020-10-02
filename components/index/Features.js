import React from 'react'

const Features = () => {
    return (
        <>
            <section style={{ backgroundColor: '##F7F7F7' }}>
                <div className="container" style={{ padding: 100, display: 'flex' }}>
                    <div>
                        <img src="/img/mockup1.png" alt="Mockup" />
                    </div>
                    <div style={{ paddingLeft: 50 }}>
                        <p>JAM</p>
                        <h1>Host & participate in JAMS & workshops.</h1>
                        <Item
                            pic='sprite'
                            title='Connect, play music and have fun'
                            content='Don’t miss the opportunity to meet musicians around you. Get JAM and start your own musical adventure.'
                        />
                        <Item
                            pic='grinning-face'
                            title='JAM session'
                            content='You are looking for a JAM session but it’s difficult to create or join!. JAM gives you the option to find a JAM session and more than that you can create your own by simple steps. So don’t miss the fun.'
                        />
                        <Item
                            pic='collision'
                            title='Workshop'
                            content='If you have the skill to teach music to people and you want to share it with the world it’s your opportunity to start your own musical workshop on JAM.'
                        />
                    </div>
                </div>
            </section>

            <style jsx>{`
                h1 {
                    font-size: 50px;
                    line-height: 60px;
                    margin-top: 10px;
                }
            `}</style>
        </>
    )
}

export default Features

const Item = ({ pic, title, content }) => {
    return (
        <div style={{ display: 'flex', marginTop: 50 }}>
            <div>
                <img src={'/img/' + pic + '.png'} alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>

            <style jsx>{`
                h2 {
                    font-size: 30px;
                }

                img {
                    // object-fit: contain;
                    margin-right: 14px; 
                }
            `}</style>
        </div>
    )
}
