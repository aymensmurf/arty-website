import Workshop from "../widgets/Workshop";

const Workshops = () => {
    return (
        <>
            <div className="workshops">
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