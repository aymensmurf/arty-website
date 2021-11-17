import { getImageUri } from "../../utils/funcs";

const Workshop = ({ title, banner, slug, host, isOwner, isFullWidth = false, scaleOnHover = false }) => {
    return (
        <>
            <a href={`/workshops/${slug}`}>
                <div className="workshop-card">
                    <img src={getImageUri(banner)} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                    <div className="glass">
                        <p className="title">{title}</p>
                        {(!isOwner || host) && (<p className="artist">@{host}</p>)}
                    </div>
                </div>
            </a>

            <style jsx>{`
                .workshop-card {
                    height: 320px;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all .5s ease;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                    position: relative;
                    width: ${isFullWidth ? '100%' : '94%'};
                }

                .workshop-card:hover {
                    transform: scale(${scaleOnHover ? 1.05 : 1});
                }

                .workshop-card:hover .glass {
                    bottom: 0px;
                }

                .glass {
                    width: 100%;
                    height: 100px;
                    padding: 20px;
                    position: absolute;
                    bottom: -140px;
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

export default Workshop;