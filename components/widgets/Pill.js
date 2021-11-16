const Pill = ({ title, isActive }) => {
    return (
        <>
            <div className={`pill ${isActive ? 'active' : ''}`}>
                <p className={`${isActive ? 'active' : ''}`}>{title}</p>
            </div>

            <style jsx>{`
                .pill {
                    border-radius: 20px;
                    background: #e4e4e4;
                    padding: 10px 24px;
                    cursor: pointer;
                }

                .pill.active {
                    background: linear-gradient(120deg, #f68955 0%, #ed1e46 100%);
                }

                p {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 13px;
                    text-align: center;
                    color: #797979;
                    text-transform: uppercase;
                }

                p.active {
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default Pill;