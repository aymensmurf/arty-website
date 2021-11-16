import Pill from "./Pill";

const Filters = () => {
    return (
        <>
            <section className="container">
                <Pill title="All" isActive />
                <Pill title="DANCE" />
                <Pill title="MUSIC" />
                <Pill title="PAINT" />
                <Pill title="PHOTOGRAPHY" isActive/>
                <Pill title="THEATRE" />
            </section>

            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    gap: 17px;
                }
            `}</style>
        </>
    )
}

export default Filters;