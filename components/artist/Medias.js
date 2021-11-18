import Media from "../widgets/Media";

const Medias = ({ data }) => {
    return (
        <>
            <div className="medias">
                {data.map(({ _id, url, type, createdAt }, i) => (
                    <div key={_id} className={(i === 0) && "highlighted"}>
                        <Media
                            id={_id}
                            url={url}
                            type={type}
                            createdAt={createdAt}
                            isFullWidth
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                .medias {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }

                .highlighted {
                    grid-column: 1 / 3
                }
            `}</style>
        </>
    )
}

export default Medias;