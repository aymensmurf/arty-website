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
                    grid-column: 1 / 3;
                }

                @media only screen and (max-width: 1024px){
                    .medias {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .highlighted {
                        grid-column: 1 / 3;
                    }
                }

                @media only screen and (max-width: 768px){
                    .medias {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .highlighted {
                        grid-column: 1 / 3;
                    }
                }

                @media only screen and (max-width: 582px){
                    .medias {
                        grid-template-columns: 1fr;
                    }

                    .highlighted {
                        grid-column: 1 / 2;
                    }
                }
            `}</style>
        </>
    )
}

export default Medias;