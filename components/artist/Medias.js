import Media from "../widgets/Media";

const Medias = ({ data }) => {
    return (
        <>
            <div className="medias">
                {data.map(({ _id, url, type, createdAt }) => (
                    <Media
                        key={_id}
                        id={_id}
                        url={url}
                        type={type}
                        createdAt={createdAt}
                        isFullWidth
                    />
                ))}
            </div>

            <style jsx>{`
                .medias {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }                
            `}</style>
        </>
    )
}

export default Medias;