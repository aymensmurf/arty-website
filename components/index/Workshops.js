import Workshop from "../widgets/Workshop";
import WorkshopsSeeMoreCard from "../widgets/WorkshopsSeeMoreCard";

const Workshops = ({ data }) => {
    return (
        <>
            <a name="workshops"></a>

            <section>
                <div className="container grid">
                    <div style={{gridColumn: '1 / 3'}}>
                        <WorkshopsSeeMoreCard />
                    </div>

                    {data.map(({ _id, title, slug, banner, host }) => (
                        <Workshop
                            key={_id}
                            title={title}
                            banner={banner}
                            slug={slug}
                            host={host.username}
                        />
                    ))}
                </div>
            </section>

            <style jsx>{`
                section {
                    background: #f6f6f6;
                    padding: 40px 0px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }
            `}</style>
        </>
    )
}

export default Workshops;