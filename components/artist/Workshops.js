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
                    gap: 30px;
                }                
            `}</style>
        </>
    )
}

export default Workshops;