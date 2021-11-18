const Pill = ({ title, isActive, isOneColor = false, handleClick }) => {
    return (
        <>
            <div className={`pill ${isActive ? 'active' : ''}`} onClick={handleClick}>
                {title}
            </div>

            <style jsx>{`
                .pill {
                    border-radius: 20px;
                    background: #e4e4e4;
                    padding: 10px 24px;
                    cursor: pointer;
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 13px;
                    line-height: 14px;
                    color: #797979;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    transition: all .3s ease;
                }

                .pill.active {
                    color: #fff;
                    background: ${isOneColor ? '#ED1E46' : 'linear-gradient(120deg, #f68955 0%, #ed1e46 100%)'};
                }

            `}</style>
        </>
    )
}

export default Pill;