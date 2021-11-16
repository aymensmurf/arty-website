import Media from "../widgets/Media";

const Medias = () => {
    return (
        <>
            <div className="medias">
                <Media isFullWidth />
                <Media isFullWidth />
                <Media isFullWidth />
                <Media isFullWidth />
                <Media isFullWidth />
                <Media isFullWidth />
                <Media isFullWidth />
                <Media isFullWidth />
                <Media isFullWidth />
                <Media isFullWidth />
                <Media isFullWidth />
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