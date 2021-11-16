import { getImageUri } from "../../utils/funcs";

const Artist = ({ name, avatar, username, isFullWidth = true, scaleOnHover = false }) => {
    return (
        <>
            <a href={`/${username}`}>
                <div className="artis-card">
                    <div className="glass">
                        <p className="title">{name}</p>
                    </div>
                </div>
            </a>

            <style jsx>{`
                .artis-card {
                    width: 100%;
                    height: 300px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all .5s ease;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                    background: url(${getImageUri(avatar)});
                    width: ${isFullWidth ? '100%' : '94%'};
                }

                .artis-card:hover {
                    transform: scale(${scaleOnHover ? 1.05 : 1});
                }

                .artis-card:hover .glass {
                    bottom: 0px;
                }

                .glass {
                    width: 100%;
                    height: 74px;
                    padding: 20px;
                    position: relative;
                    bottom: -114px;
                    z-index: 1;
                    background: inherit;
                    overflow: hidden;
                    transition: all .5s ease;
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
                    font-family: Poppins;
                    font-weight: 500;
                    font-size: 24px;
                    color: #fff;
                    text-align: center;
                }

                .artist {
                    font-family: Poppins;
                    font-weight: normal;
                    font-size: 20px;
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default Artist;