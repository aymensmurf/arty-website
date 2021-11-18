import Workshop from "../widgets/Workshop";

const AllWorkshops = ({ data }) => {
    return (
        <>
            <section className="container">
                <div className="grid" style={{ marginTop: 100, marginBottom: 100 }}>
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
                .header {
                    width: 100%;
                    background: url('/img/bg-workshops-header.png');
                    background-attachment: cover;
                    background-repeat: no-repeat;
                    padding: 60px 80px 40px;
                    border-radius: 25px;
                }

                h1 {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 58px;
                    line-height: 75px;
                    text-align: center;
                    color: #fff;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    align-items: center;
                    gap: 30px;
                }
            `}</style>
        </>
    )
}

export default AllWorkshops;