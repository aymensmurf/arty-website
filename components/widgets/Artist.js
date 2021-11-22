import { getImageUri } from "../../utils/funcs";

const Artist = ({ name, avatar, username, isFullWidth = true, scaleOnHover = true }) => {
    return (
        <>
            <a href={`/${username}`}>
                <div className="artist-card">
                    <img src={getImageUri(avatar)} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} />

                    <div className="content">
                        <p className="artis">{name}</p>
                        <div className="btn">View</div>
                    </div>
                </div>
            </a>

            <style jsx>{`
                .artist-card {
                    height: 300px;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all .5s ease;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                    position: relative;
                    width: ${isFullWidth ? '100%' : '94%'};
                }
                .artist-card:hover {
                    transform: scale(${scaleOnHover ? 1.05 : 1});
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

                .artist-card:hover .content {
                    opacity: 1;
                }

                .artis {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 28px;
                    line-height: 30px;
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
                    margin-top: 10px;
                }
            `}</style>
        </>
    )
}

export default Artist;