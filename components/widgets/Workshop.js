import { getImageUri } from "../../utils/funcs";

const Workshop = ({ title, banner, slug, host, isOwner, isFullWidth = true, scaleOnHover = true }) => {
    return (
        <>
            <a href={`/workshops/${slug}`}>
                <div className="workshop-card">
                    <img src={getImageUri(banner)} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} />

                    <div className="content">
                        <p className="title">{title}</p>
                        {(!isOwner || host) && (<p className="artist">@{host}</p>)}
                        <div className="btn">View</div>
                    </div>

                    <div className="title-container">
                        <div className="overlay"></div>
                        <p className="title" style={{ position: 'relative' }}>{title}</p>
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
                    border: 10px solid white;
                    background-color: #fff;
                    width: ${isFullWidth ? '100%' : '96%'};
                }

                .workshop-card:hover {
                    transform: scale(${scaleOnHover ? 1.05 : 1});
                }

                .title-container {
                    width: 100%;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 10px 60px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    transition: all .5s ease;
                }

                .title-container .overlay {
                    position: absolute;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                     background-color: rgba(0, 0, 0, .3);
                     filter: blur(10px);
                }
                
                .content {
                    width: 100%;
                    height: 100%;
                    background-color: rgb(0, 0, 0, .3);
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 12px 60px 33px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    opacity: 0;
                    transition: all .5s ease;
                }

                .workshop-card:hover .content {
                    opacity: 1;
                }

                .workshop-card:hover .title-container {
                    opacity: 0;
                }

                .title {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 24px;
                    color: #fff;
                    text-align: center;
                }

                .artist {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 16px;
                    color: #fff;
                    text-align: center;
                }

                .btn {
                    border-radius: 20px;
                    background: transparent;
                    border: 1px solid #fff;
                    padding: 9px 30px;
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 16px;
                    text-align: center;
                    color: #fff;
                    margin-top: 16px;
                }
            `}</style>
        </>
    )
}

export default Workshop;