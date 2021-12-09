import { getImageUri } from "../../utils/funcs";

const Media = ({ id, url, type, wokshop, createdAt }) => {
    return (
        <>
            <div className="media-card">
                {type === "photo" ? (
                    <>
                        <img src={getImageUri(url)} alt="Media" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }} />

                        <div className="glass">
                            <p className="title">{wokshop}</p>
                            <p className="artist">{new Date(createdAt).toLocaleDateString()}</p>
                        </div>
                    </>
                ) : (
                    <video width="100%" height="100%" controls>
                        <source src={getImageUri(url)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            <style jsx>{`
                .media-card {
                    height: 320px;
                    cursor: pointer;
                    transition: all .5s ease;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    border: 10px solid #fff;
                }

                .media-card:hover .glass {
                    bottom: 0px;
                }

                .glass {
                    width: 100%;
                    height: 63px;
                    padding: 20px;
                    position: absolute;
                    bottom: -140px;
                    z-index: 2;
                    background: inherit;
                    overflow: hidden;
                    transition: all .5s ease;
                    display: flex;
                    align-self: flex-end;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
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
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 16px;
                    color: #fff;
                }

                .artist {
                    font-family: "Poppins";
                    font-weight: normal;
                    font-size: 12px;
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default Media;