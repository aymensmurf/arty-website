import Filters from "../widgets/Filters";
import Workshop from "../widgets/Workshop";

const AllWorkshops = () => {
    return (
        <>
            <section className="container">
                <div className="grid" style={{ marginTop: 100, marginBottom: 100 }}>
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
                    <Workshop isFullWidth />
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