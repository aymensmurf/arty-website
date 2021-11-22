import Workshop from "../widgets/Workshop";

const Workshops = ({ data }) => {
    return (
        <>
            <div className="workshops">
                {data.map(({ _id, title, slug, banner }) => (
                    <Workshop
                        key={_id}
                        title={title}
                        banner={banner}
                        slug={slug}
                        isOwner
                        isFullWidth
                    />
                ))}
            </div>

            <style jsx>{`
                .workshops {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                }

                @media only screen and (max-width: 913px){
                    .workshops {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media only screen and (max-width: 662px){
                    .workshops {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </>
    )
}

export default Workshops;